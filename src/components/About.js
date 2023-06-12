import React, {useEffect,useState} from 'react'
import axios from 'axios';

const About = () => {
  const[data,setData]= useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/{ID}').then(
      response=>setData(response.data)
    )
  }, [])

  return (
    <div >
      {data.map(item=><li key={item.id}>
      {item}
       </li>)}
    </div>
  )
}

export default About;

