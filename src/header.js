import React,{useState} from "react";
import './App.css';
import ico from './img/ico.png';

function Header(){
return(
    <div>
        
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
     
    
          </div>
    
);

}

export default Header;

