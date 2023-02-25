import React from 'react'
import db from '../../firebase';
import { setDoc,doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

var obj = [
    { type: "text",inputName:"username",placeholder:"Username" },
    { type: "email",inputName:"email",placeholder:"Email" },
    { type: "password",inputName:"pass",placeholder:"Password" },
    { type: "password",inputName:"confirmPassword",placeholder:"Confirm Password" }
]

function signupFormSubmission(){
    var username=document.querySelector("#username");
    var email=document.querySelector("#email");
    var pass=document.querySelector("#pass");
    var confirmPass=document.querySelector("#confirmPassword");

    if(pass.value=== confirmPass.value){
        Swal.fire({
            icon: 'success',
            title: 'Congratulations! Your account has been successfully created.',
            confirmButtonText: 'Save',
            timer: 1500
          })
      window.location.pathname = "/login";
        var data = {user : username.value,
            email : email.value,
            pass : pass.value}
        setDoc(doc(db, "users", email.value), data);
    }
    else{
      alert("Passwords do not match !! <br> Please retry.");
    }
}

function Signup() {
  return (
    <>
    <section className="signup justify-center my-20">
    <div className="xl:w-2/5 lg:w-3/6 md:w-3/6 grid w-full sm:w-3/5 py-14 px-14 mx-auto gap-8 shadow-gray-300 shadow-md" style={{backgroundColor: "#F8F6FF"}}>
        <h1 className="text-3xl font-bold text-gray-900 text-center font-sans mb-3">
          <span className="block text-gray-900 ">Signup</span></h1>
          {
            obj.map(value => {
                return <>
                    <input type={value.type} name={value.inputName} id={value.inputName} className="w-full h-12 p-3 text-xl border-2 border-gray-200" placeholder={value.placeholder}/>
                </>
            })
          }
          <button className="text-white text-xl font-semibold py-4" style={{backgroundColor : "#7A6BB8"}} onClick={signupFormSubmission}> Signup </button>
          <p className="text-center text-black text-xl font-">Already a User? <Link to="/login" style={{color: "#7A6BB8"}}>Login Here</Link></p>
    </div>
    </section>
    </>
  )
}

export default Signup