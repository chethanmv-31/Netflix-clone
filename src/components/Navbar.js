import React, { useEffect,useState } from 'react'
import './Nav.css'


function Navbar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else 
                handleShow(false);   
        });
        return()=>{
            window.removeEventListener("scroll")
        }
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className='nav__logo' src="../assets/netflix-is-now-preferred-tv-viewing-source-for-all-demographic-groups-49982.png" alt="Netflix Logo" />
            {/* <div className="logo"> */}
            <img className='nav__avatar' src="../assets/avatar-contact-person-profile-user-icon-137780.png" alt="Netflix Logo" />

            {/* </div> */}
        </div>
    )
}

export default Navbar