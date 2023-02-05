import React from 'react'
import Leftcontainer from './Leftcontainer';
import Maincontainer from './Maincontainer';
import Rightcontainer from './Rightcontainer';
import Header from '../Header';
import { Link } from "react-router-dom"

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
    {email !== null ?  <Header login={<Link to="/NewsProject-React" className="hidden xl-block lg-block xxl-block md:block  xl:w-1/5 lg:w-1/3 xl:h-auto md:w-1/3 login" id="loginbtn"><button className="font-bold bg-white w-full h-full" onClick={logoutfunction}>Logout</button></Link>} signup={<Link to="/signup" className="hidden  xl:w-1/5 lg:w-1/3 xl:h-auto md:w-1/3 signup" id="signupbtn"><button className="font-bold bg-white w-full h-full">Signup</button></Link>} /> : <Header login={<Link to="/login" className="hidden xl-block lg-block xxl-block md:block  xl:w-1/5 lg:w-1/3 xl:h-auto md:w-1/3 login" id="loginbtn"><button className="font-bold bg-white w-full h-full">Login</button></Link>} signup={<Link to="/signup" className="hidden xl-block lg-block xxl-block md:block  xl:w-1/5 lg:w-1/3 xl:h-auto md:w-1/3 signup" id="signupbtn"><button className="font-bold bg-white w-full h-full">Signup</button></Link>} />}
    <div className="xl:px-12 flex">
    {email !== null ? <Leftcontainer article={<Link to='/article'><button className="text-white text-xl font-semibold py-2 px-7" style={{backgroundColor : "#7A6BB8"}}> Article </button></Link>} null />:<Leftcontainer article =""/>}
    <Maincontainer/>
    <Rightcontainer/>
    </div>
    </>
  )
}

export default Body