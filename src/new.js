import React,{useState} from "react";
import './App.css';
import ico from './img/ico.png'
import slider from './img/slider.png'
import {Form} from 'react-bootstrap';
import Header from "./header";



function New() {
  const [date,setdate]=useState('	Tuesday, 21-Dec-21 12:01:43 UTC ');
  const [time,settime]=useState();
 
  function changedate(event){
    setdate(event.target.value);
  }
  
  function changetime(event){
    settime(event.target.value);
  }
  
  
  let date2=new Date(date);

  let date3=new Date(date2);
  date3.setDate(date2.getDate()+7);

let finaldate=date3.toISOString().split('T')[0];
console.log(finaldate);
  return (
    <div className="App mybody">
 
 <div className="row "> 
          <div className="col-md-2">  <img className="mb-3 " src={ico} height={"100px"} width={"160px"}  ></img>  </div>
          <div className="col-md-4"><h5>Dashboard <i class="bi bi-chevron-right"></i> Booth <i class="bi bi-chevron-right"></i> New</h5></div>
         <div className="col-md-3"></div>
         <div className="col-md-3 logout"> Is77@biz.com <i class="bi bi-box-arrow-in-left"></i></div>
         </div>
        
      <div className=" main row ">
        <div className="col-md-2 ">
        <span className="components  ">  <i class="bi i bi-camera"></i> SELFIE  BOOTH  <i class="bi bi-chevron-down"></i> </span><br></br> <br></br>
        <span className="components "><i class="bi i bi-image"></i>  GALLERY</span><br></br> <br></br>
        <span className="components "><i class="bi i bi-app"></i> TEMPLATES</span>
        </div>
        <div className="col-md-9 ">
          <div className="row main  ">
    
 

 <div className="col-md-3"> <h3>Virtual Booth</h3></div>
 <div className="col-md-5"><img className="" src={slider} height={"30"} width={"320px"}  ></img></div>

<div className="col-md-4 but"><button className="left"> <i class="bi bi-chevron-left"></i> Go back </button>   
   <button className="right"> Continue<i class="bi bi-chevron-right"></i></button>
</div>

        
</div>

<div className="row virtual ">
      <div className="col-md-2">
 
 </div>
 <div className="col-md-12 ">
    <div className="row bb p-4">
    <pre></pre>  <pre></pre>
      <h4> General</h4> <br></br> <br></br>
    <Form>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label id="eventname" >Event Name</Form.Label>
    <Form.Control className="form myform" type="text" placeholder="Choose your event name" />
  </Form.Group>
  <br></br>
  
  <div id="dates"> <div>Start Date </div>  <div>Start Time </div>    <div>End Date</div>     <div>End Time  </div></div>
  
    <div id="inp">
    <input type="date" value={date}  onChange={changedate}></input>
  


  <input type="time" id="appt" name="appt" onChange={changetime} ></input>



     <input id="inp" type="date"  value={finaldate} ></input> 
     
 
  <input type="time" id="appt"  name="appt" value={time} ></input></div> 

  
<br></br> <br></br>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label id="eventname" >Slug (www.bizconnectevents.com/slug)</Form.Label>
    <Form.Control className="form myform" type="text" placeholder="Choose your event name as slug Min 6 characters" />
  </Form.Group>
  <br></br>  <br></br> <br></br>
</Form>

      </div> 
    </div>
</div>



       
      </div>



      


     </div>
 
   
      


</div>

      

   
    
  );
}

export default New;
