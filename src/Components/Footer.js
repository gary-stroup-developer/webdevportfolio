import Link from 'next/link';
import styles from '@/styles/Home.module.css'
import { AiFillMediumSquare } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai"


export default function Footer() {

    function openRoute(route) {
        window.open(route)
    }

    return (
        <div className="footer">
            <p className={styles.details}>Gary Stroup &#169; 2023</p>
            <div className={styles.flex}>
                <a href="https://medium.com/@stroup.uxuidesign"><AiFillMediumSquare className={styles.icons} /> </a>
                <a href="https://www.linkedin.com/in/gary-stroup-2317a247"><AiFillLinkedin className={styles.icons} /></a>
                <a href="https://www.instagram.com/gary.codez/"><AiOutlineInstagram className={styles.icons} /></a>  
            </div>
            
        </div>
    )
}