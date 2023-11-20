import {Panel} from "@vkontakte/vkui";
import style from "../user-settings/UserSettingsScreen.module.css";
import HeaderCloseRow from "../../../shared/rows/header-close-row/HeaderCloseRow";
import {MockNotification} from "../../../mock-data/MockNotification";
import NotificationCard from "../../../entities/notification-card/NotificationCard";

const UserNotificationsScreen = ({nav}) => {
    return (
        <Panel nav={nav}>
            <div className={style.wrapper}>
                <HeaderCloseRow header={"Мои уведомления"}/>
            </div>
        </Panel>
    );
};

export default UserNotificationsScreen;