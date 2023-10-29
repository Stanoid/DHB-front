import React from 'react'
import Image from 'next/image'

function Course(props) {
  return (
    <div style={{backgroundColor:"white",display:"flex",flexDirection:"column",borderRadius:10,width:"auto",color:"black",padding:10}}>
     <Image
      src= {props.img}
      width={200}
      height={200}
      alt="IOSH LOGO"
    />

    <div style={{padding:10,textAlign:"center",fontWeight:"bold",fontSize:15}}>
        <div>{props.title}</div>

<div onClick={()=>{props.getData(1)}} style={{textAlign:"center",marginTop:10}}>
<div  class="w-full px-4 py-2 text-sm text-white font-medium text-white bg-blue-500 border border-gray-300 
rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"> More info </div>
</div>


    </div>
        </div>
    
  )
}

export default Course