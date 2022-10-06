import { async } from "@firebase/util";
import { useState } from "react";
import "./App.css";
import loginSignup from "./page/loginSignup";
import { getAuth } from "firebase/auth";
import { auth } from "./firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const user = createUserWithEmailAndPassword(
    auth,
    registerEmail,
    registerPassword)
  console.log(user)

  const register = async () => {
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  console.log('register', register())


  // const login = async () => { };
  // const auth = getAuth();
  // signInWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in 
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   });

  // const logout = async () => { };

  return (
    <div className="App">
      <div>
        <div className="form">
          <div className="tab-content">
            <div id="signup">
              <h1>Sign Up</h1>
              <div action="/" method="post">
                {/* <div className="top-row">
                  <div className="field-wrap">
                    <input
                      placeholder="First Name*"
                      type="email"
                      required
                      autocomplete="off"
                    />
                  </div>

                  <div className="field-wrap">
                    <input
                      placeholder="Last Name*"
                      type="email"
                      required
                      autocomplete="off"
                    />
                  </div>
                </div> */}

                <div className="field-wrap">
                  <input
                    className="inputs"
                    placeholder="Email Address*"
                    type="email"
                    onChange={(event) => { setRegisterEmail(event.target.value) }}
                  />
                </div>

                <div className="field-wrap">
                  <input
                    className="inputs"
                    placeholder="Password*"
                    type="password"
                    onChange={(event) => { setRegisterPassword(event.target.value) }}
                  />
                </div>

                <button type="submit" className="button" >
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* <div id="login">
            <h1>Login</h1>
            <div action="/" method="post">
              <div className="field-wrap">
                <input
                  placeholder="Email Address*"
                  type="email"
                  required
                  autocomplete="off"
                />
              </div>

              <div className="field-wrap">
                <input
                  placeholder="Password*"
                  type="email"
                  required
                  autocomplete="off"
                />
              </div>

              <p className="forgot"><a href="#">Forgot Password?</a></p>

              <button className="button button-block">Log In</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
