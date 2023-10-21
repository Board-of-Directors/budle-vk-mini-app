import {Panel} from "@vkontakte/vkui";
import TextInput from "../../../shared/inputs/text-input/TextInput";
import OnboardingButtonScreen from "../../../shared/wrappers/onboarding-button-screen/OnboardingButtonScreen";
import {useParams, useRouteNavigator} from "@vkontakte/vk-mini-apps-router";
import {useShallow} from "zustand/react/shallow";
import {useStore} from "../../../store/Store";
import {useEffect} from "react";
import PhoneInput from "../../../shared/inputs/phone-input/PhoneInput";

const AuthorizationScreen = ({nav}) => {

    const routeNavigator = useRouteNavigator()
    const {type} = useParams()

    // actions
    const [setNickname, setPassword, getPhoneNumberFromVK,
        registerUser, loginUser, setPhoneNumber] = useStore(
        useShallow((state) => {
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

    useEffect(() => {
        type === "sign-in" ? getPhoneNumberFromVK() : null
    }, [])

    const onSubmit = () => {
        if (type === "sign-in") {
            registerUser().then(() => routeNavigator.push("/authorization-screen/success"))
                .catch((error) => console.log(error))
        } else if (type === "log-in") {
            loginUser().then(() => routeNavigator.push("/establishment-list"))
                .catch((error) => console.log(error))
        }
    }

    return (
        <Panel nav={nav}>
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
        </Panel>
    )
}

export default AuthorizationScreen