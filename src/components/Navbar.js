import React, { useState, useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ isLoggedIn, userData, onLogout }) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const catMenu = useRef(null)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogoClick = () => {
        setIsOpen(false);
        navigate('/');
    };

    const handleRegisterClick = () => {
        setIsOpen(false);
        navigate('/register');
    };

    const handleLoginClick = () => {
        setIsOpen(false);
        navigate('/login');
    };

    const handleLogoutClick = () => {
        setIsOpen(false);
        onLogout();
    };

    const handleFavoritesClick = () => {
        setIsOpen(false);
        navigate('/favorites');
    };

    const closeOpenMenu = (e) =>{
        if(catMenu.current && !catMenu.current?.contains(e.target)){
            setIsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', closeOpenMenu)
        return () => {
            document.removeEventListener('mousedown', closeOpenMenu)
        }
    }, [])

    

    return (
        <div ref={catMenu} >
                    <nav className="nav">
            <img src="../images/airbnb-logo.png" className="nav--logo" alt="Airbnb Logo" onClick={handleLogoClick} />
            <div className="nav--right">
                <div className="nav--user-menu" onClick={toggleMenu}>
                    {isLoggedIn && userData ? (
                        <span className="nav--user-name">{userData.firstName}</span>
                    ) : (
                        <span className="nav--menu-icon">☰</span>
                    )}
                    <span className="nav--user-icon">
                        <img className="user" src="../images/user.png" alt="User Icon" />
                    </span>
                </div>
                {isOpen && (
                    <div className="dropdown-menu">
                        <ul>
                            {isLoggedIn ? (
                                <>
                                    <li onClick={handleFavoritesClick}>Favorites</li>
                                    <li onClick={handleLogoutClick}>Log Out</li>
                                </>
                            ) : (
                                <>
                                    <li onClick={handleRegisterClick}>Sign Up</li>
                                    <li onClick={handleLoginClick}>Log In</li>
                                </>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
        </div>
    );
}
