import { useState, useRef } from "react";
import Header from "./Header";
import { isFormInputsValid } from "../utils/form-validation"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import {BACKGROUND_IMAGE_URL, AVATAR_URL} from "../utils/constant"

const Login = () => {
    const [loginStatus, setloginStatus] = useState(true)
    const navigate = useNavigate();
    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null)
    const [validationMessage, setvalidationMessage] = useState(null)
    const hadleSignin = () => {
        setloginStatus(!loginStatus)
    }
    const handleSubmit = () => {
        const message = isFormInputsValid(email.current.value, password.current.value);
        setvalidationMessage(message)
        if (message) return;
        if (!loginStatus) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: fullName.current.value, photoURL: AVATAR_URL
                    }).then(() => {
                        navigate("/Browse")
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setvalidationMessage(errorCode + "-" + errorMessage)
                });

        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigate("/Browse")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setvalidationMessage(errorCode + "-" + errorMessage)
                });

        }
    }
    return (
        <div className="login">
            <Header></Header>
            <div className="absolute">
                <img src={BACKGROUND_IMAGE_URL}/>
            </div>
            <form onSubmit={($e) => { $e.preventDefault() }} className=" bg-black p-10 absolute w-3/12 mx-auto my-36 left-0 right-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-2xl p-4 m-0">{loginStatus ? 'Sign In' : 'Sign Up'}</h1>
                {!loginStatus && <input type="text " className="p-2 my-4 w-full bg-gray-700" placeholder="Enter Your Full Name" ref={fullName} />}
                <input type="text " className="p-2 my-4 w-full bg-gray-700" placeholder="Enter Your Email" ref={email} />
                <input type="text" className="p-2 my-4 w-full  bg-gray-700" placeholder="Enter Your Password" ref={password} />
                <p className="font-medium text-red-500">{validationMessage}</p>
                <button onClick={handleSubmit} className="bg-red-600 w-full py-2 my-2 rounded-lg">{loginStatus ? "Sign In" : "Sign Up"}</button>
                <p className="p-4" onClick={(hadleSignin)} > {loginStatus ? "New to Netflix ? Sign up Now" : "Already a User"} </p>
            </form>
        </div>
    )
}
export default Login;