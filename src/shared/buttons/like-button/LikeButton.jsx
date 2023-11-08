import style from "./LikeButton.module.css"
import {FiHeart} from "react-icons/fi";

const LikeButton = (props) => {
    return (
        <div
            className={style.wrapper}
            onClick={() => props.setLiked()}
            isliked={props.isLiked}
        >
            <FiHeart
                size={"16px"}
                className={style.icon}
                isLiked={props.isLiked}
            />
        </div>
    );
};

export default LikeButton
