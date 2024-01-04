import React from 'react'
function citem(props) {
  return (

    <>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
<div className="w-2/12 " style={{display:"flex",alignContent:"center",justifyContent:"center"}}>
   <div className='' style={{padding:15,fontSize:30,borderRadius:100,backgroundColor:"#81DBFF"}}>
    <props.icon  />
   </div>
    </div>
<div  className="w-10/12" style={{display:"flex",fontWeight:"bold",fontSize:30,color:"black",alignContent:"center",justifyContent:"flex-start"}}>
{props.title}
</div>
    </div>


    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
<div className="w-2/12" style={{display:"flex",alignContent:"center",justifyContent:"center"}}>
  
    </div>
<div  className="w-10/12" style={{display:"flex",color:"grey",alignContent:"center",justifyContent:"flex-start"}}>
{props.content}
</div>
    </div>

    




    </>  
  )
}

export default citem