import {React,useEffect,useState} from 'react'

function subel(props) {



  const [subs, setSubs] = useState([]);



  useEffect(() => {
    
  getattendence();
  }, [])


  const getattendence = () => {
    console.log("ssss",props.attob)
   let att = []
    for (let i = 0; i < props.attob.data.length; i++) {
      if(props.attob.data[i].testid==props.data.testid){
        if(props.attob.data[i].name){
          att.push(props.attob.data[i])   
        }
       
      }
    //console.log(props.attob.data[i]);
      
    }
setSubs(att)
   
  };
  


  return (

    <div  className="shadow-md" style={{padding:15,backgroundColor:props.data.status==2?"lightgreen":"",borderRadius:10,color:"black",flexDirection:"column",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <div style={{padding:15,borderRadius:10,color:"black",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
      <div style={{display:"flex",fontWeight:"bold",justifyContent:'center',alignItems:"center"}}>
 {props.data.id}-
</div>
<div style={{fontWeight:"bold"}}>{props.data.title}</div>
<div style={{fontWeight:"bold"}}>{props.data.date}</div>

        </div>


      <div>

      <tbody style={{border:"1px solid black"}}>
        
          
        {subs&&subs.map((item, index) => (
             
<tr style={{border:"1px solid",padding:10}}>
  <td>
    {item.name}
  </td>
<td>At </td>
  <td>
    {item.time}
  </td>
</tr>


            
          ))}
       </tbody>

    
        </div>  



    </div>
  )
}

export default subel