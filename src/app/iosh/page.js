"use client";

import RootLayout from "@/layout/layout";
import { MainContext } from "../context/context";
import { useContext } from "react";
import { useEffect } from "react";
import { API_URL } from "../../../utils/url";
import Image from "next/image";
import { useState } from "react";
import bg from "./img/bg.jpg"
import Enroll from "./enroll";
import CenteredDiv from "../comps/imghead";
import Accord from "../courses/accord";
import Citem from "../courses/citem";
import Floating from "../comps/floating";
import { FaList,FaClock,FaBookOpen,FaCheckCircle,FaListOl,FaInfo,FaUserPlus } from "react-icons/fa";

import Cookies from "universal-cookie";
export default function Reports() {
  const { message, setMessage, login, isLogged } = useContext(MainContext);

  const [cdata, setCdata] = useState([]);

  const cookies = new Cookies();
  useEffect(() => {
    isLogged(2);
   // getcourses();
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



<Floating/>


<CenteredDiv text={"IOSH MANAGING SAFELY"} img={bg.src}/>



      {/* <Image
      src= {bg}
      style={{width:"100%"}}
      width={"100%"}
     
      alt="Picture of the course"
    /> */}


    

    <br/><br/>

<div id="overview" style={{margin:"0px 100px 10px 100px"}}>
<Citem content={"DHB Training and Consulting is an approved centre of IOSH since October 2021. IOSH MS is the successful programme with great cutting edge in propagandizing health and safety.  DHB delivers stepwise guidance and discharge high quality tutors and presentation material makes IOSH Managing Safely training session as the most effective programme. The delegates will find everything they need in this inspiring pack. IOSH Managing Safely courses offered in DHB with trainers who are well qualified and highly experienced will provide a good support to the delegates throughout the training session journey."}
 title={"COURSE OVERVIEW"}  icon={FaList} />
</div>

<div id="details" style={{margin:"0px 100px 10px 100px"}}>
<Citem content={

<div>
<li>  Assessing Risks</li>
<li>  Controlling Risks</li>
<li>  Understanding Responsibilities</li>
<li>Understanding Hazards</li>
<li>Investigating Incidents</li>
<li>Measuring Performance</li>
</div>

}
 title={"DETAILS"}  icon={FaClock} />
</div>


<div style={{margin:"0px 100px 10px 100px"}}>
<Citem content={"There is no entry requirements for IOSH MANAGING SAFELY"}
 title={"ENTRY REQUIREMENTS"}  icon={FaBookOpen} />
</div>

<div id="assessment" style={{margin:"0px 100px 10px 100px",display:"none"}}>
<Citem content={
  <div className="w-full" style={{display:"flex",alignItems:"flex-start",justifyContent:"center",padding:15}}>
  <div className="w-1/2">
    <div style={{color:"red",fontSize:20,fontWeight:"bold",padding:10}} >
    Unit EMC1 <br/>
    </div>
    <p>
    Environmental management: Examination
(to be downloaded, completed, and
submitted in 24 hours) Leaners will be
required to review a real-life scenario and
answer theoretical and practical questions
on environmental management.
    </p>
  </div>
  
  <div className="w-1/2">
    <div style={{color:"red",fontSize:20,fontWeight:"bold",padding:10}} >
    Unit EMC2 <br/>
   
    </div>
    <p>
    Learners will be required to assess
environmental aspects and impactsin their
chosen workplace.
  
    </p>
  </div>
  
  
  
  </div>
}
 title={"ASSESSMENT"}  icon={FaCheckCircle} />
</div>



<div id="content" style={{margin:"0px 100px 10px 100px",display:"none"}}>
<Citem 
content={<Accord f1={"Managing health and saftey"} f2={
  <div>
    <li>Why we should manage workplace health and safety.</li>
    <li>How health and safety management systems work and what they look like</li>
    <li>Managing risk  understanding people and processes.</li>
    <li>Health and safety monitoring and measuring.</li>
  </div>
} s1={"Risk Assessment"} s2={

  <div>
  
  <li>Physical and psychological health.</li>
  <li>Musculoskeletal health.</li>
  <li>Chemical and biological agents.</li>
  <li>General workplace issues.</li>
  <li>Work equipment.</li>
  <li>Fire</li>
  <li>Electricity</li>

<div className="w-full" style={{display:"flex",alignItems:"flex-start",justifyContent:"center",padding:15}}>
<div className="w-1/2">
  <div style={{color:"red",fontSize:20,fontWeight:"bold",padding:10}} >
  NEBOSH IG1 <br/>
  <span >Management of health & Safety</span> 
  </div>
  <p>
  IG1 - An open book examination to
assess what you know. This is scenario
based and wil include a
closing interview, you wil be asked
questions about your submission.
  </p>
</div>

<div className="w-1/2">
  <div style={{color:"red",fontSize:20,fontWeight:"bold",padding:10}} >
  NEBOSH IG2 <br/>
  <span >Risk Assessment</span> 
  </div>
  <p>
  IG2 - A practical risk assessment to assess
what you can do (3 hours). Learners wil
complete a risk assessment and develop an
action plan for their workplace – this is
immediately useful and valuable.

  </p>
</div>



</div>

</div>

}  />}
 title={"COURSE CONTENT"}  icon={FaListOl} />
</div>




<div style={{margin:"0px 100px 10px 100px"}}>
<Citem 
content={
  <div>
    <div>
      <h1 style={{color:"black",fontWeight:"bold"}}>TOP 5 DELEGATE BENEFITS</h1>
      <p>
      <li> 1. Ensures you can assess & control risks & hazards</li>
      <li> 2. Ensures you understand your own responsibilities for safety & health</li>
      <li> 3. EEnables you to investigate incidents</li>
      <li> 4. Empowers you to measure your own performance</li>
      <li> 5. Allows for personal reflections on good practice</li>
     
  
     </p>
    </div>

    <br/><br/>

    <div>
      <h1 style={{color:"black",fontWeight:"bold"}}>WHAT RESULTS CAN I EXPECT?</h1>
      <p>
   1. Greater productivity, from
fewer hours lost due to
sickness and accidents

<br/><br/>
 2. Improved company-wide safety
awareness culture and
appreciation of safety measures
<br/><br/>

Tutors will be available
to provide support in relation to course content and
assessment preparation throughout the course
ofstudy.

<br/><br/>

 3. Active staff involvement to
improve the workplace.

<br/><br/>

4. Enhanced reputation within
your supply chain.




        </p>
    </div>
  </div>
}
 title={"EXTRA INFO"}  icon={FaInfo} />
</div>






<div id="enroll" style={{margin:"0px 100px 10px 100px"}}>
<Citem 
content={
 <Enroll
 
 short={false}
 data={{
  
  "name":"IOSH MANAGING SAFELY",
 "price":"150 USD",
 "duration":"3 days",
 "lang":"English / Arabic",
 "level":"Basic / Level2",
 "board":"IOSH",
 "training":"Virtual / Offline",
 "etype":"MCQ + Offline",
 "btype":"Morning / Evening",
}}  />
}
 title={"ENROLL NOW"}  icon={FaUserPlus} />
</div>


  
<div style={{height:200}}></div>

         </main>
    </RootLayout>
  );
}
