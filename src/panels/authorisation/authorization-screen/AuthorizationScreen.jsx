import {Panel} from "@vkontakte/vkui";
import TextInput from "../../../shared/inputs/text-input/TextInput";
import OnboardingButtonScreen from "../../../shared/wrappers/onboarding-button-screen/OnboardingButtonScreen";
import {useParams, useRouteNavigator} from "@vkontakte/vk-mini-apps-router";
import {useShallow} from "zustand/react/shallow";
import {useStore} from "../../../store/Store";
import {useEffect, useState} from "react";
import PhoneInput from "../../../shared/inputs/phone-input/PhoneInput";
import SuccessCake from "../../../images/success-cake.png"
import InformationScreen from "../../information-screen/InformationScreen";
import CenterContentScreen from "../../../shared/wrappers/center-content-screen/CenterContentScreen";
import {useSSE} from "../../../api/sse";

const AuthorizationScreen = ({nav}) => {

    const routeNavigator = useRouteNavigator()
    const {type} = useParams()

    // actions
    const [setNickname, setPassword, getPhoneNumberFromVK,
        registerUser, loginUser, setPhoneNumber] = useStore(
        useShallow(state => {
            return [state.setNickname, state.setPassword, state.getPhoneNumberFromVK,
                state.registerUser, state.loginUser, state.setPhoneNumber]
        })
    )

    // states
    const [userDenied, phoneNumber] = useStore(
        useShallow((state) => {
            return [state.userDenied, state.phoneNumber]
        })
    )

    const [registerSuccess, setRegisterSuccess] = useState(false)

    useEffect(() => {
        type === "sign-in" ? getPhoneNumberFromVK() : null
    }, [])

    useEffect(() => {
        console.log(registerSuccess)
    }, [registerSuccess])

    const onSubmit = () => {
        if (type === "sign-in") {
            registerUser().then((isRegisterError) => {
                console.log(isRegisterError)
                !isRegisterError && setRegisterSuccess(true)
            })
                .catch((error) => console.log(error))
        } else if (type === "log-in") {
            loginUser().then((isLoginError) => {
                !isLoginError && routeNavigator.push("/establishment-list")
            })
        }
    }

    return (
        <Panel nav={nav}>
            {
                registerSuccess ?
                    <CenterContentScreen>
                        <InformationScreen
                            icon={SuccessCake}
                            header={"Регистрация прошла успешно!"}
                            caption={"Теперь вы можете приступить к бронированию"}
                            buttonText={"Перейти"}
                            onClick={() => routeNavigator.push("/establishment-list")}
                        />
                    </CenterContentScreen> :
                    <OnboardingButtonScreen
                        buttonText={"Подтвердить"}
                        onClick={() => onSubmit()}
                    >
                        {
                            type === "sign-in" ?
                                <PhoneInput
                                    label={"Номер телефона"}
                                    placeholder={"+7 (000) 000-00-00"}
                                    onChange={(phoneNumber) => setPhoneNumber(phoneNumber)}
                                    value={userDenied ? "" : phoneNumber}
                                /> : null
                        }
                        <TextInput
                            label={"Имя пользователя"}
                            placeholder={"Иванов Иван Иванович"}
                            onChange={(text) => setNickname(text)}
                        />
                        <TextInput
                            label={"Пароль"}
                            placeholder={"Введите пароль"}
                            onChange={(password) => setPassword(password)}
                            _type={"password"}
                        />
                    </OnboardingButtonScreen>
            }
        </Panel>
    )
}

export default AuthorizationScreen