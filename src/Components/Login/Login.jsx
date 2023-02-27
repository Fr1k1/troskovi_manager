import React from 'react'
import "./Login.scss";
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});


    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

    }, [])

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    }


    const logout = async () => {
        await signOut(auth);
    };


    return (
        <div className="form">
            <div className="title">Dobrodošli</div>


            <div className="input-container ic2">
                <input id="email" className="input" type="email" placeholder=" " onChange={(event) => {
            setLoginEmail(event.target.value);
          }} />
                <div className="cut"></div>
                <label htmlFor="email" className="placeholder">Email</label>
            </div>
            <div className="input-container ic2">
                <input id="password" className="input" type="text" placeholder=" " onChange={(event) => {
            setLoginPassword(event.target.value);
          }} />
                <div className="cut cut-short"></div>
                <label htmlFor="password" className="placeholder">Lozinka</label>
            </div>
            <button type="text" className="submit" onClick={login}>Prijavi se</button>
        </div>


    );
}


export default Login