'use client'


import RootLayout from '@/layout/layout'
import { MainContext } from '../context/context';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Center, Flex } from '@mantine/core';
import Image from 'next/image'
import im from "../../../public/bg.jpg"
import Course from './cunit';
export default function Reports() {
  const {message, setMessage, login,isLogged} = useContext(MainContext);

  useEffect(()=>{
    isLogged(2);
    //console.log(message)
   },[])



  return (



    <RootLayout>


<main
          class="flex-1 relative z-0 overflow-y-auto py-6 focus:outline-none"
          tabindex="0"
          x-data
          x-init="$el.focus()"
        >
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div style={{textAlign:"center",padding:20,backgroundColor:"white", borderRadius:10}}>

            {/* <Image
      src= {im}
      width={200}
      height={200}
      alt="Picture of the author"
    /> */}

              <h1 style={{font:"30px",color:"grey",fontWeight:"bold"}}> No Course Selected </h1> 
             
              <h3  style={{font:"20px",color:"black"}}> Select from the available courses to start learning</h3>

            </div>
           
          </div>
<div style={{margin:30}}>
<hr/>
</div>
        


          <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>

<Course/>


 

   

          </div>

          <div class="max-w-7xl mx-auto text-gray-600 py-2 px-4 sm:px-6 md:px-8">
        
        
       
   
           
           
           
          </div>
        </main>


   
    </RootLayout>
  )
}
