import {React,useEffect} from 'react'
import './style.css';
import { FaList,FaClock,FaBookOpen,FaCheckCircle,FaListOl,FaInfo, FaUserPlus, } from "react-icons/fa";
function floating() {


    useEffect(() => {
        const handleScroll = () => {
          const stickyDiv = document.querySelector('.sticky-div');
          const scrollPosition = window.pageYOffset;
    
          if (scrollPosition > 0) {
            // Calculate and update padding based on scroll position
            const newPadding = Math.max(20 - scrollPosition, 10);
            stickyDiv.style.padding = `${newPadding}px`;
          } else {
            // Reset padding to initial value when scroll position is back to the top
            stickyDiv.style.padding = '20px';
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    





  return (

    <>

<br/>


<div   className='bg-gray-700' style={{padding:15,
    position:"sticky",top:0,left:0,display:"flex",justifyContent:"space-around",alignItems:"center"}} >



<a href='#overview'>

<div style={{display:"flex",justifyContent:"center",alignItems:"center",borderRight:"2px solid white",paddingRight:15,cursor:"pointer"}}>
<div style={{color:"white",marginRight:10}}>
    <FaList/>
</div>
<div style={{color:"white"}}>
    OVERVIEW
</div>
</div>
</a>


<a href='#details'>

<div style={{display:"flex",justifyContent:"center",alignItems:"center",borderRight:"2px solid white",paddingRight:15,cursor:"pointer"}}>
<div style={{color:"white",marginRight:10}}>
    <FaClock/>
</div>
<div style={{color:"white"}}>
    DETAILS
</div>
</div>
</a>


<a href='#assessment'>

<div style={{display:"flex",justifyContent:"center",alignItems:"center",borderRight:"2px solid white",paddingRight:15,cursor:"pointer"}}>
<div style={{color:"white",marginRight:10}}>
    <FaCheckCircle/>
</div>
<div style={{color:"white"}}>
    ASSESSMENT
</div>
</div>
</a>


<a href='#content'>

<div style={{display:"flex",justifyContent:"center",alignItems:"center",borderRight:"2px solid white",paddingRight:15,cursor:"pointer"}}>
<div style={{color:"white",marginRight:10}}>
    <FaListOl/>
</div>
<div style={{color:"white"}}>
    CONTENT
</div>
</div>
</a>


<a href='#enroll'>
<div style={{display:"flex",justifyContent:"center",alignItems:"center",borderRight:"0px solid white",paddingRight:15,cursor:"pointer"}}>
<div style={{color:"white",marginRight:10}}>
    <FaUserPlus/>
</div>
<div style={{color:"white"}}>
    ENROLL
</div>
</div>
</a>






    </div>


<br/><br/>

   
    </>

   
  )
}

export default floating