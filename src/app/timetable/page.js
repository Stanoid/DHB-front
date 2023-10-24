'use client'


import RootLayout from '@/layout/layout'
import { MainContext } from '../context/context';
import { useContext } from 'react';
import { useEffect } from 'react';
import Table from "./table"
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

          <Table/>
        

       
        </main>


   
    </RootLayout>
  )
}
