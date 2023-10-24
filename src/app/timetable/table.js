import React from 'react'
import { useEffect,useState } from 'react';
import { API_URL } from '../../../utils/url';
import Cookies from "universal-cookie";
import { Scheduler } from "@aldabil/react-scheduler";
function table() {

  const [events, setEvents] = useState("");
  const [evtitle, setEventtitle] = useState("");
  const [evstart, setevstart] = useState("");
  const [evend, setevend] = useState("");
  const cookies = new Cookies();
  const [loading, setLoading] = useState(true);
 
  
useEffect(() => {
   getEvents();
}, [])



const createevents=(a)=>{

  const requestOptions = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + cookies.get("login").jwt
      
    },
    body: JSON.stringify(
      {
        "data":{
   title: a.title ,
   start: a.start,
   end:a.end,  
        }
      }
    )
  
};



fetch(`${API_URL}/events`, requestOptions)
    .then(response => response.json())
    .then(data =>{
   console.log(data)
      location.reload();

    });

}



const deleteevent=(a)=>{

  const requestOptions = {
    method: 'DELETE',
    headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + cookies.get("login").jwt
      
    },
   
};



fetch(`${API_URL}/events/`+a, requestOptions)
    .then(response => response.json())
    .then(data =>{
  console.log(data)
      location.reload();

    });

}

const getEvents = ()=>{
  
  const requestOptions = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
      
    },
  
};




let datain = []
setLoading(true)
fetch(`${API_URL}/events`, requestOptions)
    .then(response => response.json())
    .then(data =>{
     
console.log(data)
      
    
      for (let i = 0; i < data.data.length; i++) {


        // let da = new Date(data.data[i].attributes.end)
        // let yy = da.getFullYear();
        // let mm = da.getMonth();
        // let dd = da.getDay();
        // let hh = da.getHours();
        // let nn = da.getMinutes();
        //  alert(new Date(data.data[i].attributes.end))
        // let de = new Date(data.data[i].attributes.start)
        // let yy1 = de.getFullYear();
        // let mm1 = de.getMonth();
        // let dd1 = de.getDay();
        // let hh1 = de.getHours();
        // let nn1 = de.getMinutes();
        
let cend = new Date(data.data[i].attributes.end)
let cstart = new Date(data.data[i].attributes.start)



       let temp = {
        event_id:data.data[i].id,
        title:data.data[i].attributes.title,
        start: cstart,
        end: cend,  



        

       }

      

       datain.push(temp)

      }

      setEvents(datain);
      setLoading(false);
      console.log(events)
       
    });
}





  return (
  <div>
 {loading? []: <Scheduler
    view={"month"}
    editable= {true}
    draggable={false}
    loading	= {false}
    onDelete={(a)=>{deleteevent(a)}}
    stickyNavigation= {true}
    onConfirm={(a,b)=>{createevents(a)}}
    events={events}
  />}
  



  </div>
  
  )
}

export default table