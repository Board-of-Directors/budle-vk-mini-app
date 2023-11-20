import style from "./FilterTagRow.module.css"
import {FilterTag} from "../../../shared/tags/filter-tag/FilterTag";

export const FilterTagRow = (props) => {
    return (
        <div className={style.wrapper}>
            {
                props.tagList.map((tag) => {
                    return <FilterTag
                        activeTag={props.activeTag}
                        setActive={props.setActive}
                        tag={tag}
                    />
                })
            }
        </div>
    )
}

export default FilterTagRow