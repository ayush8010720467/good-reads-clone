import React from 'react'
import {useEffect, useState} from 'react'
import Left from '../components/left/left';
import Mid from '../components/mid/mid';
import Right from '../components/right/right';
//import { constants } from '../constants';
import {base_url} from '../env'

function Home() {
    let url = base_url + '/dev/books'
    const [data,setData] = useState({})
    // const [isloaded,setIsloaded]=useState(false);
    useEffect(()=>{
      
          
        fetch(url).then(res=>res.json()).then((d)=>setData(d)).catch(e=>console.log('Error'))
        // setIsloaded(!isloaded)
      
      
    },[]);
    
      return (
      <>
      <div className="body-wrap">
          <div className="goodreads-wrap">
            <ul>
            {data.length>0? data.map((d, i)=><li key={i}>
            <Left source={d.coverImage}></Left>
            <Mid data={{'noOfRatings': d.noOfRatings, 'rating': d.rating,'description': d.description,'isbn': d.isbn}}></Mid>
            <Right genre={d.genre}></Right>
            </li>
            ):<li>
              <Left source='https://cdn3.iconfinder.com/data/icons/interaction-design/512/Loading_C-512.png'></Left>
              <Mid data='Loading'></Mid>
              <Right genre={data.genre}></Right>
              
              </li>}
            
            </ul>
            
            
            
          </div>
      </div>
      </>
    );
}

export default Home
