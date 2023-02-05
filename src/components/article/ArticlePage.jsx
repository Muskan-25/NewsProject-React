import React from 'react'
import Header from '../Header'
import { Link } from "react-router-dom"
import db from '../../firebase';
import {collection, getDocs} from "firebase/firestore";

function logoutfunction(){
    localStorage.removeItem('Email');
    window.location.pathname='/';
}
var email=localStorage.getItem("Email");

function dataa(articleHeadline,article,category){
  var aCategory = document.createElement('p');
  aCategory.classList.add("font-normal","text-gray-400")
  aCategory.innerHTML=category;

  var articleHead=document.createElement('h5');
  articleHead.classList.add("mb-5","text-2xl","font-bold","tracking-tight","text-gray-700");
  articleHead.innerHTML=articleHeadline;

  var articlebody = document.createElement('p');
  articlebody.classList.add("mb-8","font-normal","text-gray-600");
  articlebody.innerHTML=article;

  var readMoreBtn= document.createElement('button');
  readMoreBtn.classList.add("readmore","inline-flex", "items-center", "px-4", "py-2", "text-lg", "font-medium", "text-center", "text-white", "rounded-sm", "hover:bg-violet-500", "bg-violet-400", "focus:ring-4" ,"focus:outline-none");
  readMoreBtn.innerHTML="Read More";
  
  var div= document.createElement('div');
  div.classList.add("max-w-xs","p-6","bg-white","border","border-gray-200","rounded-lg","shadow")
  
  var posts=document.getElementById('posts');
  posts.append(div);
  div.append(aCategory,articleHead,articlebody,readMoreBtn);
  var readmore=document.querySelectorAll(".readmore");
for (var i = 0;i<readmore.length;i++) {
  readmore[i].addEventListener("click",function(){
    var headline = this.previousElementSibling.previousElementSibling.innerHTML;
    localStorage.setItem("Headline", headline);
    console.log(headline);
    window.location.pathname='/post';
  }) 
} 
}
async function getdata(){
  const docSnap = await getDocs(collection(db,`users/${email}/articles`));
  docSnap.forEach((doc) => {
    var articledata = doc.data();
    var articleHeadline = articledata.articleHeadline;
    var article = articledata.article;
    var category=articledata.category;
  
    var wordArr = article.split(" ");
    var wordShort = wordArr.splice(0, 14).join(" ");
  
    dataa(articleHeadline,wordShort,category)
  });
  }


function ArticlePage() {
  return (
    <>
    <Header login={<Link to="/" className="hidden xl-block lg-block xxl-block md:block  xl:w-1/5 lg:w-1/3 xl:h-auto md:w-1/3 login" id="loginbtn"><button className="font-bold bg-white w-full h-full" onClick={logoutfunction}>Logout</button></Link>} signup={<Link to="/signup" className="hidden  xl:w-1/5 lg:w-1/3 xl:h-auto md:w-1/3 signup" id="signupbtn"><button className="font-bold bg-white w-full h-full">Signup</button></Link>} />

    <section className="myarticles justify-center my-12">
    <div className="max-w-screen-xl flex flex-wrap justify-around w-full sm:w-5/6 py-14 px-20 mx-auto gap-8" id='posts' style={{backgroundColor: "#f5f3fd"}}>
    </div>
    </section>
    </>
  )
}
getdata()

export default ArticlePage