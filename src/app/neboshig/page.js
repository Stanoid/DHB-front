"use client";

import RootLayout from "@/layout/layout";
import { MainContext } from "../context/context";
import { useContext } from "react";
import { useEffect } from "react";
import { API_URL } from "../../../utils/url";
import Image from "next/image";
import { useState } from "react";
import bg from "./img/bg.jpg"
import Accord from "../courses/accord";
import Citem from "../courses/citem";
import Enroll from "../iosh/enroll";
import Floating from "../comps/floating";
import { FaList,FaClock,FaBookOpen,FaCheckCircle,FaListOl,FaInfo,FaUserPlus } from "react-icons/fa";
import CenteredDiv from "../comps/imghead";
import Cookies from "universal-cookie";
export default function Reports() {
  const { message, setMessage, login, isLogged } = useContext(MainContext);

  const [cdata, setCdata] = useState([]);
  const [bid, setBid] = useState(1);

  const cookies = new Cookies();
  useEffect(() => {
    isLogged(2);
    getBatches();
  }, []);


  const getBatches = () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + cookies.get("login").jwt,
      },
    };
    fetch(`${API_URL}/batches?[filters][course]=`+bid, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setCdata(data.data);
        console.log("object", cdata);
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



<CenteredDiv text={"NEBOSH International General Certificate "} img={bg.src}/>


    

    <br/><br/>

<div style={{padding:10}}>
<Citem content={"This qualification was created for multinational organizations working in various industries that adhere to worldwide standardsor guidelines while also meetinglocal demands. The qualification is a globaly recognized credential that offers good foundational knowledge in safety and health as wel as a solid frameworkfor assessing hazardsand risks. This qualification is awarded by NEBOSH, the National Examination Board in Occupational Safety and Health, UK’s leading health and safety professional body with 40 years’ experience in providing up to date and relevantexaminations."}
 title={"COURSE OVERVIEW"}  icon={FaList} />
</div>

<div style={{padding:10}}>
<Citem content={"The International General Certificate (NEBOSH IG) wil involve a minimum of 65 taught hours and approximately 40 hours of private study and background reading"}
 title={"DURATION"}  icon={FaClock} />
</div>


<div style={{padding:10}}>
<Citem content={"For entry requirements for this qualification, For further information please kindly visit nebosh website by click here"}
 title={"ENTRY REQUIREMENTS"}  icon={FaBookOpen} />
</div>

<div style={{padding:10}}>
<Citem content={"This modern qualification combines activities, learning and interactive materials to provide you with an interesting and engaging experience. It focuses on key skils that means you can instantly apply the knowledgeyou gain and add value to your organisation. Assessment is a two-step process:"}
 title={"ASSESSMENT"}  icon={FaCheckCircle} />
</div>


<div style={{padding:10}}>
<Citem content={<div className="w-full" style={{display:"flex",alignItems:"flex-start",justifyContent:"center",padding:15}}>
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



</div>}
 title={"EXAMINATION MODE"}  icon={FaCheckCircle} />
</div>


<div style={{padding:10}}>
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



</div>

}  />}
 title={"COURSE CONTENT"}  icon={FaListOl} />
</div>




<div style={{padding:10}}>
<Citem 
content={
  <div>
    <div>
      <h1 style={{color:"black",fontWeight:"bold"}}>How NEBOSH IG training course run</h1>
      <p>
      <br/>  Physical classroom training sessions folow an interactive and disciplined learning method  the ful-time course consists of an intensive and focused 10-day training conducted within two weeks.
      <br/><br/> Training consists of lectures, videos, discussions, activities, assignments and sharing of professional experiences among candidates and tutors.
      <br/><br/> During this period, learners are guided by our expert tutors who are dedicated to ensuring trainings are successfuly delivered.
      <br/><br/> Tutors wil be available to provide support in relation to course content and assessment preparation throughout the course of study.
      </p>
    </div>

    <br/><br/>

    <div>
      <h1 style={{color:"black",fontWeight:"bold"}}>DHB revision support</h1>
      <p>
      <br/> Revision is an essential to passing an exam but understanding exactly what you need to
do is not always easy.
      <br/><br/> DHB has developed a range of revision tools to let you in on these tips. The interactive
nature of the revision workshops provides you with the opportunity to discuss specific
subjects with the tutors, practice questions, get feedback on your answers, and exchange
last-minute tips with fellow Learners.

      <br/><br/>It also gives you the chance to avoid the common mistakes made in exams, so you don't
fal into the same trap.
      <br/><br/> DHB workshops are essential in helping you build confidence in the run-up to the exams.
      </p>
    </div>
  </div>
}
 title={"EXTRA INFO"}  icon={FaInfo} />
</div>



<div id="enroll" style={{padding:10,width:"100%"}}>
<Citem 
full={true}
content={
 <Enroll


  
 table={cdata}
 
 short={false}
 id={bid}
 data={{
  "name":"NEBOSH IG",
 "price":"500 USD",
 "duration":"14 days",
 "lang":"English  ",
 "level":"Basic / Level3",
 "board":"NEBOSH",
 "training":"Virtual / Offline / Face to face",
 "etype":"SBA-Open Book Examination +  Practical risk Assessment",
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
