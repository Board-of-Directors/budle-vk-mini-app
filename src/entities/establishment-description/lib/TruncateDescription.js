export const truncateDescription = (text) => {
    return text.length > 200 ? text.substring(0,200) + ".." : text
}