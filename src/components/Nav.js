import React from "react";


function Nav({songs}) {
    const logo ="./images/logo.png";
    return (
        <nav>
            <ul>
                <li className="brand"><img className="brandimage" src={logo} alt="1"></img>Songify</li>
                {/* <li>Home</li>
                <li>About</li> */}
            </ul>
        </nav>
    );
}

export default Nav;