"use client";

import RootLayout from "@/layout/layout";
import { MainContext } from "../context/context";
import { useContext } from "react";
import { useEffect } from "react";
import { API_URL } from "../../../utils/url";
import Image from "next/image";
import { useState } from "react";
import bg from "./img/vec.jpg"
import Accord from "./accord";
import Citem from "./citem";
import iosh from "../dashboard/img/iosh.jpg";
import emc from "../dashboard/img/emc.jpg";
import { useRouter } from "next/navigation";
import ig from "../dashboard/img/ig.jpg";
import Course from "../dashboard/cunit";
import { FaList,FaClock,FaBookOpen,FaCheckCircle,FaListOl,FaInfo } from "react-icons/fa";

import Cookies from "universal-cookie";
export default function Reports() {
  const { message, setMessage, login, isLogged } = useContext(MainContext);

  const [cdata, setCdata] = useState([]);
  const router = new useRouter();
  const cookies = new Cookies();
  useEffect(() => {
    isLogged(2);
   // getcourses();
  }, []);
  


 

  return (
    <RootLayout>
      <main
        class="flex-1 relative z-0 overflow-y-auto  focus:outline-none"
        tabindex="0"
        x-data
        x-init="$el.focus()"
      >

<br/><br/>
<div
          style={{

            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >


<Course  data={{"price":"150 USD","duration":"3 Days","board":"IOSH","url":"/iosh"}} getData={()=>{router.push("/iosh")}} urr={"/"} title={"IOSH Managing safely"} img={iosh} />

<Course  data={{"price":"500 USD","duration":"3 Days","board":"IOSH","url":"/neboshig"}} getData={()=>{router.push("/neboshig")}} title={"Nebosh IG"} img={ig} />
<Course  data={{"price":"500 USD","duration":"3 Days","board":"IOSH","url":"/neboshemc"}} getData={()=>{router.push("/neboshemc")}} title={"Nebosh EMC"} img={emc} />


</div>
         </main>
    </RootLayout>
  );
}
