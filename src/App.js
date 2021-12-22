import React,{useState} from "react";
import './App.css';
import ico from './img/ico.png'
import {Form} from 'react-bootstrap';
import New from "./new";
import Header from "./header";
import './main.css';
import './header.css'


function App() {

 
 
return(
     <div>
    <br></br>
<New/>
<br></br> <br></br> <br></br>
<h1>Page1</h1> 

<div className="row container "> 
          <div className="col-md-2">  <img className="mb-3 " src={ico} height={"100px"} width={"160px"}  ></img>  </div>
          <div className="col-md-4"><h5>Dashboard <i class="bi bi-chevron-right"></i> Booth <i class="bi bi-chevron-right"></i> All</h5></div>
         <div className="col-md-1"></div>
         <div className="col-md-4 u logout"> Is77@biz.com <i class="bi bi-box-arrow-in-left"></i></div>
         </div>
        
      <div className=" main row ">
        <div className="col-md-2 ">
        <span className="components  ">  <i class="bi i bi-camera"></i> SELFIE  BOOTH  <i class="bi bi-chevron-down"></i> </span><br></br> <br></br>
        <span className="components "><i class="bi i bi-image"></i>  GALLERY</span><br></br> <br></br>
        <span className="components "><i class="bi i bi-app"></i> TEMPLATES</span>
        </div>
        <div className="col-md-7">
          <div className="row  mb-3 ">
<div className="col-md-1 u"><h4>Events</h4></div>
     <div className="col-md-9"></div> 
     <div className="col-md-2"> <button className="p-1">+New Event</button></div>    
          </div>
          <div className="row ">
 <div className="col-md-2"></div>
  <div className="col-md-12 activity  ">
    <br></br>
  Activity
  <hr></hr>
  <div className="row">
    <div className="col-md-4 icon p-4 u"> <i class="bi a bi-calendar-fill"></i> 3 <br></br>Events Created  </div>
    <div className="col-md-4 icon p-4 u"> <i class="bi a bi-camera-fill"></i> 18 <br></br> Photos Captured</div>
    <div className="col-md-4 p-4 u "> <i class="bi a bi-share-fill"></i> - <br></br>Shares Collected</div>
    
  </div>
  <br></br> <br></br>
  </div>



</div>
<div className="row border mt-3 ">
  
  <div className="col-md-12 search">
    <br></br>
    <input type="search" placeholder="Search.."></input>
    <br></br>
    <hr></hr>
  
<div className="row  " >
  <div className="col-md-3 u">Name</div>
  <div className="col-md-2 u">Slug</div>
  <div className="col-md-3 u">Event Start Date</div>
  <div className="col-md-4 u">Photos     </div>
</div>
<hr></hr>
<div className="row mb-1" >
  <div className="col-md-3">77777</div>
  <div className="col-md-2">77test</div>
  <div className="col-md-3">11/29/2021,11:41:24 PM</div>
  <div className="col-md-4">6    <button className="p-0"><i class="bi bi-chevron-down"></i> De-activate</button>     <i class="bi bi-pencil-fill"></i>    <i class="bi bi-file-earmark-fill"></i>   <i class="bi bi-trash"></i></div>
</div>
<div className="row mb-1" >
  <div className="col-md-3">77777</div>
  <div className="col-md-2">77test</div>
  <div className="col-md-3">11/29/2021,11:41:24 PM</div>
  <div className="col-md-4">6  <button className="p-0"><i class="bi bi-chevron-down"></i> De-activate</button>     <i class="bi bi-pencil-fill"></i>    <i class="bi bi-file-earmark-fill"></i>   <i class="bi bi-trash"></i></div>
</div>
<div className="row mb-4" >
  <div className="col-md-3">77777</div>
  <div className="col-md-2">77test</div>
  <div className="col-md-3">11/29/2021,11:41:24 PM</div>
  <div className="col-md-4">6  <button className="p-0"><i class="bi bi-chevron-down"></i> De-activate</button>     <i class="bi bi-pencil-fill"></i>    <i class="bi bi-file-earmark-fill"></i>   <i class="bi bi-trash"></i></div>
</div>

  </div>



 </div>

</div>

</div>



 
<br></br>

  


     </div>
     

  
   
    
  );
}

export default App;
