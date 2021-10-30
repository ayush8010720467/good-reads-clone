import './image.css'

function Image(props){
    
    return (<div className="gr-img">
    <img src={props.src}
        alt={props.alt} 
        onClick={()=>{window.location.assign(`Details/${props.isbn}`)}}
        />
        {props.title?<h4>{props.title}</h4>:<></>}
</div>)
}
export default Image;