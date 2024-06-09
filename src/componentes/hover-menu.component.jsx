import React from 'react';
import '../estilos/hover-menu.style.css';
import {auth} from "../firebase/config";
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from "react-router-dom";
const HoverMenu = ({user}) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            window.location.reload();
        }).catch((error) => {
            // An error happened.
            console.error('Error signing out: ', error);
        });
    };
    return (
        <div>
    <nav className='hover-menu'>
        <ul>
            <li>
                <a href="#">{user}</a>
                <ul className='submenu'>    
                    <li><a href="#" onClick={handleLogout}>Cerrar sesión</a></li>
                </ul>
            </li>
        </ul>
    </nav>
</div>
    );
};

export default HoverMenu;