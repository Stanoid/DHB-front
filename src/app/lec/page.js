"use client";

import RootLayout from "@/layout/layout";
import { MainContext } from "../context/context";
import { useContext } from "react";
import { useEffect } from "react";
import { Center, Flex } from "@mantine/core";
import { API_URL } from "../../../utils/url";
import Image from "next/image";
import { useSearchParams } from 'next/navigation'
import Testelement from "../enrollment/Testelement";
import iosh from "./img/iosh.jpg";
import { useState } from "react";
import emc from "./img/emc.jpg";
import { useRouter } from "next/navigation";
import ig from "./img/ig.jpg";
import Course from "./cunit";
import { FaList,FaClock,FaBookOpen,FaCheckCircle,FaListOl,FaInfo,FaArrowCircleRight,FaArrowCircleLeft } from "react-icons/fa";
import Cookies from "universal-cookie";
import Link from "next/link";

export default function Reports() {
  const { message, setMessage, login, isLogged } = useContext(MainContext);
  const NURL = useSearchParams()
  const [cdata, setCdata] = useState([]);
  const [binfo, setBinfo] = useState([]);
  const [cinfo, setCenfo] = useState([]);
  const [lecs, setLecs] = useState([]);
  const [Ttest, setTTest] = useState([]);
  const router = new useRouter();
  const cookies = new Cookies();

  
  const [page, setpage] = useState(1);

  const [tcheat, setttCheat] = useState(false);
  const [read, setread] = useState(false);
  const [namever, setnameVer] = useState(false);
  const [emailver, setemailVer] = useState(false);
  const [name, setname] = useState(cookies.get("login").user.username);
  const [id, setid] = useState(cookies.get("login").user.id);
  const [email, setemail] = useState(cookies.get("login").user.email);
  const [test, setTest] = useState([]);
  const [results, setResults] = useState(0);
  const [Presults, setPResults] = useState(0);

  const [Ttestresults, setTTestresults] = useState({data:[]});
  const [Ptest, setPTest] = useState([]);
  const [Ptestresults, setPTestresults] = useState({data:[]});
  const [Pcheat, settPCheat] = useState(false);



  useEffect(() => {
    isLogged(2);
   // getcourses();
   getbatch();
   getTechnicalTest()
  }, []);
 


  const attendlec = () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + cookies.get("login").jwt,
      },
    };
    fetch(`${API_URL}/batches/`+NURL.get("bid"), requestOptions)
      .then((response) => response.json())
      .then((data) => {
       
        console.log("object", data.data.attributes.attendence);
        let lec = data.data.attributes.attendence;
        lec.data.push=({id:cookies.get("login").user.id,score:Ttestresults});

        actat(lec);

      });
  };



  
  const actat = (lec) => {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + cookies.get("login").jwt,
        body: JSON.stringify({
          "data":{
            attendence : lec,
   
          }
       })
      },
    };
    fetch(`${API_URL}/batches/`+NURL.get("bid"), requestOptions)
      .then((response) => response.json())
      .then((data) => {
       
      console.log(data);

      });
  };


  

  const getTechnicalTest = () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + cookies.get("login").jwt,
      },
    };
    fetch(`${API_URL}/tests/`+NURL.get("testid"), requestOptions)
      .then((response) => response.json())
      .then((data) => {
       
     console.log("test", data.data.attributes.object);
     setTTest(data.data.attributes.object);
      });
  };




  

  const appendAnswer = (data,state)=>{
    //console.log(data,state);
    let vcheck  = false;
    
    if(state.data.length==0){
      state.data.push(data)
     // console.table("from zero sum func ",state.data)
     setTTestresults(state)
     console.table(Ttestresults.data);
      return
    }
    
    
    for (let i = 0; i < state.data.length; i++) {
     if(data.questionid===state.data[i].questionid){
      state.data[i]= data;
      vcheck = true;
     // console.table("from for ",state.data)
     setTTestresults(state)
     console.table(Ttestresults.data);
      return
     }else{
    
     }
    }
    
    if (!vcheck){
      state.data.push(data)
      setTTestresults(state)
      console.table(Ttestresults.data);
    //console.table("from if ",state.data);
     }
    
    
    
    
    
    
    //console.table(Ttestresults.data);
      }
    


      const checktechnicaltest = ()=>{

        let score = 0;
      for (let i = 0; i < Ttestresults.data.length; i++) {
      if(Ttestresults.data[i].check ==1){
        score++
      } }
      
      console.log(score+" out of "+ Ttest.length);
      setResults(score);
         
      
      
         attendlec();
        return;
         setttCheat(true); 
        
      
        }



  const getbatch = (bid) => {
   
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + cookies.get("login").jwt,
      },
    };
    fetch(`${API_URL}/batches/`+NURL.get("bid")+"?populate=*"
    , requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("ob",data)
    setLecs(data.data.attributes.lectures.lecs);
    setCenfo(data.data.attributes.course.data.attributes.name);
    setBinfo(data.data.attributes.name);
   setCdata(data.data)
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
        

<div style={{display:"flex",width:"100%",padding:20}} id="dash">
<div style={{display:"flex",flexDirection:"column",color:"#6E6E6E", height:"100%",width:"100%",backgroundColor:"white",padding:20}} id="dashin">

<div>
  <h1 style={{fontSize:20,fontWeight:"bold"}} >Lecture No {NURL.get("lid")+1} - {NURL.get("title")}:</h1>
</div>

<div style={{marginTop:20}}>
  <div><span>{cinfo&&cinfo } </span> - <span>{binfo&&binfo  } batch </span> </div>
 




 <div style={{padding:20}}>


 <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:10,width:"100%"}}>
{Ttest&&Ttest.map((item, index) => (

<Testelement checkTest={(data)=>{
   appendAnswer(data,Ttestresults);
}}  cheat={tcheat} no={index+1} ob = {item}/>
       
      ))}


<div>
  
</div>
      <div style={{display:tcheat?"flex":"none",flexDirection:"column",justifyContent:"center",
      alignItems:"center",backgroundColor:"rgba(0,255,0,0.6)",
       color:"white",fontSize:25,fontWeight:"bold",
      padding:20,borderRadius:10}}>
        <div>
        Your Score:
        </div>

        <div>
        {results+ "/"+ Ttest.length}
        </div>
       
      </div>


<div style={{display:tcheat?"none":"block",textAlign:"center",margin:20,cursor:"pointer"}}>
<div onClick={()=>{checktechnicaltest(); }}  style={{display:"flex",justifyContent:"center",alignItems:"center"}} class="w-full px-4 py-2 text-sm text-white font-medium text-white bg-blue-500 border border-gray-300 
rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"> 
 <span style={{marginRight:10}}>Check Answers</span> <FaCheckCircle/> </div>
</div> 

</div>


<div style={{padding:10,display:tcheat?"flex":"none",alignItems:'center',justifyContent:"center"}}>

<a href={NURL.get("linkv")}>
<div style={{backgroundColor:"#0040FF",padding:10,borderRadius:5,color:"white",fontWeight:"bold"}}
          
          >

             JOIN LECTURE </div>  </a>

 

</div>






 </div>

</div>

  

</div>

  
</div>



      

        <div class="max-w-7xl mx-auto text-gray-600 py-2 px-4 sm:px-6 md:px-8"></div>
      </main>
    </RootLayout>
  );
}
