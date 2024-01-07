import React from 'react'
import Image from 'next/image'
import Enroll from '../iosh/enroll'
function Course(props) {
  return (
    <div className="sm:w-1 md:w-1/3  lg:w-1/3 " style={{padding:10}}>
      <div  style={{backgroundColor:"white",display:"flex",alignItems:"center",flexDirection:"column"
    ,borderRadius:10,marginTop:20,color:"black",padding:15}}>
        <Image
      src= {props.img}
      width={300}
      height={300}
      alt="IOSH LOGO"
    />


<div style={{padding:10,fontSize:15,width:300,fontWeight:"bold"}}>
{props.title}
</div>

<div style={{fontSize:12.5,marginTop:20}}>
<Enroll
 url={props.data.url}
 short={true}
 data={{
  
  "name":props.title,
 "price":props.data.price,
 "duration":props.data.duration,
 "lang":"English / Arabic",
 "level":"Basic / Level2",
 "board":props.data.board,
 "training":"Virtual / Offline",
 "etype":"MCQ + Offline",
 "btype":"Morning / Evening",
}}  />

</div>

    </div>
   

        </div>
    
  )
}

export default Course