import { useState, useEffect, useMemo } from "react";
import { Link, useParams, useLocation } from "react-router-dom"
import db from "../../firebase";
import { collection, getDocs, where } from "firebase/firestore";

function useArticleData() {
  const [article, setArticle] = useState([]);
  const { category } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function getdata() {
      const snapshot = category ? await getDocs(collection(db,`users`),where('category', '==', category)) : await getDocs(collection(db, `users`));
      let users = snapshot.docs.map((doc) => doc.data().email);
      for (let i = 0; i < users.length; i++) {
        var articles = await getDocs(
          collection(db, `users/${users[i]}/articles`)
        );
        // var articledata = articles.docs.map((doc) => {
        //   var aData = doc.data();
        //   return aData;
        // });

        var articledata = articles.docs.map((doc) => {
            var aData = doc.data();
            return aData;
          });
        setArticle((prevArticle) => [...prevArticle, ...articledata]);
      }
    }
    getdata();
  }, [category, location]);

  
  return article;
}




function Maincontainer() {
  const article = useArticleData();
  const { category } = useParams();

  const filterCategories = useMemo(()=>{
     return article.filter((article) => article.category === category);
    
    }, [article, category]);
  return (
    <div className="main-container h-full xl:w-3/5 lg:w-3/5 md:w-3/4 sm:w-full py-12">
      {category ? (
        filterCategories.map((values) => {
          // var wordArr = articleBody.split(" ");
          // var wordShort = wordArr.splice(0, 16).join(" ");
          return (
            <>
              <div className=" pb-5 px-6">
                <p className="font-normal text-gray-400">{" "} {values.category}</p>
                <h1 className="text-2xl font-semibold mb-4 " id="articlehead">
                  {" "}
                  {values.articleHeadline}
                </h1>
                <p className="text-slate-600 mb-1 text-lg  h-14 overflow-hidden" id="articlebody">
                  {values.article}{" "}
                </p>
                <Link to={`/posts/${values.articleHeadline}`}><span className="font-bold cursor-pointer readmore">Read more</span></Link>
  
              </div>
              <hr className="mb-5" />
            </>
          );
        })
      ):(
        article.map((values) => {
          // var wordArr = articleBody.split(" ");
          // var wordShort = wordArr.splice(0, 16).join(" ");
          return (
            <>
              <div className=" pb-5 px-6">
                <p className="font-normal text-gray-400">{" "} {values.category}</p>
                <h1 className="text-2xl font-semibold mb-4 " id="articlehead">
                  {" "}
                  {values.articleHeadline}
                </h1>
                <p className="text-slate-600 mb-1 text-lg  h-14 overflow-hidden" id="articlebody">
                  {values.article}{" "}
                </p>
                <Link to={`/posts/${values.articleHeadline}`}><span className="font-bold cursor-pointer readmore" > Read more</span></Link>
  
              </div>
              <hr className="mb-5" />
            </>
          );
        })
      )}
    </div>
  );
}
// function useReadmorebtn(){
//   var navigate= useNavigate();
// var readmore=document.querySelectorAll(".readmore");
// for (var i = 0;i<readmore.length;i++) {
//   readmore[i].addEventListener("click",function(){
//     var headline = this.previousElementSibling.previousElementSibling.innerHTML;
//     var bodyy = this.previousElementSibling.innerHTML;
//     var category = this.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
//     localStorage.setItem("Headline", headline);
//     localStorage.setItem("Article Body", bodyy);
//     localStorage.setItem("Category", category);
//     navigate('/posts');
//   }) 
// }
// }

export default Maincontainer;
