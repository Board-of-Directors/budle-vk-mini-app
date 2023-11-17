import PopupWrapper from "../popup-wrapper/PopupWrapper";
import NotificationCard from "../../entities/notification-card/NotificationCard";

const NotificationPopup = ({notification, onClose}) => {
    return (
        <PopupWrapper
            header={"Новое уведомление!"}
            onClose={() => onClose()}
        >
            <NotificationCard
                notification={notification}
                isNested={true}
            />
        </PopupWrapper>
    );
};

export default NotificationPopup;
