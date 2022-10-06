import { async } from "@firebase/util";
import { useState, useEffect } from "react";
import "./App.css";
import loginSignup from "./page/loginSignup";
import { getAuth } from "firebase/auth";
import { auth } from "./firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export default function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
  }, [])

  const register = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    const user = createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    );
    console.log(user);
  };

  const handleSubmitSignIn = async (e) => {
    e.preventDefault();
    await register(registerEmail, registerPassword);
  };

  const login = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    const user = signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  };
  // const auth = getAuth();
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    await login(loginEmail, loginPassword)
  }


  const logout = async () => {
    await signOut(auth)
  };

  return (
    <div className="App">
      <div>
        <div className="form">
          <div className="tab-content">
            <div id="signup">
              <h1>Sign Up</h1>
              <div action="/" method="post">
                <div className="top-row">
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
                </div>

                <form onSubmit={handleSubmitSignIn}>
                  <div className="field-wrap">
                    <input
                      className="inputs"
                      placeholder="Email Address*"
                      type="email"
                      onChange={(event) => {
                        setRegisterEmail(event.target.value);
                      }}
                    />
                  </div>

                  <div className="field-wrap">
                    <input
                      className="inputs"
                      placeholder="Password*"
                      type="password"
                      onChange={(event) => {
                        setRegisterPassword(event.target.value);
                      }}
                    />
                  </div>

                  <button type="submit" className="button">
                    Create User
                  </button>
                </form>
                <div>{user?.email} <button onClick={logout}>Sign Out</button>
                </div>
              </div>
            </div>
          </div>

          <div id="login">
            <h1>Login</h1>
            <div action="/" method="post">
              <form onSubmit={handleSubmitLogin} >
                <div className="field-wrap">
                  <input
                    placeholder="Email Address*"
                    type="email"
                    required
                    autocomplete="off"
                    onChange={(e) => { setLoginEmail(e.target.value) }}
                  />
                </div>

                <div className="field-wrap">
                  <input
                    placeholder="Password*"
                    type="password"
                    required
                    autocomplete="off"
                    onChange={(e) => { setLoginPassword(e.target.value) }}

                  />
                </div>

                {/* <p className="forgot"><a href="#">Forgot Password?</a></p> */}

                <button type="submit" className="button">Log In</button>
              </form>
              {/* <div>{user?.email} <button onClick={logout}>Sign Out</button> </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
