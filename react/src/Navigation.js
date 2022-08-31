import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    const [hbClassName, setHbClassName] = useState(false)
    const [navClassName, setNavClassName] = useState(false)

    const classNameToggle = () => {
        if (!hbClassName) setHbClassName(true);
        else setHbClassName(false);
        
        if (!navClassName) setNavClassName(true);
        else setNavClassName(false);

    }

    return (
    <header className="header">
        <nav className="nav-bar">
            <Link to="/" className="nav-logo">Anya's Nav Bar</Link>
            <ul className={`nav-menu ${navClassName ? 'active' : ''}`}>
                <li className="nav-items">
                    <Link to="/" className="nav-links">Home</Link>
                </li>
                <li className="nav-items">
                    <Link to="/about" className="nav-links">About</Link>
                </li>
                <li className="nav-items">
                    <Link to="/blogs" className="nav-links">Blogs</Link>
                </li>
                <li className="nav-items">
                    <Link to="contact-us" className="nav-links">Contact us</Link>
                </li>
            </ul>
            <div className={`hamburger ${hbClassName ? 'active' : ''}`} onClick={classNameToggle} >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    </header>
    )
}

export default Navigation;