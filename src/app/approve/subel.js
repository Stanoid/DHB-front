import React from 'react'
import Cookies from 'universal-cookie';
import { API_URL } from '../../../utils/url';
import { useRouter } from 'next/navigation';
import { FaList,FaClock,FaBookOpen,FaCheckCircle,FaListOl,FaInfo,FaArrowCircleRight,FaArrowCircleLeft } from "react-icons/fa";
function subel(props) {

    const cookies = new Cookies();
    const router = useRouter()
    
const veruser=(subid)=>{

    if(props.data.attributes.ver==true){
alert("already checked id");
return
    }

   
    const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + cookies.get("login").jwt,
        },
        body: JSON.stringify({"data":{
          ver:true,
        
        }})
      };
  
      console.log(requestOptions);
      fetch(`${API_URL}/subscriptions/${subid}`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
         console.log("aaa",data)
         location.reload()
        
  
        });

}



const payuser=(subid)=>{

    if(props.data.attributes.paid==true){
alert("already marked as paid");
return
    }

   
    const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + cookies.get("login").jwt,
        },
        body: JSON.stringify({"data":{
          paid:true,
        
        }})
      };
  
      console.log(requestOptions);
      fetch(`${API_URL}/subscriptions/${subid}`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
         console.log("aaa",data)
         location.reload()
        
  
        });

}




  return (
    <div className="shadow-lg" style={{display:"flex",margin:10,flexDirection:"column",justifyContent:"space-between",
    alignItems:"center",width:"100%",padding:20}}>
  <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%"}}>

  <div style={{width:"100%",display:"flex",alignItems:"flex-start",justifyContent:"space-between"}}>

<div style={{width:"100%"}}>

<div style={{display:"flex",padding:2,justifyContent:"flex-start",width:"100%"}}>
   <div><span style={{fontWeight:"bold"}}> Name: </span> {props.data.attributes.user.data.attributes.name}</div> 
    </div>
    <div style={{display:"flex",padding:2,justifyContent:"flex-start",width:"100%"}}>
   <div><span style={{fontWeight:"bold"}}> Email: </span> {props.data.attributes.user.data.attributes.email}</div> 
    </div>

    <div style={{display:"flex",padding:2,justifyContent:"flex-start",width:"100%"}}>
   <div><span style={{fontWeight:"bold"}}> Country: </span> {props.data.attributes.user.data.attributes.country}</div> 
    </div>

    <div style={{display:"flex",padding:2,justifyContent:"flex-start",width:"100%"}}>
   <div><span style={{fontWeight:"bold"}}> phone: </span> {props.data.attributes.user.data.attributes.phone}</div> 
    </div>

</div>

<div style={{width:"100%"}}>

<div style={{display:"flex",padding:2,justifyContent:"flex-start",width:"100%"}}>
   <div><span style={{fontWeight:"bold"}}> Course: </span> {props.data.attributes.bill.bname}</div> 
    </div>
    <div style={{display:"flex",padding:2,justifyContent:"flex-start",width:"100%"}}>
   <div><span style={{fontWeight:"bold"}}> Batch: </span> {props.data.attributes.bill.cname}</div> 
    </div>

    <div style={{display:"flex",padding:2,justifyContent:"flex-start",width:"100%"}}>
   <div><span style={{fontWeight:"bold"}}> Price: </span> {props.data.attributes.bill.price}</div> 
    </div>

   

</div>

<div>
<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div style={{textAlign:"center",marginTop:10,cursor:"pointer"}}>
<div onClick={()=>{payuser(props.data.id);}}  style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:props.data.attributes.paid==false?"blue":"green"}} 
class="w-full px-4 py-2 text-sm text-white font-medium bg-blue-500 border border-gray-300 
rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 ">  
<span style={{marginRight:10}}>{props.data.attributes.paid==false?"Mark paid":"Paid"}</span> <FaCheckCircle/> </div>
</div>
    </div>
</div>


  </div>

    
  </div>


  <div style={{marginTop:10,display:"flex",flexDirection:"row",alignItems:"center",width:"100%",justifyContent:"space-between",backgroundColor:"#D8D8D8",padding:10}}>
  
  <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
    <h3>ID Photo</h3>
  <img width={200} src={props.data.attributes&&props.data.attributes.user.data.attributes.images.data[0].idphoto} />
    </div>

    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
    <h3>ID Check Photo</h3>
    
    <img width={200} src={props.data.attributes&&props.data.attributes.user.data.attributes.images.data[1].idcheckphoto} />
    </div>

    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div style={{textAlign:"center",marginTop:10,cursor:"pointer"}}>
<div onClick={()=>{veruser(props.data.id)}}  style={{display:"flex",justifyContent:"center",
alignItems:"center",
backgroundColor:props.data.attributes.ver==false?"blue":"green",
}} 
class="w-full px-4 py-2 text-sm text-white font-medium bg-blue-500 border border-gray-300 
rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100">  
<span style={{marginRight:10}}>{props.data.attributes.ver==false?"Approve":"Approved"}</span> <FaCheckCircle/> </div>
</div>
    </div>

 
  </div>
  
    
        </div>  
  )
}

export default subel