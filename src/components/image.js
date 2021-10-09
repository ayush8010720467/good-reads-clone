function Image(props){
    return (<div className="gr-img">
    <img src={props.src}
        alt={props.alt} />
        {props.title?<h4>{props.title}</h4>:<></>}
</div>)
}
export default Image;