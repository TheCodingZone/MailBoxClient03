import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Login/Login.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase/Firebase-Config'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const emailInputRef=useRef();
  const passwordInputRef=useRef();
  const navigate=useNavigate();
  const[loginMessage,setLoginMessge]=useState(null);

  // const authCtx=useContext(AuthContext);
  // const token=useSelector(state=>state.auth.initialToken);
//   const dispatch=useDispatch();

  const loginHandler=(event)=>{
    event.preventDefault();
    const enteredEmail=emailInputRef.current.value;
    const enteredPassword=passwordInputRef.current.value;
    console.log(enteredEmail+" "+enteredPassword);
    signInWithEmailAndPassword(auth,enteredEmail,enteredPassword).then((response)=>{
      console.log(response._tokenResponse.idToken);

      //STORING EMAIL INTO LOCAL STORAGE
      localStorage.setItem('email',enteredEmail.replace(/[@.]/g, ""));
      navigate('/Home');
      // authCtx.login(response._tokenResponse.idToken);
    //   dispatch(authActions.login(response._tokenResponse.idToken));
    //   dispatch(authActions.verify(enteredEmail));

      // dispatch(authActions.login(enteredEmail));
     
     
    }).catch((error)=>{
      setLoginMessge(error.message);
      console.log("error"+" "+error.message);
    })
  }


  setTimeout(() => {
    setLoginMessge(null);
  }, 4000);
  return (
    <div>
    {
      loginMessage &&
      <div class="alert alert-info" role="alert">
      {loginMessage}
    </div>
    }
    <div className="login">
    {/* <h4>LOGIN HERE</h4> */}
    <form className="login-form">
    <label htmlFor="email">Email</label>
        <input type="text" className="input-box" ref={emailInputRef}/>
        <label htmlFor="email">Password</label>
        <input type="password" className="input-box" ref={passwordInputRef}/>
       
        <p><span><input type="checkbox" /></span>I agree to the terms of services</p>
        <button className="loginbutton" onClick={loginHandler}>LOGIN</button>
        <Link to='/ForgetPassword'>Forget Password?</Link>
        {/* <div style={{color:'red'}}>{loginMessage}</div> */}
        <hr />
        <div className="or">OR</div>
   
        <div>Do Not Have Account?<Link to='/Signup'>SIGNUP HERE</Link></div>
        
    </form>
</div>
</div>
  )
}

export default Login
