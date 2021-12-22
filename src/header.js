import React,{useState} from "react";
import './App.css';
import ico from './img/ico.png';

function Header(){
return(
    <div>
        
   
      <div className="row  "> 
          <div className="col-md-2">   </div>
          <div className="col-md-4"><h5>Dashboard <i class="bi bi-chevron-right"></i> Booth <i class="bi bi-chevron-right"></i> New</h5></div>
         <div className="col-md-1"></div>
         <div className="col-md-4"> Is77@biz.com <i class="bi bi-box-arrow-in-left"></i></div>
         </div>
         <img className="" src={ico} height={"100px"} width={"160px"}  ></img>
      <div className="main border row ">
        <span className="components col-md-1">  <i class="bi i bi-camera"></i> SELFIE  BOOTH  <i class="bi bi-chevron-down"></i> </span><br></br> <br></br>
        <span className="components col-md-1"><i class="bi i bi-image"></i>  GALLERY</span><br></br> <br></br>
        <span className="components col-md-1"><i class="bi i bi-app"></i> TEMPLATES</span>
      </div>
     
    
          </div>
    
);

}

export default Header;

