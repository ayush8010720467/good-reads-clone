import React from 'react'
import {useEffect, useState} from 'react'
import Left from '../components/left/left';
import Mid from '../components/mid/mid';
import Right from '../components/right/right';
import { constants } from '../constants';
import {base_url} from '../env';
import Navbar from './Navbar';


function Home() {
    let url = base_url + '/dev/books'
    const [data,setData] = useState({})
    // const [isloaded,setIsloaded]=useState(false);
    useEffect(()=>{
      
          
        fetch(url).then(res=>res.json()).then((d)=>setData(d)).catch(e=>console.log('Error'))
        // setIsloaded(!isloaded)
      
      
    },[url]);
    
      return (
      <>
      <Navbar/>
      <div className="body-wrap">
          <div className="goodreads-wrap">
            <ul>
            {data.length>0? data.map((d, i)=><li key={i} className='content-list'>
            <Left source={d.coverImage} isbn={d.isbn}></Left>
            <Mid data={{'noOfRatings': d.noOfRatings, 'rating': d.rating,'description': d.description,'isbn': d.isbn}}></Mid>
            <Right genre={d.genre}></Right>
            </li>
            ):<li>
              <Left source={constants.loader}></Left>
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
