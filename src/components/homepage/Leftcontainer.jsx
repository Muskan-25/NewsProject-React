import React from 'react'

var obj = [
    {itemName : "All" , value : "defaultChecked" },
    {itemName : "Fashion" },
    {itemName : "Entertainment"},
    {itemName : "Technology" },
    {itemName : "Commerce"}
]
function Leftcontainer(props) {
  return (
    <div className="xl:w-1/5 lg:w-1/5 md:w-3/12 xl:block lg:block md:block hidden w-3/12 py-12 px-6" style={{backgroundColor: "#F8F6FF"}}>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-gray-900 font-sans mb-5">
          <span className="block text-gray-900 ">Categories</span></h1>
        <ul className='mb-8'>
            {obj.map(items => {return <><li className="text-lg mb-3 before:"><input type="checkbox" name="all" id="all" checked={items.value} className="mr-2"/>
            <label className="">{items.itemName}</label></li></>})}
        </ul>
        <div className='articlepagebtn'>{props.article}</div>
      </div>
    </div>
  )
}

export default Leftcontainer