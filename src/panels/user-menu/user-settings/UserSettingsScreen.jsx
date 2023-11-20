import style from "./UserSettingsScreen.module.css"
import HeaderCloseRow from "../../../shared/rows/header-close-row/HeaderCloseRow";
import TextInput from "../../../shared/inputs/text-input/TextInput";
import {useShallow} from "zustand/react/shallow";
import {useStore} from "../../../store/Store";
import PhoneInput from "../../../shared/inputs/phone-input/PhoneInput";
import Button from "../../../shared/buttons/button/Button";
import {Panel} from "@vkontakte/vkui";
import {useEffect} from "react";

const UserSettingsScreen = ({nav}) => {

    const getUser = useStore(state => state.getUser)
    const [nickname, phoneNumber, password] = useStore(
        useShallow(state => [state.nickname, state.phoneNumber, state.password])
    )

    useEffect(() => {
        getUser()
        console.log(nickname, phoneNumber, password)
    }, [])

    return (
        <Panel nav={nav}>
            <div className={style.wrapper}>
                <HeaderCloseRow header={"Настройки профиля"}/>
                <TextInput
                    label={'ФИО'}
                    value={nickname}
                    onChange={() => {}}
                />
                <PhoneInput
                    label={'Номер телефона'}
                    value={phoneNumber}
                    onChange={() => {}}
                />
                <TextInput
                    _type={"password"}
                    label={'Пароль'}
                    value={password}
                    onChange={() => {}}
                />
                <Button
                    text={"Сохранить изменения"}
                    onClick={() => console.log("saved!")}
                />
            </div>
        </Panel>
    );
};

export default UserSettingsScreen;
