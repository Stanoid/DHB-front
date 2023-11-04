"use client";

import RootLayout from "@/layout/layout";
import { MainContext } from "../context/context";
import { useContext } from "react";
import { useEffect } from "react";
import { Center, Flex } from "@mantine/core";
import { API_URL } from "../../../utils/url";
import Image from "next/image";
import iosh from "./img/iosh.jpg";
import { useState } from "react";
import emc from "./img/emc.jpg";
import { useRouter } from "next/navigation";
import ig from "./img/ig.jpg";
import Course from "./cunit";
import Cookies from "universal-cookie";
export default function Reports() {
  const { message, setMessage, login, isLogged } = useContext(MainContext);

  const [cdata, setCdata] = useState([]);
  const router = new useRouter();
  const cookies = new Cookies();
  useEffect(() => {
    isLogged(2);
    getcourses();
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
        class="flex-1 relative z-0 overflow-y-auto py-6 focus:outline-none"
        tabindex="0"
        x-data
        x-init="$el.focus()"
      >
        <div
          class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              textAlign: "center",
              padding: 20,
              backgroundColor: "white",
              borderRadius: 10,
            }}
          >
            {/* <Image
      src= {im}
      width={200}
      height={200}
      alt="Picture of the author"
    /> */}

            <h1 style={{ font: "30px", color: "grey", fontWeight: "bold" }}>
              {" "}
              No Course Selected{" "}
            </h1>

            <h3 style={{ font: "20px", color: "black" }}>
              {" "}
              Select from the available courses to start learning
            </h3>
          </div>
        </div>
        <div style={{ margin: 30 }}>
          <hr />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          
<Course getData={()=>{router.push("/iosh")}}  data={{"price":"150 USD","duration":"3 Days","board":"IOSH","url":"/iosh"}}  title={"IOSH Managing safely"} img={iosh} />

<Course getData={()=>{router.push("/neboshemc")}} data={{"price":"500 USD","duration":"5 Days","board":"NEBOSH","url":"/neboshemc"}} title={"NEBOSH ENVIRONMENT MANAGEMENT CERTIFICATE (NEBOSH EMC)"} img={emc} />

 

<Course getData={()=>{router.push("/neboshig")}} data={{"price":"500 USD","duration":"3 Days","board":"NEBOSH","url":"/neboshig"}} title={"Nebosh IG"} img={ig} />

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

        <div class="max-w-7xl mx-auto text-gray-600 py-2 px-4 sm:px-6 md:px-8"></div>
      </main>
    </RootLayout>
  );
}
