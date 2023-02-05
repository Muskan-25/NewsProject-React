import React from 'react'
import { Link } from "react-router-dom"
import db from '../../firebase';
import { doc,onSnapshot } from "firebase/firestore";
import Swal from 'sweetalert2'
import Header from '../Header';

var obj = [
  { type: "email",inputName:"email",placeholder:"Email" },
  { type: "password",inputName:"pass",placeholder:"Password" },
]
async function loginbtn(e){
  e.preventDefault();
  var email=document.querySelector("#email");
  var pass=document.querySelector("#pass");
  // const docSnap = await getDoc(doc(db, "users", email.value))

  onSnapshot(doc(db, "users", email.value), (doc) => {
    var userdata=doc.data();
    if (email.value === userdata.email && pass.value===userdata.pass) {
      Swal.fire({
        icon: 'success',
        title: 'Login successful',
        showConfirmButton: false,
      })
      window.location.pathname = "/";
      localStorage.setItem("Email", email.value);
    }
  },(error)=>{
    console.log(error);
    // if (email.value !== userdata.email && pass.value !== userdata.pass) {
    //   console.log(userdata.email)
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: 'You have not registered yet.',
    //     footer: '<a href="/signup" style="color :#7A6BB8 ">Create an Account</a>',
    //   })  
    // }
  });
  
}

function Login() {
  return (<>
  <Header login={<Link to="/login" className="hidden xl:w-1/5 lg:w-1/3 xl:h-auto md:w-1/3 login" id="loginbtn"><button className="font-bold bg-white w-full h-full"></button></Link>} signup={<Link to="/signup" className="hidden xl-block lg-block xxl-block md:block  xl:w-1/5 lg:w-1/3 xl:h-auto md:w-1/3 signup" id="signupbtn"><button className="font-bold bg-white w-full h-full">Signup</button></Link>} />
    <section className="login justify-center my-20">
    <div className="xl:w-2/5 lg:w-3/6 md:w-3/6 grid w-full sm:w-3/5 py-14 px-14 mx-auto gap-8 shadow-gray-300 shadow-md" style={{backgroundColor: "#F8F6FF"}}>
        <h1 className="text-3xl font-bold text-gray-900 text-center font-sans mb-3">
          <span className="block text-gray-900 ">Log in</span></h1>
          <form className='grid gap-8'>
          {
            obj.map(value => {
                return <>
                    <input type={value.type} name={value.inputName} id={value.inputName} className="w-full h-14 p-3 text-xl border-2 border-gray-200" placeholder={value.placeholder} required={true}/>
                </>
            })
          }
          <button className="text-white text-xl font-semibold py-4" style={{backgroundColor : "#7A6BB8"}} type="submit" onClick={loginbtn} > Log in </button>
          </form>
          <p className="text-center text-black text-xl font-"><Link to="/signup" style={{color: "#7A6BB8"}}>Create an Account</Link></p>
    </div>
    </section>
    </>
  )
}

export default Login;