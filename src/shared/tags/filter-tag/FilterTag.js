import style from "./FilterTag.module.css"

export const FilterTag = (props) => {

    const tag = props.tag
    const tagColor = props.activeTag.id === tag.id ? "#654DF6" : "#EEF5F9"
    const textColor = props.activeTag.id === tag.id ? "#FFFFFF" : "#B6C1CE"

    return (
        <div
            id={tag.id}
            className={style.tag}
            style={{
                backgroundColor: tagColor,
                color: textColor
            }}
            onClick={() => props.setActive(tag)}
        >
            {tag.name}
        </div>
    )

}