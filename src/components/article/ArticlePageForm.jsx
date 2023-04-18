import React from 'react'
import { Link , useNavigate } from "react-router-dom"
import db from '../../firebase';
import { setDoc, doc, onSnapshot} from "firebase/firestore";

var email=localStorage.getItem("Email");



function Article() {
    let navigate = useNavigate();

    async function setArticle(e){
        e.preventDefault();
    
        var articleHeadline = document.querySelector('#articleHeadline').value;
        var category = document.getElementById('category').value;
        var article = document.getElementById('article').value;
        
        onSnapshot(doc (db, "users",email),(docs)=>{
            const user = docs.data();
            const useremail =  user.email;
            console.log(useremail.toString());
            var data = { articleHeadline, category,article }
            setDoc(doc(db, `users/${useremail}/articles`, articleHeadline), data);
        }); 
        navigate('/myarticles');
    }
  return (
    <>
    <section className="article justify-center my-12">
    <div className="xl:w-10/12 lg:w-10/12 md:w-10/12 grid w-full sm:w-10/12 py-14 px-14 mx-auto " style={{backgroundColor: "#f5f3fd"}}>
    <h1 className="text-3xl font-bold text-gray-900 font-sans">
          <span className="block text-gray-900 mb-8">Articles</span></h1>
          <form className='grid gap-8'>
            <div className="flex justify-between flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-row">
                <input type="text" name="articleHeadline" id="articleHeadline" className="lg:w-7/12 xl:w-7/12 md:w-7/12 sm:w-7/12 w-full h-14 p-3 text-xl border-2 border-gray-200" placeholder="Add Headline of your Article" required/>
                <select className="form-select  xl:w-2/5 lg:w-2/5 md:w-2/5 sm:w-2/5 w-full p-3 text-xl text-gray-400 border border-solid border-gray-300 rounded transition ease-in-out mt-7 xl:m-0 lg:m-0 md:m-0 sm:m-0" id="category" aria-label="Default select example">
                    <option value="none">Select a Category</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Technology">Technology</option>
                    <option value="Commerce">Commerce</option>
                </select>
            </div>
            <textarea id="article" className="article p-3 text-xl border-2 border-gray-200" cols="10" rows="7" placeholder="Write your article here" required/>
            <button className="text-white text-xl font-semibold py-3" type="submit" style={{backgroundColor : "#7A6BB8"}} onClick={setArticle}> Submit </button>
        </form>
        <p className="text-right text-md"><Link to="/myarticles" style={{color: "#7A6BB8"}}>My Articles</Link></p>
    </div>
    </section>
    </>
  )
}

export default Article