const Base64Image = (props) => {
    return (
        <img
            src={`data:image/jpeg;base64,${props.data}`}
            style={{
                width: props.size,
                height: props.size
            }}
            className={props.className}
            alt={"/"}
        />
    )
}

export default Base64Image