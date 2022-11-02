import React, { useState } from 'react';
import "./LoginScreen.css"
import SignUpScreen from './SignUpScreen';

function LoginScreen() {

    const [signIn, setSignIn] = useState(false);


    //### return Jsx code
    return (
        <div className='loginScreen'>
            <div className='LoginScreen__background'>
                <img className='loginScreen__logo' src={"https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"} alt="" />
                <button
                    onClick={() => setSignIn(true)}
                    className='loginScreen__button'
                >
                    Sign In
                </button>
            </div>
            <div className="loginScreen__body">
                {signIn ? <SignUpScreen /> : (
                    <>
                        <h1>Unlimted films ,TV programmes and more.</h1>
                        <h2>Watch anywhere. Cancel at any time</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                        <div className='loginScreen__input'>
                            <form>
                                <input type="text" placeholder="Email Address" />
                                <button
                                    onClick={() => setSignIn(true)}
                                    className='loginScreen__getStarted'
                                >
                                    Get Started
                                </button>
                            </form>
                        </div>
                    </>
                )}
            </div>





        </div>
    )
}

export default LoginScreen;