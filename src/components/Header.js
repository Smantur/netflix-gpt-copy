import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
    const navigate = useNavigate()
    const user = useSelector((store) => store.user)
    const dispatcher = useDispatch();
    const signout = () => {
        signOut(auth).then(() => {
            dispatcher(removeUser)
           
        }).catch((error) => {
            // console.log("error info ", error)
        });
    }
    useEffect(() => {
     const unsubscribe=   onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatcher(addUser({ uid: uid, email: email, displayName: displayName }))
                navigate("/Browse")

            } else {
                console.log("triggerred !!!")
                dispatcher(removeUser)
                navigate("/")
            }
        });
        return ()=>unsubscribe();
    }, [])

    return (
        <div className="Header ">
            <div className="absolute bg-gradient-to-b from-black z-30 w-screen flex justify-between">
                <img src={LOGO_URL}
                    className="w-36"
                ></img>
                {
                    user && <div >
                        <button className="text-white p-2 m-2 bg-red-400 rounded-md" onClick={signout}>Sign Out</button>
                    </div>}

            </div>

        </div>
    )

}
export default Header;