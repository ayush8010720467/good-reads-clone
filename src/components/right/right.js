import { constants } from "../../constants";
import Genere from "../genere";
import Image from "../image";
import './right.css'
function Right(props){
    const getGenere = ()=>{
        if(props.genre){
            return  props.genre.map((elem, i)=>{
                return <li key={i}><Genere gnere={elem} userNumber={i}></Genere></li>
            })
        } else{
            return <Image src={constants.loader} ></Image>
        }
        
    }
    // const [generes, updategeneres] = useState(props.genere)
 return (<div className="gr-genres">
 <ul>
     <li>
         <span>GENRES</span>
     </li>
     {getGenere()}
 </ul>
</div>);
}
export default Right;