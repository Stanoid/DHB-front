import { createContext, useState } from "react";
import { API_URL } from "../../../utils/url";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
import { cookies } from "next/dist/client/components/headers";

export const MainContext = createContext(null);

function Context({ children }) {
  const [message, setMessage] = useState("aaa");
  const router = new useRouter();

const cookies = new Cookies();

  const login = (email,password) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        identifier:email,
        password: password,
      }),
    };
    fetch(`${API_URL}/auth/local`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data,"aaaa");

       if(data.user){
        router.replace("/dashboard")
        cookies.set("login",data);
       }else{
        alert("invalid username or password")
       }
      
     

      
      });
  };



  
  const isLogged = (pageRole)=>{
   
      console.log(cookies.get("login"));
      
       
              
           const requestOptions = {
             method: 'GET',
             headers: {
                 "Content-Type": "application/json",
                 "Authorization": 'Bearer ' + cookies.get("login").jwt
             },
           
         };
         fetch(`${API_URL}/users/me`, requestOptions)
             .then(response => response.json())
             .then(data =>{
         console.log(data,"aaaaaa");
       


              
              
              
                
             });
             
       
         

         


      }




  return (
    <MainContext.Provider value={{ message, setMessage, login,isLogged }}>
      {children}
    </MainContext.Provider>
  );
}

export default Context;
