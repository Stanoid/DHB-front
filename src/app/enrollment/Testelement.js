import {React, useState,useEffect} from 'react'

function Testelement(props) {


  
const shuffleanswers=(array)=>{
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;

}

  const [uls, setUls] = useState(
    shuffleanswers([
      {"val": 1,"an":props.ob.ca,"id":props.ob.id},
      {"val": 0,"an":props.ob.an2,"id":props.ob.id},
      {"val": 0,"an":props.ob.an3,"id":props.ob.id},
      {"val": 0,"an":props.ob.an4,"id":props.ob.id}
  ])
  );

const [reload, setreload] = useState(null);

useEffect(() => {
 renderansers();
}, [])

const renderansers=()=>{
 
  const shfld = shuffleanswers(uls);
  setUls(shfld);
  setreload(true);




}






  
  return (
   <div style={{width:"100%",display:"flex",alignItems:"flex-start",flexDirection:"column",padding:10}}>
  <h1 style={{fontWeight:"bold",fontSize:20}}> {props.no}. {props.ob.q} </h1>

   <ul style={{marginTop:15}}>

  

   {uls.map((item, index) => (

<li style={{marginTop:5}}>
    <div>
    <input type="radio"  name={item.id}  value={item.an} />
    <label style={{marginLeft:10,fontSize:15}} for="huey">{item.an }</label>
  </div>
    </li>

       
      ))}

{/*     

    <li style={{marginTop:5}}>
    <div>
    <input type="radio"  name={props.ob.id} value={props.ob.an2} />
    <label style={{marginLeft:10,fontSize:15}} for="huey">{props.ob.an2}</label>
  </div>
    </li>

    <li style={{marginTop:5}}>
    <div>
    <input type="radio"  name={props.ob.id} value={props.ob.an3} />
    <label style={{marginLeft:10,fontSize:15}} for="huey">{props.ob.an3}</label>
  </div>
    </li>

    <li style={{marginTop:5}}>
    <div>
    <input type="radio"  name={props.ob.id} value={props.ob.an4} />
    <label style={{marginLeft:10,fontSize:15}} for="huey">{props.ob.an4}</label>
  </div>
    </li> */}

    

    
   </ul>



   </div>
  )
}

export default Testelement