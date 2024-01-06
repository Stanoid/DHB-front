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
    fetch(`${API_URL}/subscriptions?populate=*`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
       
        console.log("object", data);
      
        setSubs(data.data)
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
         <h1 style={{fontSize:25,fontWeight:"bold",color:"darkgray"}}>Pending Enrollment requests:</h1>
          
          <div style={{display:"flex",flexDirection:'column'}}>

          {subs&&subs.map((item, index) => (
               <Subel   data={item} />
          ))}





          </div>
          
          
          </div>
      </main>
    </RootLayout>
  );
}
