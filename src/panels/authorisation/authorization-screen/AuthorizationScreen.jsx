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
import {useMutation} from "react-query";

const AuthorizationScreen = ({nav}) => {

    const routeNavigator = useRouteNavigator()
    const {type} = useParams()

    // actions
    const [setNickname, setPassword, getPhoneNumberFromVK, setPhoneNumber] = useStore(
        useShallow(state => {
            return [state.setNickname, state.setPassword,
                state.getPhoneNumberFromVK, state.setPhoneNumber]
        })
    )

    // api actions
    const [loginUser, registerUser] = useStore(
        useShallow(state => [state.loginUser, state.registerUser])
    )

    const registerUserMutation = useMutation({
        mutationKey: ["register"],
        mutationFn: () => registerUser()
            .then((isRegisterError) => !isRegisterError
                && setRegisterSuccess(true))
            .catch((error) => console.log(error))
    })

    const loginUserMutation = useMutation({
        mutationKey: ["login"],
        mutationFn: () => loginUser().then((isLoginError) => !isLoginError
            && routeNavigator.push("/establishment-list"))
    })

    // states
    const phoneNumber = useStore(state => state.phoneNumber)
    const [registerSuccess, setRegisterSuccess] = useState(false)

    useEffect(() => {
        type === "sign-in" && getPhoneNumberFromVK()
    }, [])

    const onSubmit = () => {
        if (type === "sign-in") registerUserMutation.mutate()
        else if (type === "log-in") loginUserMutation.mutate()
    }

    if (registerSuccess) return (
        <CenterContentScreen>
            <InformationScreen
                icon={SuccessCake}
                header={"Регистрация прошла успешно!"}
                caption={"Теперь вы можете приступить к бронированию"}
                buttonText={"Перейти"}
                onClick={() => routeNavigator.push("/establishment-list")}
            />
        </CenterContentScreen>
    )

    return (
        <Panel nav={nav}>
            <OnboardingButtonScreen
                buttonText={"Подтвердить"}
                onClick={onSubmit}
            >
                {
                    type === "sign-in" ?
                        <PhoneInput
                            label={"Номер телефона"}
                            placeholder={"+7 (000) 000-00-00"}
                            onChange={setPhoneNumber}
                            value={phoneNumber}
                        /> : null
                }
                <TextInput
                    label={"Имя пользователя"}
                    placeholder={"Иванов Иван Иванович"}
                    onChange={setNickname}
                />
                <TextInput
                    label={"Пароль"}
                    placeholder={"Введите пароль"}
                    onChange={setPassword}
                    _type={"password"}
                />
            </OnboardingButtonScreen>
        </Panel>
    )
}

export default AuthorizationScreen