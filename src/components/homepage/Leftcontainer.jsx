import React from 'react'
import { Link } from 'react-router-dom';

var obj = [
    {itemName : "All"  , link:'/NewsProject-React'},
    {itemName : "Fashion"  , link:'/Fashion'},
    {itemName : "Entertainment" , link:'/Entertainment'},
    {itemName : "Technology"  , link:'/Technology'},
    {itemName : "Commerce" , link:'/Commerce'},
]
function Leftcontainer(props) {
  const hideOnMobileClass = props.hideOnMobile ? "hidden" : ""; 
  return (
    <div className={`w-full xl:w-1/5 lg:w-1/5 md:w-auto xl:block lg:block md:block  py-12 px-6 ${hideOnMobileClass}`} style={{backgroundColor: "#F8F6FF"}}>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-gray-900 font-sans mb-5">
          <span className="block text-gray-900 ">Categories</span></h1>
        <ul className='mb-8'>
            {obj.map(items => {return <><li className="text-lg mb-3 before:">
            <label className=""><Link to={`${items.link}`}>{items.itemName}</Link></label></li></>})}
        </ul>
        <div className='articlepagebtn'>{props.article}</div>
      </div>
    </div>
  )
}

export default Leftcontainer