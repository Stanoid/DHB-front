"use client";

import RootLayout from "@/layout/layout";
import { API_URL } from "../../../utils/url";
import { useState } from "react";
import Subel from "./subel";
import { useEffect } from "react";

import Cookies from "universal-cookie";
export default function Reports() {
 
  const cookies = new Cookies();
  const [subs, setSubs] = useState([]);
  const [attob, setAttob] = useState([]);

  useEffect(() => {
    getsubs();
  }, []);


  const getsubs = () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + cookies.get("login").jwt,
      },
    };
    fetch(`${API_URL}/batches/7?populate=*`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
       
        console.log("object", data.data.attributes.attendence);
        setSubs(data.data.attributes.lectures)
      setAttob(data.data.attributes.attendence)
       
      });
  };



  return (
    <RootLayout>
      <main
        class="flex-1 relative z-0 overflow-y-auto py-6 focus:outline-none"
        tabindex="0"
        x-data
        x-init="$el.focus()"
      >
        <div  style={{padding:10,color:"black"}}>
         <h1 style={{fontSize:25,fontWeight:"bold",color:"darkgray"}}>Ongoing Batches:</h1>
          
          <div style={{display:"flex",flexDirection:'column'}}>

          {subs.lecs&&subs.lecs.map((item, index) => (
               <Subel  attob={attob}  data={item} />
          ))}





          </div>
          
          
          </div>
      </main>
    </RootLayout>
  );
}
