import Home from "./components/homepage/Home";
import { Routes, Route,Navigate} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Article from "./components/article/ArticlePageForm";
import ArticlePage from "./components/article/ArticlePage";
import Post from "./components/article/Post";
import PublicPost from "./components/public posts/PublicPost";

var email=localStorage.getItem("Email");

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/NewsProject-React" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/article" element={email!==null ?<Article /> : <Navigate replace to={"/Login"} />} />
        <Route path="/myarticles" element={email!==null ?<ArticlePage /> : <Navigate replace to={"/Login"} />} />
        <Route path="/post" element={email!==null ?<Post /> : <Navigate replace to={"/Login"} />}/>
        <Route path="/posts" element={<PublicPost />} />
      </Routes>
    </>
  );
}

export default App;
