import { useState } from "react";

//firebase
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase_init from "../firebase_init";

//import components
import Login from "../components/Login"
import Console from "../components/Console";

//auth provider
const auth = getAuth(firebase_init);

export default function Admin() {


    //user auth
    const [user, loading, error] = useAuthState(auth);

    //if wrong passwrod or email;
    const [wrong, setWrong] = useState(false)

    //login function
    const loginAuth = (username, password) => {
        signInWithEmailAndPassword(auth, username, password)
        .catch(error => {
            console.log(error)
            setWrong(true)
        })
    }

    //signout
    const logout = () => {
        signOut(auth);
    }

    if (loading) return (
        <>
            <h1>LOADING</h1>
        </>
    )

    if (error) return (
        <>
            <h1>SOMETHING WENT WRONG</h1>
        </>
    )

    if (user) return (
        <>
            <Console />
        </>
    )

    return (
        <>
            <Login authenticate={loginAuth} wrong={wrong}/>
        </>
    )
}