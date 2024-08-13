import Astrologo from "/astronaut.svg";
import {Link }  from "react-router-dom";
import "./Navbar.css";

function Navbar ({ links }){
    console.log (links);
    const navStyles = {
        backgroundColor: "#387F39" ,
    };



    return (
        <nav className="nav-container" style={navStyles}>
            <img className="nav-logo" src={Astrologo} alt="/astronaut.svg" />
        <div className="links-container">
                {links.map((item) => (
                    <link key={item.id} to={item.href}>
                        {item.text}
                    </link>
                  
                ))}

        </div>
        </nav>
    );
}

export default Navbar;