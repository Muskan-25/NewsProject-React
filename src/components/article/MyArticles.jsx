import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

function useArticleData() {
  const [article, setArticle] = useState([]);
  var email = localStorage.getItem("Email");

  useEffect(() => {
    async function getdata() {
      const docSnap = await getDocs(collection(db, `users/${email}/articles`));
      var articledata = docSnap.docs.map((doc) => {
        var aData = doc.data();
        return aData;
      });
      setArticle((prevArticle) => [...prevArticle, ...articledata]);
    }
    getdata();
  }, []);
  return article;
}

function MyArticles() {
  const article = useArticleData();
  return (
    <>
      <section className="myarticles justify-center my-12">
        <div
          className="min-w-11/12 flex flex-wrap justify-start w-full sm:w-11/12 py-14 px-20 mx-auto"
          style={{ backgroundColor: "#f5f3fd",gap:'20px' }}
        >
          {article.map((values) => {
            return (
              <div
                key={values.id}
                className="w-72 p-6 bg-white border border-gray-200 rounded-lg shadow"
              >
                <p className="font-normal text-gray-400"> {values.category}</p>
                <h5
                  className="mb-5 text-2xl font-bold tracking-tight text-gray-700"
                  id="articlehead"
                  style={{ height: "65px", overflow: "hidden" }}
                >
                  {" "}
                  {values.articleHeadline}
                </h5>
                <p
                  className="mb-8 font-normal text-gray-600"
                  id="articlebody"
                  style={{ height: "74px", overflow: "hidden" }}
                >
                  {values.article}{" "}
                </p>
                <Link to={`/post/${values.articleHeadline}`}>
                  <button className="readmore inline-flex items-center px-4 py-2 text-lg font-medium text-center text-white rounded-sm hover:bg-violet-500 bg-violet-400 focus:ring-4 focus:outline-none">
                    {" "}
                    Read more
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default MyArticles;
