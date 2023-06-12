import React, {useEffect,useState} from 'react'
import axios from 'axios';

const Home = () => {
  const[data,setData]= useState([]);

  useEffect(()=>{
    axios.get('  https://jsonplaceholder.typicode.com/posts').then(
      response=>setData(response.data)
    )
  }, [])

  return (
    <div >
      {data.map(item=><li key={item.id}>{item.userId}
      {item.title}<br/>
       {item.id} <br/>
       {item.body}<br/>
       </li>)}
    </div>
  )
}

export default Home;

