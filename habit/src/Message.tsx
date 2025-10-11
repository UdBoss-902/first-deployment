function Message(props){
    return(
        <div>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <p>Count from parent {props.count}</p>
        </div>
    )
}
export default Message