import React from 'react'
import { useState , useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import db from '../../firebase';
import { doc, getDocs,collection, getDoc } from "firebase/firestore";

function PublicPost2() {
    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
            async function getItem(){
          const snapshot = await getDocs(collection(db, `users`));
           let users = snapshot.docs.map((doc) => doc.data().email);
           
           for (let i = 0; i < users.length; i++) {
            var articles = doc(db, `users/${users[i]}/articles/${id}`);
            var querySnapshot = await getDoc(articles);
            if(querySnapshot.exists()){
              setData(querySnapshot.data());
            }
            else {
              console.log('No such document!');
            }
        }
    }
    getItem();
}, [id]);
      
  return (
    <>
    <section className="posts justify-center my-12">
    <div className="xl:w-10/12 lg:w-10/12 md:w-10/12 flex flex-col w-full sm:w-10/12 py-14 px-14 mx-auto" style={{backgroundColor: "#f5f3fd"}}>
        <p className='font-normal text-gray-400 mb-1' id='category'>{data.category}</p>
        <h5 className='mb-5 text-2xl font-bold tracking-tight text-gray-700' id='articleHeadline'>{data.articleHeadline}</h5>
        <pre className='mb-8 font-normal text-gray-600 whitespace-pre-wrap font-inherit' id='articleBody' style={{fontFamily:"inherit"}}>{data.article}</pre>
        <button className='items-center w-fit px-4 py-2 text-lg font-medium text-center text-white rounded-sm hover:bg-violet-500 bg-violet-400 focus:ring-4 focus:outline-none' onClick={()=>{ navigate('/NewsProject-React');}}>Back</button>
    </div>
    </section>

    </>
  )
}

export default PublicPost2