import Link from 'next/link';
import { useState } from 'react';
import { FiMenu } from "react-icons/fi";


export default function NavBar() {

    const [isMobile, setIsMobile] = useState("false");

    function mobileNav() {
        setIsMobile(!isMobile)
    }
    return (
        <div className="navbar">
            <p className="navbar_author">Gary Stroup</p>
            <ul className={isMobile? "navbar_list mobile":"navbar_list"}>
                <li className={isMobile? "navbar_link mobile" : "navbar_link"}>
                    <Link href="/about">About</Link>
                </li>
                <li className={isMobile? "navbar_link mobile" : "navbar_link"}>
                    <Link href="/projects">Projects</Link>
                </li>
                <li className={isMobile? "navbar_link mobile" : "navbar_link"}>
                    <Link href="/resume">Resume</Link>
                </li>
            </ul>
            <div className="menuicon" onClick={mobileNav}>
               <FiMenu /> 
            </div>
            
        </div>
    )
}