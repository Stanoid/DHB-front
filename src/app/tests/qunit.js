'use client'


import React from 'react'
import { useState } from 'react';
function qunit(props) {
    const [tname, setTname] = useState("");
    const [saved, setSaved] = useState(0);

    const [qes, setQues] = useState("");
    const [can, setcan] = useState("");
    const [an2, setan2] = useState("");
    const [an3, setan3] = useState("");
    const [an4, setan4] = useState("");
   




    const saveq=()=>{
      if(saved){alert("Already saved"); return}
        if(qes==""||can==""||an2==""||an3==""||an4==""){
            alert("all fields requiered")
            return
        }else{

            let ob = {
                id:props.no,
                q:qes,
                ca:can,
                an2:an2,
                an3:an3,
                an4:an4
            }

            props.saveddata(ob)
            setSaved(1);
        }

      
    }


  return (
    
    <div className="drop-shadow-lg"  style={{margin:20,backgroundColor:"#f1f1f1",borderRadius:5,padding:10,color:"black"}} >


<div   style={{padding:40,paddingTop:10,paddingBottom:5,borderRadius:5}}>
           <label for="name" class=" mb-2  text-sm font-medium text-black">Question NO. {props.no}</label>
                      <input
                          value={qes}  onChange={(event)=>{setQues(event.target.value)}} 
                      type="text" name="name" id="name" placeholder="Test name" class="bg-gray-50 border
                       border-gray-900  sm:text-sm  text-black rounded-lg focus:ring-primary-600 focus:border-primary-600
                         w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 
                         dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
           </div>


           <div style={{padding:40,paddingTop:5,paddingBottom:5}}>
           <label for="name" class=" mb-2 text-sm font-medium text-black">Correct answer</label>
                      <input
                          value={can}  onChange={(event)=>{setcan(event.target.value)}} 
                      type="text" name="name" id="name" placeholder="Correct answer" class="bg-gray-50 border
                       border-gray-900 p-1.5 sm:text-sm  text-black rounded-lg focus:ring-primary-600 focus:border-primary-600
                        block   dark:border-gray-600 dark:placeholder-gray-400 
                         dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
           </div>

           <div style={{padding:40,paddingTop:5,paddingBottom:5}}>
           <label for="name" class=" mb-2 text-sm font-medium text-black">Option</label>
                      <input
                          value={an2}  onChange={(event)=>{setan2(event.target.value)}} 
                      type="text" name="name" id="name" placeholder="Correct answer" class="bg-gray-50 border
                       border-gray-900 p-1.5 sm:text-sm  text-black rounded-lg focus:ring-primary-600 focus:border-primary-600
                        block  dark:border-gray-600 dark:placeholder-gray-400 
                         dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
           </div>


           <div style={{padding:40,paddingTop:5,paddingBottom:5}}>
           <label for="name" class=" mb-2 text-sm font-medium text-black">Option</label>
                      <input
                          value={an3}  onChange={(event)=>{setan3(event.target.value)}} 
                      type="text" name="name" id="name" placeholder="Correct answer" class="bg-gray-50 border
                       border-gray-900 p-1.5 sm:text-sm  text-black rounded-lg focus:ring-primary-600 focus:border-primary-600
                        block   dark:border-gray-600 dark:placeholder-gray-400 
                         dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
           </div>



           <div style={{padding:40,paddingTop:5,paddingBottom:5}}>
           <label for="name" class=" mb-2 text-sm font-medium text-black">Option</label>
                      <input
                          value={an4}  onChange={(event)=>{setan4(event.target.value)}} 
                      type="text" name="name" id="name" placeholder="Correct answer" class="bg-gray-50 border
                       border-gray-900 p-1.5 sm:text-sm  text-black rounded-lg focus:ring-primary-600 focus:border-primary-600
                        block  dark:border-gray-600 dark:placeholder-gray-400 
                         dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
           </div>

           <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>


           <div style={{textAlign:"center",marginTop:10,width:100,marginRight:10,cursor:"pointer"}}>
<div style={{backgroundColor:saved?"grey":""}}  onClick={()=>{saveq()}}  class="w-full px-4 py-2 text-sm text-white font-medium text-white bg-green-500 border border-gray-300 
rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"> {saved?"Saved":"Save"} </div>
</div>

           <div style={{textAlign:"center",marginTop:10,width:100,cursor:"pointer"}}>
<div  onClick={()=>{props.delete(props.no)}}  class="w-full px-4 py-2 text-sm text-white font-medium text-white bg-red-600 border border-gray-300 
rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"> Delete </div>
</div>

           </div>


    </div>


  )
}

export default qunit