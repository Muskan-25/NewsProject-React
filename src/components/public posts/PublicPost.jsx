import React from 'react'
import { Link } from "react-router-dom"
import db from '../../firebase';
import { doc, getDocs,collection } from "firebase/firestore";

function logoutfunction(){
    localStorage.removeItem('Email');
    window.location.pathname='/NewsProject-React';
}

var articleCategory = localStorage.getItem('Category');
var articleHeadline = localStorage.getItem('Headline');
var articleBody = localStorage.getItem('Article Body');
var email = localStorage.getItem('Email');
// async function getdata() {
//     const snapshot = await getDocs(collection(db, `users`));
//     let users = snapshot.docs.map((doc) => doc.data().email);
//     for (let i = 0; i < users.length; i++) {
//       var articles = await getDocs(doc(db, `users/${users[i]}/articles/${articleHeadline}`));
//       // var articledata = articles.docs.map((doc) => {
//       //   var aData = doc.data();
//       //   return aData;
//       // });

//       articles.docs.map((doc) => {
//           var articledata = doc.data();
//           var category = document.getElementById('category');
//         var articleBody = document.getElementById('articleBody');
//         var articleHead = document.getElementById('articleHeadline');
//         console.log(articleBody)
//         category.innerHTML=articledata.category;
//         articleBody.innerHTML=articledata.article;
//         articleHead.innerHTML=articledata.articleHeadline;
//           return articledata;
//         });
     
//     }
//   }
//   getdata();

function PublicPost() {
  return (
    <>
    <section className="posts justify-center my-12">
    <div className="xl:w-10/12 lg:w-10/12 md:w-10/12 flex flex-col w-full sm:w-10/12 py-14 px-14 mx-auto" style={{backgroundColor: "#f5f3fd"}}>
        <p className='font-normal text-gray-400 mb-1' id='category'>{articleCategory}</p>
        <h5 className='mb-5 text-2xl font-bold tracking-tight text-gray-700' id='articleHeadline'>{articleHeadline}</h5>
        <pre className='mb-8 font-normal text-gray-600 whitespace-pre-wrap font-inherit' id='articleBody' style={{fontFamily:"inherit"}}>{articleBody}</pre>
        <Link to="/NewsProject-React" className='items-center w-fit px-4 py-2 text-lg font-medium text-center text-white rounded-sm hover:bg-violet-500 bg-violet-400 focus:ring-4 focus:outline-none' onClick={localStorage.removeItem('headline')}>Back</Link>
    </div>
    </section>

    </>
  )
}

export default PublicPost