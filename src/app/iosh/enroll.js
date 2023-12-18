import {React,useState} from 'react'
import { useRouter } from 'next/navigation'
import wa from "../iosh/img/wa.png"
import Image from 'next/image'
import Link from "next/link";
import Router from 'next/router'
import { FaClock,FaGraduationCap,FaDollarSign,FaBuilding,FaLanguage,FaCalendar,FaCertificate,FaQuestionCircle,FaArrowCircleRight, FaWhatsappSquare } from 'react-icons/fa'



function Enroll(props) {
  const [enq,setEnq] = useState(false);
  const router = new useRouter();

    


  return (

<div className='w-full' style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
   <div className='w-full' style={{display:"flex",alignItems:"flex-start",justifyContent:"center"}}>
    <div className='w-1/2' style={{display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column"}}>
   
    <div style={{display: props.short?"none":"flex",justifyContent:"center",alignItems:"center",marginTop:5}}>
       <div style={{display:"flex",alignItems:"center",alignItems:"center"}}><FaGraduationCap/> <div style={{marginLeft:5}} > Qualifications :</div> </div> 
      <div style={{color:"black",fontWeight:"bold",marginLeft:10}}>{props.data.name}</div>
    </div>


    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:5}}>
       <div style={{display:"flex",alignItems:"center",alignItems:"center"}}><FaClock/> <div style={{marginLeft:5}} > Duration :</div> </div> 
      <div style={{color:"black",fontWeight:"bold",marginLeft:10}}>{props.data.duration}</div>
    </div>


    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:5}}>
       <div style={{display:"flex",alignItems:"center",alignItems:"center"}}><FaDollarSign/> <div style={{marginLeft:5}} > Price :</div> </div> 
      <div style={{color:"black",fontWeight:"bold",marginLeft:10}}>{props.data.price}</div>
    </div>

    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:5}}>
       <div style={{display:"flex",alignItems:"center",alignItems:"center"}}><FaBuilding/> <div style={{marginLeft:5}} > Board :</div> </div> 
      <div style={{color:"black",fontWeight:"bold",marginLeft:10}}>{props.data.board}</div>
    </div>



   
    </div>


    <div   style={{display: props.short?"none":"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column"}}
    
    
    >

    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:5}}>
       <div style={{display:"flex",alignItems:"center",alignItems:"center"}}><FaLanguage/> <div style={{marginLeft:5}} > Language :</div> </div> 
      <div style={{color:"black",fontWeight:"bold",marginLeft:10}}>{props.data.lang}</div>
    </div>
    

    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:5}}>
       <div style={{display:"flex",alignItems:"center",alignItems:"center"}}><FaCalendar/> <div style={{marginLeft:5}} > Batch Type :</div> </div> 
      <div style={{color:"black",fontWeight:"bold",marginLeft:10}}>{props.data.btype}</div>
    </div>


    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:5}}>
       <div style={{display:"flex",alignItems:"center",alignItems:"center"}}><FaCertificate/> <div style={{marginLeft:5}} >  Level :</div> </div> 
      <div style={{color:"black",fontWeight:"bold",marginLeft:10}}>{props.data.level}</div>
    </div>

    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:5}}>
       <div style={{display:"flex",alignItems:"center",alignItems:"center"}}><FaQuestionCircle/> <div style={{marginLeft:5}} >  Examination :</div> </div> 
      <div style={{color:"black",fontWeight:"bold",marginLeft:10}}>{props.data.etype}</div>
    </div>



    </div>

   




   </div>


   <div  className='w-full' style={{display:props.short?"flex":"none",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:25}}>
    <div onClick={()=>{router.push(props.url)}} style={{textAlign:"center",marginTop:10,cursor:"pointer"}}>
<div  style={{display:"flex",justifyContent:"center",alignItems:"center"}} class="w-full px-4 py-2 text-sm text-white font-medium text-white bg-blue-500 border border-gray-300 
rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"> <FaArrowCircleRight/> <span style={{marginLeft:10}}>ENROLL</span>  </div>
</div>
        </div>


{
  props.short?
  <div></div>:        
  <div style={{width:"100%",marginTop:40,borderRadius:5,backgroundColor:"white"}}  class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" class="px-6 py-3">
                      Batch
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Start Date
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Mode Of Study
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Exam Date
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Register
                  </th>
              </tr>
          </thead>
          <tbody>

            
    {props.table&&props.table.map((item, index) => (

<tr class="bg-white border-b  dark:border-gray-700">
<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
    {item&&item.attributes.name}
</th>
<td class="px-6 py-4 text-gray-700">
   {item&&item.attributes.start}
</td>
<td class="px-6 py-4 text-gray-700">
{item&&item.medium}
</td>
<td class="px-6 py-4 text-gray-700">
    {item&&item.attributes.end}
</td>
<td class="px-6 py-4 text-gray-700">

<div  className='w-full h-full' style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:10}}>
    <div onClick={()=>{setEnq(!enq)}} style={{textAlign:"center",marginTop:10,cursor:"pointer"}}>
<div  style={{display:"flex",justifyContent:"center",alignItems:"center"}} class="w-full px-4 py-2 text-sm text-white font-medium text-white bg-green-500 border border-gray-300 
rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"> <FaWhatsappSquare/> <span style={{marginLeft:10}}>Enquier</span>  </div>
<div style={{  padding:10,display:enq?"block":"none"}} >
<Image
      src= {wa}
      width={300}
      height={300}
      alt="IOSH LOGO"
    />

    <div style={{display:"flex",justifyContent:"center", alignItems:"center",color:"black"}}>
      Scan Code To Chat
    </div>
</div>
</div>
        </div>

<div  className='w-full h-full' style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:10}}>
   


<Link href={{ pathname: '/enrollment', query: { id: props.id,bid:item.id } }}>
  
<div style={{textAlign:"center",marginTop:10,cursor:"pointer"}}>
<div  style={{display:"flex",justifyContent:"center",alignItems:"center"}} class="w-full px-4 py-2 text-sm text-white font-medium text-white bg-blue-500 border border-gray-300 
rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"> <FaArrowCircleRight/> <span style={{marginLeft:10}}>ENROLL</span>  </div>
</div>
  </Link>

   
   
   
        </div>
    
</td>
</tr>

           
          ))}
            
            
              
           
          </tbody>
      </table>
  </div> 
}




   </div>
  )
}

export default Enroll