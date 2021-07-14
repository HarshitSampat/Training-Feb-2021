// import { React, useState ,Component,FormGroup,FormLabel,FormControl,Button} from "react";
// import ReactDom from "react-dom";
import GoogleLogin from "react-google-login";
import axios from "axios";
import LoginModal from "react-login-modal"




import React, { Component,useState } from "react";
import { render } from "react-dom";
// import Hello from "./Hello";
// import "./style.css";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
// import "./Login.css";
export default function Login(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  function validateFormFields() {
    return username.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="Login">
      <h1> Welcome to Housing.com  </h1>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="Username" bsSize="large">
          <FormLabel>username </FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button
          block
          bsSize="large"
          disabled={!validateFormFields()}
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
render(<Login />, document.getElementById("root"));





// class Example extends Component{
//   handleSignup = (username,email,password) =>{};
//   handlelogin = (username,password) =>{}

//   render(){
//     return(
//       <LoginModal
//       handleSignUp = {this.handleSignup}
//       handlelogin = {this.handlelogin}
//       />
        
//     )
//   }
// }




// function RegistrationForm(props) {
//   return (
//     <div className="card col-12 col-lg-4 login-card mt-2 hv-center" style={ {
//         margin:  " 0 auto",
//         float: "none",
//         marginBottom: "10px" 
// }}>
//       <form>
//         <div className="form-group text-left">
//           <label htmlFor="exampleInputEmail1">Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             aria-describedby="emailHelp"
//             placeholder="Enter email"
//           />
//           <small id="emailHelp" className="form-text text-muted">
//             We'll never share your email with anyone else.
//           </small>
//         </div>
//         <div className="form-group text-left">
//           <label htmlFor="exampleInputPassword1">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             placeholder="Password"
//           />
//         </div>
//         <div className="form-group text-left">
//           <label htmlFor="exampleInputPassword1">Confirm Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="confirmPassword"
//             placeholder="Confirm Password"
//           />
//         </div>
//         <button type="submit" className="btn btn-primary btn-Center ">
//           Register
//         </button>.
//       </form>
//     </div>
//   );
// }



// function Login() {
//   //Set email and Password
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const responseSuccessGoogle = (response) => {
//     console.log(response);
//     console.log("Login SuccessFully");

//     axios({
//       method: "Post",
//       url: "http://localhost:3001/api/user/googlelogin",
//       data: { tokenId: response.tokenId },
//     }).then((response) => {
//       console.log(response);
//     });
//   };
//   const responseErrorGoogle = (response) => {
//     console.log("Google Login Success", response);
//   };

//   return (
//     <>
//       <form class="signin-inner">
//         <div class="row">
//           <div class="col-12">
//             <label class="single-input-inner style-bg-border">
//               <input type="text" placeholder="Name" />
//             </label>
//           </div>
//           <div class="col-12">
//             <label class="single-input-inner style-bg-border">
//               <input type="text" placeholder="Email" />
//             </label>
//           </div>
//           <div class="col-12">
//             <label class="single-input-inner style-bg-border">
//               <input type="text" placeholder="Password" />
//             </label>
//           </div>
//           <div class="col-12 mb-4">
//             <button class="btn btn-base w-100">Sign In</button>
//           </div>
//           <div class="col-12">
//             <a href="#">Forgottem Your Password</a>
//             <a href="/signUp">
//               <strong>Signup</strong>
//             </a>
//           </div>
//         </div>
//       </form>

//       <div className="text-center text-white bg-warning">
//         <h1 className="text-center"> Login through Google</h1>

//         <GoogleLogin
//           clientId="453908982436-la0ufvl0tp76uictsrcclobevjsmeth7.apps.googleusercontent.com"
//           buttonText="Login with google"
//           onSuccess={responseSuccessGoogle}
//           onFailure={responseErrorGoogle}
//           cookiePolicy={"single_host_origin"}
//         />
//       </div>
//     </>
//   );
// }

