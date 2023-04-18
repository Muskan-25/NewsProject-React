import Home from "./components/homepage/Home";
import { Routes, Route,Navigate} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Article from "./components/article/ArticlePageForm";
import MyArticles from "./components/article/MyArticles";
import Post from "./components/article/Post";
import PublicPost2 from "./components/public posts/PublicPost2";


function App() {
var email=localStorage.getItem("Email");

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/NewsProject-React" element={<Home />} />
        <Route path='/:category' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/article" element={email!==null ?<Article /> : <Navigate replace to={"/Login"} />} />
        <Route path="/myarticles" element={email!==null ?<MyArticles /> : <Navigate replace to={"/Login"} />} />
        <Route path="/post/:id" element={email!==null ?<Post /> : <Navigate replace to={"/Login"} />}/>
        <Route path="/posts/:id" element={<PublicPost2 />} />
      </Routes>
    </>
  );
}

export default App;
