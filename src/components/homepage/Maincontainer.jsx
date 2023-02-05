import React from 'react'

var obj =[
    {
        headline:"World's wealtheist Business Families 2022:Ambani Rank 6th",
        body:"Lorem ipsum dolor sit amet, consectetur adip occum nostra nostra, sed diam nonumy eirmod tempor inviduer;sed diam nonumy eirmod tempor inviduer;sed diam nonumy eirmod tempor...",
        readmore :"Read More"
    },
    {
        headline:"World's wealtheist Business Families 2022:Ambani Rank 6th",
        body:"Lorem ipsum dolor sit amet, consectetur adip occum nostra nostra, sed diam nonumy eirmod tempor inviduer;sed diam nonumy eirmod tempor inviduer;sed diam nonumy eirmod tempor...",
        readmore :"Read More"
    },
    {
        headline:"World's wealtheist Business Families 2022:Ambani Rank 6th",
        body:"Lorem ipsum dolor sit amet, consectetur adip occum nostra nostra, sed diam nonumy eirmod tempor inviduer;sed diam nonumy eirmod tempor inviduer;sed diam nonumy eirmod tempor...",
        readmore :"Read More"
    },
    {
        headline:"World's wealtheist Business Families 2022:Ambani Rank 6th",
        body:"Lorem ipsum dolor sit amet, consectetur adip occum nostra nostra, sed diam nonumy eirmod tempor inviduer;sed diam nonumy eirmod tempor inviduer;sed diam nonumy eirmod tempor...",
        readmore :"Read More"
    },
    {
        headline:"World's wealtheist Business Families 2022:Ambani Rank 6th",
        body:"Lorem ipsum dolor sit amet, consectetur adip occum nostra nostra, sed diam nonumy eirmod tempor inviduer;sed diam nonumy eirmod tempor inviduer;sed diam nonumy eirmod tempor...",
        readmore :"Read More"
    }
]
function Maincontainer() {
  return (
    <div className="xl:w-3/5 lg:w-3/5 md:w-3/4 sm:w-full py-12">
        {obj.map(props =>{return <><div className="news-component pb-5 px-6">
            <h1 className="text-2xl font-semibold mb-4">{props.headline}</h1>
            <p className="text-slate-600 mb-4 text-lg">{props.body} <span className="font-bold cursor-pointer">{props.readmore}</span></p>
        </div>
        <hr className="mb-5" /></>})}
        
    </div>
  )
}

export default Maincontainer