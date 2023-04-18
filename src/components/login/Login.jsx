import React from 'react'
import { Link,useNavigate } from "react-router-dom"
import db from '../../firebase';
import { doc,onSnapshot } from "firebase/firestore";
import Swal from 'sweetalert2'

var obj = [
  { type: "email",inputName:"email",placeholder:"Email" },
  { type: "password",inputName:"pass",placeholder:"Password" },
]


function Login() {
  const navigate = useNavigate();
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
          timer:1000,
        })
        setTimeout(function() {navigate("../NewsProject-React")},1000)
  
        
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
  return (<>
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