import './Detail.css'
import {useEffect, useState} from 'react'
import Left from '../components/left/left';
import Mid from '../components/mid/mid';
import Right from '../components/right/right';
import { constants } from '../constants';
import {base_url} from '../env'
function Detail() {
  let url = base_url + '/dev/book/details?slug=11468377-thinking-fast-and-slow'
  const [data,updateData] = useState({})
  useEffect(()=>{
    fetch(url).then(res=>res.json()).then((d)=>{updateData(d)}).catch(e=>console.log(e))
  },[]);
  useEffect(()=>{console.log('hello')},[data])
  
    return (
    <>
    <div className="body-wrap">
        <div className="goodreads-wrap">
            <Left source={data.coverImage||constants.loader}></Left>
            <Mid data={{'noOfRatings': data.noOfRatings,rating: data.rating,description: data.description,isbn: data.isbn}}></Mid>
            <Right genre={data.genre}></Right>
        </div>
    </div>
    </>
  );
}

export default Detail;