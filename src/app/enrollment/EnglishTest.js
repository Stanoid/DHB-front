import {React,useEffect,useState} from 'react'
import Testelement from './Testelement'
import Cookies from 'universal-cookie';
import { API_URL } from '../../../utils/url';
function EnglishTest() {
useEffect(() => {
  getTest();
}, [])

const [data,setData] = useState([]);


const cookies = new Cookies();


const getTest = ()=>{
    const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + cookies.get("login").jwt,
        },
      };
      fetch(`${API_URL}/tests/`+58, requestOptions)
        .then((response) => response.json())
        .then((data) => {
         
       console.log("newwwwwwwww", data.data.attributes.object);
        setData(data.data.attributes.object);
        });
}





  return (
   

<div>
  

{data.map((item, index) => (

<Testelement no={index+1} ob = {item}/>
       
      ))}



</div>


  )
}

export default EnglishTest