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
import Floating from "../comps/floating";
import Citem from "../courses/citem";
import Enroll from "../iosh/enroll";
import CenteredDiv from "../comps/imghead";
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

        <Floating/>


<CenteredDiv text={"NEBOSH Environmental Management Certificate"} img={bg.src}/>


{/* <div style={divStyle}>
      <h1>NEBOSH International General Certificate in Occupational Health and Safety</h1>
    </div> */}

      {/* <Image
      src= {bg}
      style={{width:"100%"}}
      width={"100%"}
     
      alt="Picture of the course"
    /> */}


    

    <br/><br/>

<div style={{margin:"0px 100px 10px 100px"}}>
<Citem content={"The NEBOSH Environmental Management Certificate is a globally relevant qualification. You will be able to help your organization manage its positive and negative environmental aspects and support the implementation and continuousimprovement of effective environmental managementsystems."}
 title={"COURSE OVERVIEW"}  icon={FaList} />
</div>

<div style={{margin:"0px 100px 10px 100px"}}>
<Citem content={<div>This qualification helps you understand how to manage environmental issues and this knowledge can be
applied in workplaces anywhere in the world.<br/>
On completion of the qualification, you will be able to:<br/>
understand a range of environmental issues so that you can improve environmental performance and
reduce harm.<br/>
work within an environmental managementsystem and contribute to continual improvement. <br/>
recognise environmental aspects and associated impacts, and evaluate the effectiveness of existing
controls.<br/>
support decision-making with ethical, legal and financial arguments.<br/>
understand the links between your organisation’s activities and wider environmental issues.<br/>
Forsyllabus guide and more information, please visitnebosh website by click here.</div>}
 title={"DETAILS"}  icon={FaClock} />
</div>


<div style={{margin:"0px 100px 10px 100px"}}>
<Citem content={"For entry requirements for this qualification, For further information please kindly visit nebosh website by click here"}
 title={"ENTRY REQUIREMENTS"}  icon={FaBookOpen} />
</div>

<div style={{margin:"0px 100px 10px 100px"}}>
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
 title={"Course Content"}  icon={FaCheckCircle} />
</div>






<div style={{margin:"0px 100px 10px 100px"}}>
<Citem 
content={
  <div>
    <div>
      <h1 style={{color:"black",fontWeight:"bold"}}>SQA ACCREDITATION</h1>
      <p>
      <li>The NEBOSH Environmental Management Certificate has been accredited and credit rated by the Scottish
Qualifications Authority (SQA) Accreditation.</li>
  <li>Itsitsin the Scottish Credit and Qualifications Framework (SCQF) at SCQF Level 6 with 6 SCQF credit points.</li>
  <li>SCQF Level 6 iscomparable to RQF/CQFW Level3in England, Wales and Northern Ireland.</li>
  <li>See the Qualifications Can Cross Boundarieschart issued by the UK regulators.</li>
  <li>Where appropriate, the SQA Accreditation logo will appear on certificates awarded for this qualification.
The SCQF logo,credit and level information will appear on the unit result notification.</li>
  <li>Please visit the SCQF website for further information on credit and levels.</li>
  
     </p>
    </div>

    <br/><br/>

    <div>
      <h1 style={{color:"black",fontWeight:"bold"}}>HOW NEBOSH EMC TRAINING COURSE RUNS</h1>
      <p>
      Physical classroom training sessions follow an interactive
and disciplined learning method – the
full-time course consists of an intensive and focused 10-day
training conducted within two weeks.

<br/><br/>
Training consists of lectures, videos, discussions,
activities, assignments and sharing of professional
z\tutors who are dedicated to ensuring trainings are
successfully delivered.
<br/><br/>

Tutors will be available
to provide support in relation to course content and
assessment preparation throughout the course
ofstudy.

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
 
 table={
  [{"batch":"Day","date":"2/12/2015 to 10/21/2015","edate":"1/11/2015","medium":["Face2face, ", "Online live, ","E-learning (recorded lecture), ", "In-house, "]}
  ,{"batch":"Night","date":"2/12/2015 to 10/21/2015","edate":"1/11/2015","medium":["Face2face, ", "Online live, ","E-learning (recorded lecture), ", "In-house, "]}
]
 }

 
 
 short={false}
 data={{
  
  "name":"NEBOSH EMC",
 "price":"500 USD",
 "duration":"5 days",
 "lang":"English ",
 "level":"Basic / Level2",
 "board":"NEBOSH",
 "training":"Virtual / Offline / Face to face",
 "etype":"SBA-Open Book Examination + Environmental Impact Assessment",
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
