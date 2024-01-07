import React from 'react'

function el(props) {
  return (
    <div>
          <div style={{display: props.short?"none":"flex",justifyContent:"center",alignItems:"center",marginTop:5}}>
       <div style={{display:"flex",alignItems:"center",alignItems:"center"}}>{props.icon} <div style={{marginLeft:5}} > {props.ptext}</div> </div> 
      <div style={{color:"black",fontWeight:"bold",marginLeft:10}}>{props.stext}</div>
    </div>
    </div>
  )
}

export default el