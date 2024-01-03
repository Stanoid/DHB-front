import React from 'react'
import ReactDom from 'react-dom'
import Markdown from 'react-markdown'
import Cookies from "universal-cookie";
import { useState,useEffect } from 'react'
import { API_URL } from '../../../utils/url'
//ReactDom.render(, document.getElementById("yo"))
const cookies = new Cookies();
function policies() {


    const [cdata, setCdata] = useState(null);
  
useEffect(() => {
getcourses();
}, [])


    const getcourses = () => {
        const requestOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + cookies.get("login").jwt,
           
          },
        };
        fetch(`${API_URL}/tests/57`, requestOptions)
          .then((response) => response.json())
          .then((data) => {
           console.log("data",data)
         console.log("Policie", data.data.attributes.tett);
          setCdata(data.data.attributes.tett)
          });
      };
    




  return (
    <div style={{height:250,overflow:"scroll",fontSize:15}} id="yo">

        
        <Markdown>{cdata&&cdata}</Markdown>
    </div>
  )

  
}

export default policies