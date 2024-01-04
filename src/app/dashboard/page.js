"use client";

import RootLayout from "@/layout/layout";
import { MainContext } from "../context/context";
import { useContext } from "react";
import { useEffect } from "react";
import { Center, Flex } from "@mantine/core";
import { API_URL } from "../../../utils/url";
import Image from "next/image";
import iosh from "./img/iosh.jpg";
import Link from "next/link";
import { useState } from "react";
import emc from "./img/emc.jpg";

import { useRouter } from "next/navigation";
import ig from "./img/ig.jpg";
import Course from "./cunit";

import Cookies from "universal-cookie";

export default function Reports() {
  const { message, setMessage, login, isLogged } = useContext(MainContext);

  const [cdata, setCdata] = useState([]);
  const [binfo, setBinfo] = useState([]);
  const [bid, setBid] = useState([]);
  const [cinfo, setCenfo] = useState([]);
  const [lecs, setLecs] = useState([]);
  const router = new useRouter();
  const cookies = new Cookies();
  useEffect(() => {
    isLogged(2);
   // getcourses();
   getEnrolled();
  }, []);
  const getcourses = () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + cookies.get("login").jwt,
      },
    };
    fetch(`${API_URL}/courses`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setCdata(data.data);
        console.log("object", data);
      });
  };


  const getEnrolled = () => {
    
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + cookies.get("login").jwt,
      },
    };
    fetch(`${API_URL}/subscriptions?[filters][user][id]=`+cookies.get("login").user.id
    , requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("aasaxxcc",data)
        if(data.data.length==0){
          return
        }
   setBid(data.data[0].attributes.bill.bid)
     getbatch();
   
    setBinfo(data.data[0].attributes.bill.cname)
   
      });
  };


  
  const getbatch = () => {
    console.log("batch id",bid)
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + cookies.get("login").jwt,
      },
    };
    fetch(`${API_URL}/batches/`+bid+"?populate=*"
    , requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("ssssdd batch data",data.data)

    setLecs(data.data[0].attributes.lectures.lecs);
    console.log("batch state",lecs)
    setCenfo(data.data[0].attributes.course.data.attributes.name);
   
      });
  };

  const getcourseData = (id) => {
    console.log(id);
  };

  return (
    <RootLayout>
      <main
        class="flex-1 relative z-0 overflow-y-auto  focus:outline-none"
        tabindex="0"
        x-data
        x-init="$el.focus()"
      >
        

<div style={{display:"flex",width:"100%",padding:10}} id="dash">
<div style={{display:binfo.length==0?"none":"flex",flexDirection:"column",color:"#6E6E6E", height:"100%",width:"100%",backgroundColor:"white",padding:20}} id="dashin">

<div>
  <h1 className="text-3xl font-bold underline" style={{fontSize:20,fontWeight:"bold"}} >Upcoming lectures:</h1>
</div>

<div style={{marginTop:20}}>
  <div><span>{cinfo&&cinfo } </span> - <span>{binfo&&binfo  } batch </span> </div>
 




 <div style={{marginTop:20}} className="sm:p-0 lg:p-5">




    {lecs.map((item, index) => (
          <div style={{display:'flex',padding:"10px 0px",textAlign:"left",marginTop:10,alignItems:"flex-start",
          justifyContent:"space-between",flexDirection:"row",borderBottom:"0.5px solid black"}}>
          
       



          
           <div  style={{fontWeight:"bold",flexDirection:"row",display:"flex",justifyContent:'center',alignItems:"flex-start",textAlign:"left"}}> 
         <p style={{textAlign:"left"}}> 
           {index+1} - {  item.title}

           <br/>
           <div style={{fontWeight:'bold',fontSize:15,padding:10}}> {item.date} At {item.time} </div>
         </p>
           </div>


        <div style={{display:"flex",alignItems:"center", justifyContent:"center"}}>
          
        
          {item.status==1?<div  style={{backgroundColor:"grey",padding:10,borderRadius:5,color:"white",fontWeight:"bold"}}
          
     > JOIN </div> :
          
          

<Link href={{ pathname: '/lec', query: { bid: bid,lid:index,linkv:item.link,title:item.title,testid:item.testid }}}>
<div   className="bg-blue-500" style={{padding:10,borderRadius:5,color:"white",fontWeight:"bold"}}
          
          >

             JOIN  </div>  

  </Link>
         }
           
          </div>
          </div>

          
          ))}



 </div>

</div>

  

</div>

  
</div>


        <div style={{ margin: 30 }}>
          <hr />
        </div>

        <div
        className="sm:flex-col lg:flex-row md:flex-row"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          
<Course getData={()=>{router.push("/iosh")}}  data={{"price":"150 USD","duration":"3 Days","board":"IOSH","url":"/iosh"}}  title={"IOSH Managing safely"} img={iosh} />

<Course getData={()=>{router.push("/neboshemc")}} data={{"price":"500 USD","duration":"5 Days","board":"NEBOSH","url":"/neboshemc"}} title={"NEBOSH ENVIRONMENT MANAGEMENT CERTIFICATE (NEBOSH EMC)"} img={emc} />

 

<Course getData={()=>{router.push("/neboshig")}} data={{"price":"500 USD","duration":"14 Days","board":"NEBOSH","url":"/neboshig"}} title={"Nebosh IG"} img={ig} />

          {/* {cdata.map((item, index) => (
            <Course
              getData={() => {
                getcourseData();
              }}
              title={item.attributes.name}
              img={imgsn}
            />
          ))} */}
        </div>

        <div  class="max-w-7xl h-32 mx-auto text-gray-600 py-2 px-4 sm:px-6 md:px-8"></div>
      </main>
    </RootLayout>
  );
}
