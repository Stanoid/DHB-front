"use client";

import RootLayout from "@/layout/layout";
import { MainContext } from "../context/context";
import { useContext,useEffect } from "react";
import ReactDom from 'react-dom'
import Markdown from 'react-markdown'
import { API_URL } from "../../../utils/url";
import Image from "next/image";
import { useState } from "react";
import bg from "./img/bg.jpg"
import { useSearchParams } from 'next/navigation'
import { FaList,FaClock,FaBookOpen,FaCheckCircle,FaListOl,FaInfo,FaArrowCircleRight,FaArrowCircleLeft } from "react-icons/fa";
import Policie from "./policies.js"
import Print from "./print";
import Testelement from "./Testelement";
import Playercomp from "./player";
import Cookies from "universal-cookie";
import EnglishTest from "./EnglishTest";

export default function Enrollment() {

  const cookies = new Cookies();
  const NURL = useSearchParams()
  const { message, setMessage, login, isLogged } = useContext(MainContext);
  const [page, setpage] = useState(1);
  const [cdata, setCdata] = useState(null);
  const [agree, setagree] = useState(false);
  const [read, setread] = useState(false);
  const [namever, setnameVer] = useState(false);
  const [emailver, setemailVer] = useState(false);
  const [name, setname] = useState(cookies.get("login").user.username);
  const [email, setemail] = useState(cookies.get("login").user.email);
  const [test, setTest] = useState([]);

  

  useEffect(() => {
    isLogged(2);
    getcourses();

    console.log("aaaaaaaa",cookies.get("login"))
  }, []);


  const nextPage=()=>{
    if(page ==7){
      return
    }

    if(page==2){

      if(!namever||!emailver ){
        alert("Please Check your name an email using the buttons")
        return
      }

    }
    
    
    if(!agree ){
      alert("Please Read and Agree with DHB Policies")
      return
    }else{
      setpage(page+1)
    }
    
    
    
  
  }


  
  const prevPage=()=>{
    if(page ==1){
      return
    }
    
  
      setpage(page-1) 
  
  }


  const getcourses = () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + cookies.get("login").jwt,
      },
    };
    fetch(`${API_URL}/batches/`+NURL.get("bid")+"?populate=course", requestOptions)
      .then((response) => response.json())
      .then((data) => {
       
     console.log("object", data);
     setCdata(data.data.attributes);
     getTest()
      });
  };


  const getTest = () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + cookies.get("login").jwt,
      },
    };
    fetch(`${API_URL}/tests/`+4, requestOptions)
      .then((response) => response.json())
      .then((data) => {
       
     console.log("test", data.data.attributes.object);
     setTest(data.data.attributes.object);
      });
  };





  const divStyle = {
    backgroundImage: `url(${bg.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '300px',
    backgroundColor:"#81DBFF",
    backgroundBlendMode:"multiply",
    display: 'flex',
    fontSize:25,
    marginBottom:15,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
  };

  const getcourseData = () => {
    console.log();
  };

  return (
    <RootLayout>
      <main
        class="flex-1 relative z-0 overflow-y-auto  focus:outline-none"
        tabindex="0"
        x-data
        x-init="$el.focus()"
      >


<div onClick={()=>{getcourseData()}} style={{display:"flex",flexDirection:"column",width:"100%",padding:20,color:"black",alignItems:"center",justifyContent:"center"}}> 


<div className="shadow-sm" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",borderRadius:10,padding:30}}>



  <div style={{fontSize:30}}>
<h1> Enrolling to <span style={{fontWeight:"bold"}}>{cdata&&cdata.name}
</span>  batch of  <span style={{fontWeight:"bold"}}> {cdata&&cdata.course.data.attributes.name} </span></h1>
</div>
<div style={{marginTop:20}}>
<ol  style={{display:"flex",flexDirection:"row"}} class="items-center  space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
  
    <li style={{color: page>=1?"#819FF7":"grey", margin:"0px 10px 0px 10px"}}  class="flex items-center space-x-2.5">
        <span style={{color: page>=1?"white":"grey",backgroundColor: page>=1?"#819FF7":""}} class="flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ">
            1
        </span>
        <span  style={{display:page==1?"block":"none",color:"grey"}}> 
            <h3 class="font-medium leading-tight">Terms & Conditions</h3>
            <p class="text-sm">Agree to DHB policies</p>
        </span>
    </li>

    <li style={{color: page>=2?"#819FF7":"grey", margin:"0px 10px 0px 10px"}} class="flex items-center space-x-2.5">
        <span style={{color: page>=2?"white":"grey",backgroundColor: page>=2?"#819FF7":""}} class="flex items-center justify-center w-8 h-8 border  rounded-full shrink-0 ">
            2
        </span>
        <span  style={{display:page==2?"block":"none",color:"grey"}}>
            <h3 class="font-medium leading-tight">Review your information</h3>
            <p class="text-sm">Make sure its correct</p>
        </span>
    </li>

    <li style={{color: page>=3?"#819FF7":"grey", margin:"0px 10px 0px 10px"}} class="flex items-center space-x-2.5">
        <span style={{color: page>=3?"white":"grey",backgroundColor: page>=3?"#819FF7":""}} class="flex items-center justify-center w-8 h-8 border  rounded-full shrink-0 ">
            3
        </span>
        <span  style={{display:page==3?"block":"none",color:"grey"}}>
            <h3 class="font-medium leading-tight">Pre-course meeting</h3>
            <p class="text-sm">Watch the meeting video and take the test</p>
        </span>
    </li>
    
  


    <li style={{color: page>=4?"white":"grey", margin:"0px 10px 0px 10px"}} class="flex items-center space-x-2.5">
        <span style={{color: page>=4?"white":"grey",backgroundColor: page>=4?"#819FF7":""}} class="flex items-center justify-center w-8 h-8 border  rounded-full shrink-0">
            4
        </span>
        <span  style={{display:page==4?"block":"none",color:"grey"}}>
            <h3 class="font-medium leading-tight"> English Test </h3>
            <p class="text-sm">Test your English level</p>
        </span>
    </li>


    <li style={{color: page>=5?"#819FF7":"grey", margin:"0px 10px 0px 10px"}} class="flex items-center space-x-2.5">
        <span style={{color: page>=5?"white":"grey",backgroundColor: page>=5?"#819FF7":""}} class="flex items-center justify-center w-8 h-8 border  rounded-full shrink-0 ">
            5
        </span>
        <span  style={{display:page==5?"block":"none",color:"grey"}}>
            <h3 class="font-medium leading-tight"> ID check </h3>
            <p class="text-sm">Upload a video to verify your identity</p>
        </span>
    </li>

   


    <li style={{color: page>=6?"#819FF7":"grey", margin:15}} class="flex items-center  space-x-2.5">
        <span style={{color: page>=6?"white":"grey",backgroundColor: page>=6?"#819FF7":""}} class="flex items-center justify-center w-8 h-8 border  rounded-full shrink-0 ">
            6
        </span>
        <span  style={{display:page==6?"block":"none",color:"grey"}}>
            <h3 class="font-medium leading-tight">Payment</h3>
            <p class="text-sm">Choose a payment method</p>
        </span>
    </li>
</ol>

</div>




</div>


<div className="shadow-md" style={{display:"flex",alignItems:"center",flexDirection:"column",marginTop:20,justifyContent:"center",width:"100%",borderRadius:10,padding:30}}>





<div style={{display: page==1?"flex":"none",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>

<Policie/>

<div style={{padding:20}} >

<div class="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox"  checked={agree}  onChange={(event) => {
               if(!agree){setagree(true)}else{setagree(false)} console.log(agree)
                }}  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 "> I Agree with DHB policies</label>
</div>
</div>
</div>


<div style={{display: page==2?"flex":"none",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:10,width:"100%"}}>
   <div style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:20,fontWeight:"bold"}}>
    Review information
   </div>

<div style={{ padding: 10,width:"100%",display:"flex",justifyContent:"center" ,alignItems:"center"}}>

  <div className="w-4/5" style={{padding:10}}>

  <label for="name" style={{marginBottom:10}} class="  text-sm font-medium text-black">
               Full name (As you want it printed on your certeficate)
              </label>
              <input
                value={name}
                 disabled={namever}
                type="text"
                onChange={(event) => {
                  setname(event.target.value);
                }}
                name="name"
                id="name"
              
                class="bg-gray-50 border
                       border-gray-900 sm:text-sm  text-black rounded-lg focus:ring-primary-600 focus:border-primary-600
                        block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 
                         dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
  </div>
  <div className="w-1/5 " style={{paddingTop:11}}>
  <div style={{textAlign:"center",marginTop:10,cursor:"pointer"}}>
<div onClick={()=>{setnameVer(!namever); }}  style={{display:"flex",justifyContent:"center",alignItems:"center", backgroundColor:namever?"#35FE60":"#35C4FE"}} class="w-full px-4 py-2 text-sm text-white font-medium text-white border border-gray-300 
rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"> 
 <span style={{marginRight:10}}> {namever?"Checked":"Check"} </span>  <FaCheckCircle/> </div>
</div>
  </div>
            </div>   


            <div style={{ padding: 10,width:"100%",display:"flex",justifyContent:"center" ,alignItems:"center"}}>

  <div className="w-4/5" style={{padding:10}}>

  <label for="name" style={{marginBottom:10}} class="  text-sm font-medium text-black">
              Email
              </label>
              <input
                value={email}
                 disabled={emailver}
                type="text"
                onChange={(event) => {
                  setemail(event.target.value);
                }}
                name="name"
                id="name"
              
                class="bg-gray-50 border
                       border-gray-900 sm:text-sm  text-black rounded-lg focus:ring-primary-600 focus:border-primary-600
                        block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 
                         dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
  </div>
  <div className="w-1/5 " style={{paddingTop:11}}>
  <div style={{textAlign:"center",marginTop:10,cursor:"pointer"}}>
<div onClick={()=>{setemailVer(!emailver); }}  style={{display:"flex",justifyContent:"center",alignItems:"center", backgroundColor:emailver?"#35FE60":"#35C4FE"}} class="w-full px-4 py-2 text-sm text-white font-medium text-white border border-gray-300 
rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"> 
 <span style={{marginRight:10}}> {emailver?"Checked":"Check"} </span>  <FaCheckCircle/> </div>
</div>
  </div>
            </div>        
</div>



<div style={{display: page==7?"flex":"none",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:10,width:"100%"}}>



<Print data={
  {
    "bname":cdata&&cdata.course.data.attributes.name,
    "cname": cdata&&cdata.name,
    "price": cdata&&cdata.course.data.attributes.price
  }
}/>

</div>




<div style={{display: page==3?"flex":"none",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:10,width:"100%"}}>

  <div style={{width:"100%"}}> 
  <Playercomp src={ "/VID-20231109-WA0015.mp4"} />
  </div>


  <div style={{ width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:40}}>

  <div style={{fontSize:20}}>
    Watch the video and answer the following questions:
  </div>

  {test.map((item, index) => (

    <Testelement no={index+1} ob = {item}/>
           
          ))}




  </div>





</div>




<div style={{display: page==4?"flex":"none",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:10,width:"100%"}}>
 
 <EnglishTest/>

</div>




<div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>



<div style={{textAlign:"center",marginTop:10,cursor:"pointer",marginRight:20}}>
<div onClick={()=>{ prevPage()}}   style={{display:"flex",justifyContent:"center",alignItems:"center"}} 
class="w-full px-4 py-2 text-sm text-white font-medium text-white bg-gray-500 border border-gray-300 
rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
    <FaArrowCircleLeft/> <span style={{marginLeft:10}}>Previous</span> </div>
</div>


<div style={{textAlign:"center",marginTop:10,cursor:"pointer"}}>
<div onClick={()=>{nextPage(); }}  style={{display:"flex",justifyContent:"center",alignItems:"center"}} class="w-full px-4 py-2 text-sm text-white font-medium text-white bg-blue-500 border border-gray-300 
rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">  <span style={{marginRight:10}}>NEXT</span> <FaArrowCircleRight/> </div>
</div>





</div>





</div>




</div>
    



















  
<div style={{height:200}}></div>

         </main>
    </RootLayout>
  );


  
}



