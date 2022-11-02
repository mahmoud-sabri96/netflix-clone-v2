import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Nav.css";

function Nav() {

    const navigate = useNavigate()
    const [showNav, setShowNav] = useState(false);

    const transitionNavBar = () => {
        // console.log("transFun")
        if (window.scrollY > 150) {
            setShowNav(true);
        } else {
            setShowNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);

        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    //##Jsx Code
    return (
        <div className={`nav ${showNav && "nav__black"}`}>
            <div className="nav__contents">
                <img
                    onClick={() => navigate("/")}
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    // src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
                    alt="logo"
                    className="nav__logo"
                />

                <img
                    onClick={() => navigate("/profile")}
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="logo"
                    className="nav__avatar"
                />
            </div>
        </div>
    );
}

export default Nav;
