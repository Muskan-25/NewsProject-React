import React from 'react'
import {Link} from "react-router-dom"

var loginbtn = document.querySelector("#loginbtn");
var signupbtn = document.querySelector("#signupbtn");

function displaymobilemenu(){
    
    loginbtn.classList.toggle("hidden");
    signupbtn.classList.toggle("hidden");
    var btns = document.querySelector("#btns");
    
    if(loginbtn.classList.contains(".hidden") === false && signupbtn.classList.contains(".hidden") === false){
        loginbtn.classList.toggle("max-md:px-6");
        loginbtn.classList.toggle("max-md:py-2");
        loginbtn.classList.toggle("max-md:mb-5");
        loginbtn.classList.toggle("max-md:mt-9");
        signupbtn.classList.toggle("max-md:mb-5");
        signupbtn.classList.toggle("max-md:mt-9");
        signupbtn.classList.toggle("max-md:px-6");
        signupbtn.classList.toggle("max-md:py-2");
        btns.classList.toggle("max-md:justify-center");  
    } 
}
function Header(props) {
  return (
    <>
      <div className="header py-2.5 px-10 flex flex-col xl:flex-row lg:flex-row md:flex-row" style={{backgroundColor : "#7A6BB8"}}>
        <div className="xl:w-2/6 md:w-2/5 w-16"></div>
        <div className="headline justify-content-center xl:w-2/6 md:w-2/3 w-full">
            <h1 className="m-0 text-center text-white font-bold text-3xl ">
              <Link to="/">Webcooks Headlines</Link></h1>
        </div>
        <div className="buttons justify-end flex gap-8 xl:w-2/6 md:w-2/5 w-full" id="btns">
          {props.login}
          {props.signup}
            <button className=" text-white font-bold text-4xl cursor-pointer xl:hidden lg:hidden md:hidden max-w-768px:block absolute top-3 right-9 float-right" id="displaymenu" onClick={displaymobilemenu}><ion-icon name="menu-outline"></ion-icon></button>
        </div>
      </div>
    </>  
    )
}

export default Header