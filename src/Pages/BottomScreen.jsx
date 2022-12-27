import React from "react";
import style from "../styles/style.module.css";
import "../Component/style.css"
import '../App.css';
export const BottomScreen = () => {


  return (

<div class="container border border-dark rounded m-1 ">
  <div class="row ">
    <div class="col-sm   v1  m-2 align-middle justify-center">
      <h2 className="text-dark text-center font-weight-bold">GET IN TOUCH</h2>
      <h6 className="text-dark text-center font-weight-bold" >Please Complete the form and we will get back to you</h6>
    </div>
    
    
    <div class="col-sm  border-dark border-left   " >
    <form class="text text-dark font-weight-bold p-2 m-1">
      
<div className="form-group ">
        <label htmlFor="name">Name*</label>
        <input type="text" className="form-control" id="name" name="name"   required minLength={3}  aria-describedby="emailHelp" placeholder="Enter your Name"/>
         </div>
    <div className="form-group my-2">
        <label htmlFor="email">Email*</label>
        <input type="email" className="form-control" id="email" name="email"   required  aria-describedby="emailHelp" placeholder="Enter your email"/>
        
    </div>
   
    <div className="form-group my-2">
        <label htmlFor="mobile">Mobile Number*</label>
        <input type="tel" pattern="^\d{4}-\d{3}-\d{4}$"  className="form-control" name="mobile" id="mobile"
          required minLength={9} placeholder="Enter your Mobile Number"/>
    </div>
    <div className='text-center '>
    <button type="submit " className="btn  btn-primary my-1 text-center  btn-lg col-12 " style={{backgroundColor:"#123456"}}>&#160;&#160;&#160;Register Now&#160;&#160;&#160;</button>
    </div>
</form>
    </div>
  
  </div>
  </div>
  )


};
