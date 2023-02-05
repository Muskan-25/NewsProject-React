import Home from "./components/homepage/Home";
import { Routes, Route,Navigate} from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Article from "./components/article/ArticlePageForm";
import ArticlePage from "./components/article/ArticlePage";
import Post from "./components/article/Post";

var email=localStorage.getItem("Email");

function App() {
  return (
    <>
      <Routes>
        <Route path="/NewsProject-React" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/article" element={email!==null ?<Article /> : <Navigate replace to={"/NewsProject-React"} />} />
        <Route path="/myarticles" element={email!==null ?<ArticlePage /> : <Navigate replace to={"/NewsProject-React"} />} />
        <Route path="/post" element={email!==null ?<Post /> : <Navigate replace to={"/NewsProject-React"} />}/>
      </Routes>
    </>
  );
}

export default App;
