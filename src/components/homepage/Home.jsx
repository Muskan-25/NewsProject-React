import React from 'react'
import Leftcontainer from './Leftcontainer';
import Maincontainer from './Maincontainer';
import Rightcontainer from './Rightcontainer';
import { Link } from "react-router-dom"

export var loginbtn = document.querySelector("#loginbtn");
export var signupbtn = document.querySelector("#signupbtn");


var email = localStorage.getItem('Email');
function logoutfunction(){
  localStorage.removeItem('Email');
  localStorage.removeItem('headline');
  window.location.pathname='/NewsProject-React';
}
console.log(email)
function Body() {
  return (
    <>    
    <div className="xl:px-12 flex">
    {email !== null ? <Leftcontainer article={<Link to='/article'><button className="text-white text-xl font-semibold py-2 px-7" style={{backgroundColor : "#7A6BB8"}}> Article </button></Link>} null />:<Leftcontainer article =""/>}
    <Maincontainer/>
    <Rightcontainer/>
    </div>
    </>
  )
}

export default Body