import { useState } from "react";
import Header from "./Header";
const Login = () => {
    const [loginStatus, setloginStatus] = useState(true)
    const hadleSignin = () => {
        setloginStatus(!loginStatus)
    }
    return (
        <div className="login">
            <Header></Header>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_medium.jpg" />
            </div>
            <form className=" bg-black p-10 absolute w-3/12 mx-auto my-36 left-0 right-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-2xl p-4 m-0">{loginStatus ? 'Sign In': 'Sign Up'}</h1>
                {!loginStatus && <input type="text " className="p-2 my-4 w-full bg-gray-700" placeholder="Enter Your Full Name" />}
                <input type="text " className="p-2 my-4 w-full bg-gray-700" placeholder="Enter Your Email" />
                <input type="text" className="p-2 my-4 w-full  bg-gray-700" placeholder="Enter Your Password" />
                <button className="bg-red-600 w-full py-2 my-2 rounded-lg">{loginStatus ? "Sign In" : "Sign Up"}</button>
                <p className="p-4" onClick={(hadleSignin)} > {loginStatus ? "New to Netflix ? Sign up Now" : "Already a User"} </p>
            </form>
        </div>
    )
}
export default Login;