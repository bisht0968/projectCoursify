import React, { useEffect, useState } from 'react'
import "./Header.scss"
import Contact from './Contact/Contact';

export default function Header({ setGetInTouchBackGroundColor }) {

    const [getContact, setGetContact] = useState(false);
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        if (getContact) {
            setGetInTouchBackGroundColor(true)
            const header = document.getElementById("header")
            header.classList.add("visible")

        } else {
            setGetInTouchBackGroundColor(false)
            const header = document.getElementById("header")
            header.classList.remove("visible")
        }
    }, [getContact, setGetInTouchBackGroundColor])

    const handleContact = () => {
        if (!getContact) {
            setGetContact(true);
        } else {
            setGetContact(false);
        }
    }

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [])

    return (
        <>
            <div id='header' className={`headerSection ${scrolled ? 'stickyHeader' : ""} `}>
                <div className="headerContent ">
                    <div className="navbarLogo">
                        LOGO
                    </div>
                    <div className="navbarItems">
                        <ul>
                            <li>Home</li>
                            <li>Job Offers</li>
                            <li>About</li>
                        </ul>
                    </div>
                    <div className="navbarButton" onClick={handleContact}>
                        Contact Us
                    </div>
                </div>
            </div>
            {getContact && <Contact setGetContact={setGetContact} />}
        </>
    )
}
