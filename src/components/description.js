import Author from "./AuthorSection";
import { Heading2 } from "./heading";
import Paragraph from "./paragraph";
//import { constants } from "../constants";
function Description(props){
    let desc= props.data.data.description; // desc is an array
    
    return (<>
    <div className="gr-desc">
    <Heading2 text={props.data.data.isbn}></Heading2> 
    <Author></Author>
    <div className="description">
        <ul>
        {desc? 
        desc.map((d,i)=>{
            return <li className='content' key={i}><Paragraph text={d.text}></Paragraph></li>
        } )
        :<></>
    }</ul>
       
    </div>
</div>
    </>)
}
export default Description;