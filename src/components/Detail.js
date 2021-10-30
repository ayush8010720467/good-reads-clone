import './Detail.css'
import {useEffect, useState} from 'react'
import Left from '../components/left/left';
import Mid from '../components/mid/mid';
import Right from '../components/right/right';
import { constants } from '../constants';
import {base_url} from '../env'
import { useParams } from 'react-router';
function Detail() {
  let {isbn}=useParams();

  let url = base_url + `/dev/book/details?slug=${isbn}`
  const [data,updateData] = useState({})
  useEffect(()=>{
    fetch(url).then(res=>res.json()).then((d)=>{updateData(d)}).catch(e=>console.log(e))
  },[url]);
  
  
    return (
    <>
    <div className="body-wrap">
        <div className="goodreads-wrap">
            <Left source={data.coverImage||constants.loader}></Left>
            <Mid data={{noOfRatings: data.noOfRatings,rating: data.rating,description: data.description,isbn: data.isbn}}></Mid>
            <Right genre={data.genre}></Right>
        </div>
    </div>
    </>
  );
}

export default Detail;