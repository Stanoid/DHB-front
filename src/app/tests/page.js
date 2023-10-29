"use client";

import RootLayout from "@/layout/layout";
import { API_URL } from "../../../utils/url";
import { useState } from "react";
import Qunit from "./qunit";
import { useEffect } from "react";
import Cookies from "universal-cookie";
export default function Reports() {
  const [tname, setTname] = useState("");
  const [quiz, setQuiz] = useState([]);
  const cookies = new Cookies();
  const [allq, setallq] = useState([]);

  useEffect(() => {}, [quiz]);
  const [inputs, setInputs] = useState([{ firstName: "", lastName: "" }]);

  const handleAddInput = () => {
    setInputs([...inputs, { firstName: "", lastName: "" }]);
  };

  const handleChange = (event, index) => {
    let { name, value } = event.target;
    let onChangeValue = [...inputs];
    onChangeValue[index][name] = value;
    setInputs(onChangeValue);
  };
  const subq = (ob) => {
    setallq([...allq, ob]);
    console.log(allq);
  };
  const handleDeleteInput = (index) => {
    const newArray = [...inputs];
    newArray.splice(index, 1);
    setInputs(newArray);

    const newArraya = [...allq];
    newArraya.splice(index, 1);
    setallq(newArraya);
    console.log("deleted", allq);
  };

  const finishtest = () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + cookies.get("login").jwt,
      },
      body: JSON.stringify({
        data: {
          question: tname,
          object: allq,
        },
      }),
    };

    fetch(`${API_URL}/tests`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });

    console.log(tname, allq);
  };

  let old = quiz;
  const addquestion = () => {
    console.log(quiz);
    old.push({ id: quiz.length + 1 });
    console.log(old);
    setQuiz(old);
  };

  return (
    <RootLayout>
      <main
        class="flex-1 relative z-0 overflow-y-auto py-6 focus:outline-none"
        tabindex="0"
        x-data
        x-init="$el.focus()"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 class="text-2xl font-semibold text-gray-900">Tests</h1>
        </div>

        <div class="max-w-7xl mx-auto text-gray-600 py-2 px-4 sm:px-6 md:px-8">
          <div
            style={{ padding: 10, borderRadius: 10, backgroundColor: "white" }}
          >
            <h1 style={{ fontWeight: 25, fontWeight: "bold" }}>
              Create a new test
            </h1>

            <div style={{ padding: 20 }}>
              <label for="name" class=" mb-2 text-sm font-medium text-black">
                Test name
              </label>
              <input
                value={tname}
                onChange={(event) => {
                  setTname(event.target.value);
                }}
                type="text"
                name="name"
                id="name"
                placeholder="Test name"
                class="bg-gray-50 border
                       border-gray-900 sm:text-sm  text-black rounded-lg focus:ring-primary-600 focus:border-primary-600
                        block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 
                         dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>

            <div>
              {inputs.map((item, index) => (
                <Qunit
                  saveddata={(ob) => {
                    subq(ob);
                  }}
                  delete={() => {
                    handleDeleteInput();
                  }}
                  no={index + 1}
                />
              ))}

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    marginTop: 10,
                    width: 200,
                    cursor: "pointer",
                  }}
                >
                  <div
                    onClick={() => {
                      handleAddInput();
                    }}
                    class="w-full px-4 py-2 text-sm text-white font-medium text-white bg-blue-500 border border-gray-300 
rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                  >
                    {" "}
                    Add a Question{" "}
                  </div>
                </div>

                <div
                  style={{
                    textAlign: "center",
                    marginTop: 10,
                    width: 200,
                    cursor: "pointer",
                  }}
                >
                  <div
                    onClick={() => {
                      finishtest();
                    }}
                    class="w-full px-4 py-2 text-sm text-white font-medium text-white bg-green-400 border border-gray-300 
rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                  >
                    {" "}
                    Save Test{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </RootLayout>
  );
}
