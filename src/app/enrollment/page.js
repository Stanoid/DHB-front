"use client";

const cookies = new Cookies();
import RootLayout from "@/layout/layout";
import { MainContext } from "../context/context";
import { useContext,useEffect } from "react";
import ReactDom from 'react-dom'
import Markdown from 'react-markdown'
import { API_URL } from "../../../utils/url";
import Image from "next/image";
 import Home from "@/layout/cameraelement";
import { useState } from "react";
import bg from "./img/bg.jpg"
import { useSearchParams } from 'next/navigation'
import { FaList,FaClock,FaBookOpen,FaCheckCircle,FaListOl,FaInfo,FaArrowCircleRight,FaArrowCircleLeft } from "react-icons/fa";
import Policie from "./policies.js"
import Print from "./print";
import Testelement from "./Testelement";
import { useRouter } from 'next/navigation';
import Playercomp from "./player";
import Cookies from "universal-cookie";
import EnglishTest from "./EnglishTest";

export default function Enrollment() {
  const router = useRouter()
  const cookies = new Cookies();
  const NURL = useSearchParams()
  const { message, setMessage, login, isLogged } = useContext(MainContext);
  const [page, setpage] = useState(1);
  const [cdata, setCdata] = useState(null);
  const [vid, setVid] = useState(null);
  const [agree, setagree] = useState(false);
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
  const [Ttest, setTTest] = useState([]);
  const [Ttestresults, setTTestresults] = useState({data:[]});
  const [Ptest, setPTest] = useState([]);
  const [Ptestresults, setPTestresults] = useState({data:[]});
  const [Pcheat, settPCheat] = useState(false);
  

  useEffect(() => {
    isLogged(2);
    getcourses();

    console.log("aaaaaaaa",cookies.get("login"))
  }, []);


  const signUpFunc =()=>{

    

    console.log("batchid",cdata );
    

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + cookies.get("login").jwt,
      },
      body: JSON.stringify({
        data: {
          user: id,
          batches: cdata.id,
          
          bill: {
            "id":cdata&&cdata.attributes.course.data.id,
          "bid":cdata.id,
            "bname":cdata&&cdata.attributes.course.data.attributes.name,
          "cname": cdata&&cdata.attributes.name,
          "price": cdata&&cdata.attributes.course.data.attributes.price},
          scores: {
            "Ttest":Ttest,
            "Ptest": Ptest,
            "Ptest_re":Ptestresults,
            "Ttest_re":Ttestresults,
          },
        },
      }),
    };

    fetch(`${API_URL}/subscriptions`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        router.push("/dashboard")
      });

   

  
    

  }




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




  const appendAnswerP = (data,state)=>{
    //console.log(data,state);
    let vcheck  = false;
    
    if(state.data.length==0){
      state.data.push(data)
     // console.table("from zero sum func ",state.data)
     setPTestresults(state)
     console.table(Ptestresults.data);
      return
    }
    
    
    for (let i = 0; i < state.data.length; i++) {
     if(data.questionid===state.data[i].questionid){
      state.data[i]= data;
      vcheck = true;
     // console.table("from for ",state.data)
     setPTestresults(state)
     console.table(Ptestresults.data);
      return
     }else{
    
     }
    }
    
    if (!vcheck){
      state.data.push(data)
      setPTestresults(state)
      console.table(Ptestresults.data);
    //console.table("from if ",state.data);
     }
    
    
    
    
    
    
    //console.table(Ttestresults.data);
      }

  const nextPage=()=>{
if(page>6){
  // console.log("ddd",page);
signUpFunc()
  return;
}
    
    
    if(page==1 && !agree ){
      alert("Please Read and Agree with DHB Policies")
      return
    }else{
      setpage(page+1)
    }
    




    if(page ==5){
      if(tcheat==false){
        alert("Please answer and check your answers using the button");
        return
      }else{
        setpage(page+1)
      }
 
   
     return
    }

    if(page==2){

      if(!namever||!emailver ){
        alert("Please Check your name an email using the buttons")
        return
      }

    }

    if(page==7){
      signUpFunc();
    }

    if(page==6){
     //console.log("recipt page render")
     setpage(page+1) 
      // video element check diabled

      // if(!vid){
      //   // alert("Record a video for identification");
      //   // return
       
      // }else{
      //   setpage(page+1)

      // }

    }


    
    
    
  
  }



  const checktechnicaltest = ()=>{
  let score = 0;
for (let i = 0; i < Ttestresults.data.length; i++) {
if(Ttestresults.data[i].check ==1){
  score++
} }

console.log(score+" out of "+ Ttest.length);
setResults(score);
   setttCheat(true); 



  }

  
  const checkPtest = ()=>{
    let score = 0;
  for (let i = 0; i < Ptestresults.data.length; i++) {
  if(Ptestresults.data[i].check ==1){
    score++
  } }
  
  console.log(score+" out of "+ Ttest.length);
  setPResults(score);
     settPCheat(true); 
  
  
  
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
    fetch(`${API_URL}/batches/`+NURL.get("bid")+"?populate=*", requestOptions)
      .then((response) => response.json())
      .then((data) => {
       
     console.log("object", data);
     setCdata(data.data);
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
    fetch(`${API_URL}/tests/`+1, requestOptions)
      .then((response) => response.json())
      .then((data) => {
       
     console.log("test", data.data.attributes.object);
     setPTest(data.data.attributes.object);
     getTechnicalTest();
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
    fetch(`${API_URL}/tests/`+1, requestOptions)
      .then((response) => response.json())
      .then((data) => {
       
     console.log("test", data.data.attributes.object);
     setTTest(data.data.attributes.object);
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
<h1> Enrolling to <span style={{fontWeight:"bold"}}>{cdata&&cdata.attributes.name}
</span>  batch of  <span style={{fontWeight:"bold"}}> {cdata&&cdata.attributes.course.data.attributes.name} </span></h1>
</div>
<div style={{marginTop:20}}>
<ol  style={{display:"flex",flexDirection:"row",fontSize:20}} class="items-center  space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
  
    <li style={{color: page>=1?"#3F99FF":"grey", margin:"0px 10px 0px 10px"}}  class="flex items-center space-x-2.5">
        <span style={{color: page>=1?"white":"grey",backgroundColor: page>=1?"#3F99FF":""}} class="flex items-center justify-center w-10 h-10 border rounded-full shrink-0 ">
          <span>{page>=2? <FaCheckCircle/> : "1"} </span>  
        </span>
        <span  style={{display:page==1?"block":"none",color:"grey"}}> 
            <h3 class="font-medium leading-tight">Terms & Conditions</h3>
            <p class="text-sm">Agree to DHB policies</p>
        </span>
    </li>

    <li style={{color: page>=2?"#3F99FF":"grey", margin:"0px 10px 0px 10px"}} class="flex items-center space-x-2.5">
        <span style={{color: page>=2?"white":"grey",backgroundColor: page>=2?"#3F99FF":""}} class="flex items-center justify-center w-10 h-10 border  rounded-full shrink-0 ">
        <span>{page>=3? <FaCheckCircle/> : "2"} </span> 
        </span>
        <span  style={{display:page==2?"block":"none",color:"grey"}}>
            <h3 class="font-medium leading-tight">Review your information</h3>
            <p class="text-sm">Make sure its correct</p>
        </span>
    </li>

    <li style={{color: page>=3?"#3F99FF":"grey", margin:"0px 10px 0px 10px"}} class="flex items-center space-x-2.5">
        <span style={{color: page>=3?"white":"grey",backgroundColor: page>=3?"#3F99FF":""}} class="flex items-center justify-center w-10 h-10 border  rounded-full shrink-0 ">
        <span>{page>=4? <FaCheckCircle/> : "3"} </span> 
        </span>
        <span  style={{display:page==3?"block":"none",color:"grey"}}>
            <h3 class="font-medium leading-tight">Pre-course meeting</h3>
            <p class="text-sm">Watch the meeting video and take the test</p>
        </span>
    </li>
    
  


    <li style={{color: page>=4?"white":"grey", margin:"0px 10px 0px 10px"}} class="flex items-center space-x-2.5">
        <span style={{color: page>=4?"white":"grey",backgroundColor: page>=4?"#3F99FF":""}} class="flex items-center justify-center w-10 h-10 border  rounded-full shrink-0">
        <span>{page>=5? <FaCheckCircle/> : "4"} </span> 
        </span>
        <span  style={{display:page==4?"block":"none",color:"grey"}}>
            <h3 class="font-medium leading-tight"> English Test </h3>
            <p class="text-sm">Test your English level</p>
        </span>
    </li>


    <li style={{color: page>=5?"white":"grey", margin:"0px 10px 0px 10px"}} class="flex items-center space-x-2.5">
        <span style={{color: page>=5?"white":"grey",backgroundColor: page>=5?"#3F99FF":""}} class="flex items-center justify-center w-10 h-10 border  rounded-full shrink-0">
        <span>{page>=6? <FaCheckCircle/> : "5"} </span> 
        </span>
        <span  style={{display:page==5?"block":"none",color:"grey"}}>
            <h3 class="font-medium leading-tight"> Precourse technical test </h3>
            <p class="text-sm">Test your knowledge of this course</p>
        </span>
    </li>


    <li style={{color: page>=6?"#3F99FF":"grey", margin:"0px 10px 0px 10px"}} class="flex items-center space-x-2.5">
        <span style={{color: page>=6?"white":"grey",backgroundColor: page>=6?"#3F99FF":""}} class="flex items-center justify-center w-10 h-10 border  rounded-full shrink-0 ">
        <span>{page>=7? <FaCheckCircle/> : "6"} </span> 
        </span>
        <span  style={{display:page==6?"block":"none",color:"grey"}}>
            <h3 class="font-medium leading-tight"> ID check </h3>
            <p class="text-sm">Upload a video to verify your identity</p>
        </span>
    </li>

   


    <li style={{color: page>=7?"#3F99FF":"grey", margin:15}} class="flex items-center  space-x-2.5">
        <span style={{color: page>=7?"white":"grey",backgroundColor: page>=7?"#3F99FF":""}} class="flex items-center justify-center w-10 h-10 border  rounded-full shrink-0 ">
        <span>{page>=7? <FaCheckCircle/> : "7"} </span> 
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
    
    "bname":cdata&&cdata.attributes.course.data.attributes.name,
    "cname": cdata&&cdata.attributes.name,
    "price": cdata&&cdata.attributes.course.data.attributes.price
  }
}/>
</div>

<div style={{display: page==6?"flex":"none",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:10,width:"100%",height:500}}>

{page==6?
<div></div>:<div>Camera</div>

}

{/* old camera midule (TBF) */}
<Home  getVid={((blob)=>{setVid(blob)})}  />  

</div>




<div style={{display: page==3?"flex":"none",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:10,width:"100%"}}>

  <div style={{width:"100%"}}> 
  <Playercomp src={ "/VID-20231109-WA0015.mp4"} />
  </div>


  <div style={{ width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:40}}>

  <div style={{fontSize:20}}>
    Watch the video and answer the following questions:
  </div>

  {Ptest.map((item, index) => (

<Testelement checkTest={(data)=>{
   appendAnswerP(data,Ptestresults);
}}  cheat={Pcheat} no={index+1} ob = {item}/>
       
      ))}




  </div>


  <div style={{display:Pcheat?"flex":"none",flexDirection:"column",justifyContent:"center",
      alignItems:"center",backgroundColor:"rgba(0,255,0,0.6)",
       color:"white",fontSize:25,fontWeight:"bold",
      padding:20,borderRadius:10}}>
        <div>
        Your Score:
        </div>

        <div>
        {Presults+ "/"+ Ptest.length}
        </div>
       
      </div>

      <div style={{textAlign:"center",margin:20,cursor:"pointer"}}>
<div onClick={()=>{checkPtest(); }}  style={{display:"flex",justifyContent:"center",alignItems:"center"}} class="w-full px-4 py-2 text-sm text-white font-medium text-white bg-blue-500 border border-gray-300 
rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"> 
 <span style={{marginRight:10}}>Check Answers</span> <FaCheckCircle/> </div>
</div> 



</div>




<div style={{display: page==4?"flex":"none",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:10,width:"100%"}}>
 
 <EnglishTest/>

</div>


<div style={{display: page==5?"flex":"none",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:10,width:"100%"}}>
{Ttest.map((item, index) => (

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


<div style={{textAlign:"center",margin:20,cursor:"pointer"}}>
<div onClick={()=>{checktechnicaltest(); }}  style={{display:"flex",justifyContent:"center",alignItems:"center"}} class="w-full px-4 py-2 text-sm text-white font-medium text-white bg-blue-500 border border-gray-300 
rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"> 
 <span style={{marginRight:10}}>Check Answers</span> <FaCheckCircle/> </div>
</div> 

</div>



<div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>



<div style={{textAlign:"center",marginTop:10,cursor:"pointer",marginRight:20}}>
<div onClick={()=>{ prevPage()}}   style={{display:"flex",justifyContent:"center",alignItems:"center"}} 
class="w-full px-4 py-2 text-sm text-white font-medium text-white bg-gray-500 border border-gray-300 
rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
    <FaArrowCircleLeft/> <span style={{marginLeft:10}}>Previous</span> </div>
</div>


<div style={{textAlign:"center",marginTop:10,cursor:"pointer"}}>
<div onClick={()=>{nextPage(); }}  style={{display:"flex",justifyContent:"center",alignItems:"center"}} 
class="w-full px-4 py-2 text-sm text-white font-medium text-white bg-blue-500 border border-gray-300 
rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">  
<span style={{marginRight:10}}>{page==7?"ENROLL":"Next"}</span> <FaArrowCircleRight/> </div>
</div>





</div>





</div>




</div>
    



















  
<div style={{height:200}}></div>

         </main>
    </RootLayout>
  );


  
}



