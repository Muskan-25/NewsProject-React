import React from 'react'
import {Link} from "react-router-dom"
import Nav2 from "./Nav2"

function Header() {
  return (
    <>
      <div className="header px-10 flex flex-row xl:flex-row lg:flex-row md:flex-row -z-10" style={{backgroundColor : "#7A6BB8"}}>
        <div className="xl:w-2/6 md:w-2/5 w-16 xl:block lg:block md:hidden hidden"></div>
        <div className="headline justify-content-center py-2.5 xl:w-2/6 md:w-2/3 w-full">
            <h1 className="m-0 text-center text-white font-bold text-3xl ">
              <Link to="/NewsProject-React">Webcooks Headlines</Link></h1>
        </div>
        <div className="buttons justify-center flex lg:flex-row md:flex-row flex-col  xl:w-2/6 md:w-2/5 w-2/6" id="btns">
          <Nav2/>
        </div>
      </div>
    </>  
    )
}

export default Header