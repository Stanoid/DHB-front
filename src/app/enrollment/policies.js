import React from 'react'
import ReactDom from 'react-dom'
import Markdown from 'react-markdown'
import { useState,useEffect } from 'react'
import { API_URL } from '../../../utils/url'
//ReactDom.render(, document.getElementById("yo"))

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
           
          },
        };
        fetch(`${API_URL}/tests/3`, requestOptions)
          .then((response) => response.json())
          .then((data) => {
           
         console.log("Policie", data.data.attributes.tett);
          setCdata(data.data.attributes.tett)
          });
      };
    




  return (
    <div style={{height:250,overflow:"scroll"}} id="yo">

        
        <Markdown>{cdata&&cdata}</Markdown>
    </div>
  )

  
}

export default policies