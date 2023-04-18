import React from "react";
import Leftcontainer from "./Leftcontainer";
import Maincontainer from "./Maincontainer";
import Rightcontainer from "./Rightcontainer";
import { useNavigate } from "react-router-dom";

// function logoutfunction(){
//   localStorage.removeItem('Email');
//   localStorage.removeItem('headline');
//   window.location.pathname='/NewsProject-React';
// }
// console.log(email)
function Body() {
  var email = localStorage.getItem("Email");
  var navigate = useNavigate();

  const handleButtonClick = () => {
    if (email !== null) {
      // Navigate to '/article' when email is not null
      navigate("/article");
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <div className="xl:px-12 flex">
      <Leftcontainer
          article={
            <button
              className="text-white text-xl font-semibold py-2 px-7"
              style={{ backgroundColor: "#7A6BB8" }}
              onClick={handleButtonClick} 
            >
              {" "}
              Article{" "}
            </button>
          }
          hideOnMobile={true}
        />
        <Maincontainer />
        <Rightcontainer />
      </div>
    </>
  );
}

export default Body;
