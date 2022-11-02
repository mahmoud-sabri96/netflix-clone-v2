import React, { useRef } from 'react';
import { auth } from '../firebase';

import "./SignUpScreen.css"

function SignUpScreen() {

    const emailRef = useRef();
    const passwordRef = useRef();


    const registerHandler = (e) => {
        e.preventDefault();
        // console.log("register");
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            alert(error.message)
        })
    }

    const signInHandler = (e) => {
        e.preventDefault();
        // console.log("signIn")
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            // console.log(authUser)
        }).catch((error) => {
            alert(error.message)
        })
    }

    //### return Jsx code
    return (
        <div className='signUpScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder='Email' type="email" />
                <input ref={passwordRef} placeholder="Password" type="password" />
                <button type='submit' onClick={signInHandler}>Sign In</button>
                <h4>
                    <span className='signupScreen__gray'>New To Netflix? </span>
                    <span className='signuppScreen__link' onClick={registerHandler}> SignUp now!!</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUpScreen