
import './App.css';
import ico from './img/ico.png'
import {Form} from 'react-bootstrap';
import New from "./new";
import Header from "./header";
import './main.css';


function App() {

 
 
return(
     <div>
<h1>Page2</h1>
<New/>
<br></br> <br></br> <br></br>
<h1>Page1</h1>
<  Header />
<div className="row">
  <div className="col-md-2"></div>
  <div className="col-md-7 top ">
    <h4>Events</h4> <button>+New Event</button>
  </div>
  
 </div>
 <br></br>
 <div className="row">
 <div className="col-md-2"></div>
  <div className="col-md-7 activity  ">
    <br></br>
  Activity
  <hr></hr>
  <div className="row">
    <div className="col-md-4 icon"> <i class="bi a bi-calendar-fill"></i> 3 <br></br>Events Created  </div>
    <div className="col-md-4 icon"> <i class="bi a bi-camera-fill"></i> 18 <br></br> Photos Captured</div>
    <div className="col-md-4 "> <i class="bi a bi-share-fill"></i> - <br></br>Shares Collected</div>
    
  </div>
  <br></br> <br></br>
  </div>
 </div>
<br></br>

  <div className="row">
  <div className="col-md-2"></div>
<div className="col-md-10 search">
  <br></br>
  <input type="search" placeholder="Search.."></input>
  <br></br>
  <hr></hr>
  <div className="row m">
    <div className="col-md-2">Name 
   <div className="row">
     <hr></hr>
     <div className="col-md-12">77777</div>
     <div className="col-md-12">Biz_demo_selfie</div>
     <div className="col-md-12">Laane photo booth</div>
   </div>
    </div>
    <div className="col-md-2"> Slug
    <div className="row m">
     <hr></hr>
     <div className="col-md-12">77777test</div>
     <div className="col-md-12">LSTEST9999</div>
     <div className="col-md-12">Laane pB</div>
   </div></div>
    <div className="col-md-2"> Event Start Date
    <div className="row m">
     <hr></hr>
     <div className="col-md-12">11/29/2021, 2:09:36 PM</div>
     <div className="col-md-12">12/20/2021, 11:41:24 AM</div>
     <div className="col-md-12">12/18/2021, 6:23:55</div>
   </div></div>
    <div className="col-md-1"> Photos
    <div className="row m">
     <hr></hr>
     <div className="col-md-12">6</div>
     <div className="col-md-12">12</div>
     <div className="col-md-12">0</div>

     
   </div></div>

   <div className="col-md-2"> Action
    <div className="row m ">
     <hr></hr>
     <div className="col-md-12"> <button><i class="bi bi-chevron-down"></i> De-activate</button>     <i class="bi bi-pencil-fill"></i>    <i class="bi bi-file-earmark-fill"></i>   <i class="bi bi-trash"></i> </div>
     <div className="col-md-12"> <button><i class="bi bi-chevron-down"></i> De-activate</button>      <i class="bi bi-pencil-fill"></i>    <i class="bi bi-file-earmark-fill"></i>   <i class="bi bi-trash"></i></div>
     <div className="col-md-12"> <button><i class="bi bi-chevron-down"></i> De-activate</button>     <i class="bi bi-pencil-fill"></i>    <i class="bi bi-file-earmark-fill"></i>   <i class="bi bi-trash"></i></div>


     
     
  
     
   </div></div>
  </div>
</div>
  </div>



     </div>
     

  
   
    
  );
}

export default App;
