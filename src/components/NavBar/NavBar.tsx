import React from 'react';
import {Link} from "react-router-dom";
import "./NavBar.css";


const NavBar = (props: any) => {
    return (
        <div className="NavBar">
            "shit"

            <Link to={"/page0"}>page 0</Link>
            <Link to={"/page1"}>page 1</Link>
        </div>
    );
};


export default NavBar;