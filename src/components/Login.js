import { useState, useRef } from "react";
import Header from "./Header";
import { isFormInputsValid } from "../utils/form-validation"
const Login = () => {
    const [loginStatus, setloginStatus] = useState(true)
    const email = useRef(null);
    const password = useRef(null);
    const[validationMessage, setvalidationMessage]=useState(null)
    const hadleSignin = () => {
        setloginStatus(!loginStatus)
    }
    const handleSubmit = () => {
    const message = isFormInputsValid(email.current.value, password.current.value);
    setvalidationMessage(message)
    }
    return (
        <div className="login">
            <Header></Header>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_medium.jpg" />
            </div>
            <form onSubmit={($e) => { $e.preventDefault() }} className=" bg-black p-10 absolute w-3/12 mx-auto my-36 left-0 right-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-2xl p-4 m-0">{loginStatus ? 'Sign In' : 'Sign Up'}</h1>
                {!loginStatus && <input type="text " className="p-2 my-4 w-full bg-gray-700" placeholder="Enter Your Full Name" />}
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