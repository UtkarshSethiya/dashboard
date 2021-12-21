import React,{useState} from "react";
import './App.css';
import ico from './img/ico.png'
import {Form} from 'react-bootstrap';



function New() {
  const [date,setdate]=useState('	Tuesday, 21-Dec-21 12:01:43 UTC ');
 
  function changedate(event){
    setdate(event.target.value);
  }
  console.log(date);
  let date2=new Date(date);
console.log(date2)
  let date3=new Date(date2);
console.log(date2.getDate());
  date3.setDate(date2.getDate()+7);

  console.log(date3);
 
  

  
  let finaldate=date3.toISOString().split('T')[0];
  console.log(finaldate);

  return (
    <div className="App">
     
  <img src={ico} height={"100px"} width={"100px"}  ></img>
  <div className="row"> 
      <div className="col-md-2">   </div>
      <div className="col-md-4"><h5>Dashboard <i class="bi bi-chevron-right"></i> Booth <i class="bi bi-chevron-right"></i> New</h5></div>
     <div className="col-md-1"></div>
     <div className="col-md-4"> Is77@biz.com <i class="bi bi-box-arrow-in-left"></i></div>
     </div>
  <div className="main">
    <span className="components">  <i class="bi bi-camera"></i> SELFIE BOOTH</span><br></br>
    <span className="components"><i class="bi bi-image"></i>  GALLERY</span><br></br>
    <span className="components"><i class="bi bi-app"></i> TEMPLATES</span><br></br>
  </div>
 
    <div className="row">
 
     <div className="col-md-2"></div>
     <div className="col-md-2"> <h3>Virtual Booth</h3></div>
     <div className="col-md-3"></div>
   <div className="col-md-2 but"><button className="left"> <i class="bi bi-chevron-left"></i> Go back </button>
    <button className="right"> Continue <i class="bi bi-chevron-right"></i></button>
    </div>
    
    </div>
      <br></br>
<div className="row ">
  <div className="col-md-2">
 
  </div>
 <div className="col-md-7">
    <div className="row bb">
      
      <h4>General</h4> <br></br>
    <Form>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label id="eventname" >Event Name</Form.Label>
    <Form.Control className="form" type="text" placeholder="Choose your event name" />
  </Form.Group>
  <br></br>
  
  <div id="dates"> <div>Start Date </div>  <div>Start Time </div>    <div>End Date</div>     <div>End Time  </div></div>
  
    <div id="inp">
    <input type="date" onChange={changedate}></input>
  


  <input type="time" id="appt" name="appt"></input>



     <input type="date"  value={finaldate} ></input> 
     
 
  <input type="time" id="appt" name="appt"></input></div> 

  
<br></br> <br></br>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label id="eventname" >Slug (www.bizconnectevents.com/slug)</Form.Label>
    <Form.Control className="form" type="text" placeholder="Choose your event name as slug Min 6 characters" />
  </Form.Group>
  <br></br>  <br></br> <br></br>
</Form>

      </div> 
    </div>
</div>


</div>

      

   
    
  );
}

export default New;
