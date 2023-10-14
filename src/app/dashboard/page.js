'use client'


import RootLayout from '@/layout/layout'
import { MainContext } from '../context/context';
import { useContext } from 'react';
import { useEffect } from 'react';

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
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>

          <div class="max-w-7xl mx-auto text-gray-600 py-2 px-4 sm:px-6 md:px-8">
          
        
     hello Dashboard
    
   
           
           
           
          </div>
        </main>


   
    </RootLayout>
  )
}
