import React from 'react'
import Header from '../Header'
import { Link } from "react-router-dom"
import db from '../../firebase';
import { doc, onSnapshot } from "firebase/firestore";

function logoutfunction(){
    localStorage.removeItem('Email');
    window.location.pathname='/NewsProject-React';
}

var articleHeadline = localStorage.getItem('Headline');
var email = localStorage.getItem('Email');
async function postData(){
 onSnapshot(doc(db, `users/${email}/articles`, articleHeadline),(doc) => {
    var articledata= doc.data();
    var category = document.getElementById('category');
    var articleBody = document.getElementById('articleBody');
    var articleHead = document.getElementById('articleHeadline');
    category.innerHTML=articledata.category;
    articleBody.innerHTML=articledata.article;
    articleHead.innerHTML=articledata.articleHeadline;

});
}

function Post() {
  return (
    <>
    <Header login={<Link to="/NewsProject-React" className="hidden xl-block lg-block xxl-block md:block  xl:w-1/5 lg:w-1/3 xl:h-auto md:w-1/3 login" id="loginbtn"><button className="font-bold bg-white w-full h-full" onClick={logoutfunction}>Logout</button></Link>} signup={<Link to="/signup" className="hidden  xl:w-1/5 lg:w-1/3 xl:h-auto md:w-1/3 signup" id="signupbtn"><button className="font-bold bg-white w-full h-full">Signup</button></Link>} />

    <section className="posts justify-center my-12">
    <div className="xl:w-10/12 lg:w-10/12 md:w-10/12 flex flex-col w-full sm:w-10/12 py-14 px-14 mx-auto" style={{backgroundColor: "#f5f3fd"}}>
        <p className='font-normal text-gray-400 mb-1' id='category'></p>
        <h5 className='mb-5 text-2xl font-bold tracking-tight text-gray-700' id='articleHeadline'>headline</h5>
        <p className='mb-8 font-normal text-gray-600' id='articleBody'></p>
        <Link to="/myarticles" className='items-center w-fit px-4 py-2 text-lg font-medium text-center text-white rounded-sm hover:bg-violet-500 bg-violet-400 focus:ring-4 focus:outline-none' onClick={localStorage.removeItem('headline')}>My Articles</Link>
    </div>
    </section>

    </>
  )
}
postData();
export default Post