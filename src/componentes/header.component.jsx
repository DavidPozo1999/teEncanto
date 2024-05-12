import { Link } from "react-router-dom";
import logo from "../IMAGENES/logo.png"
import "../estilos/header.style.css"
import { BiSolidDog } from "react-icons/bi";
import { FaRocket } from "react-icons/fa";

const Header=()=>{
    return(
        <>
            <div className="header-container">
                <div className="header-items-container">
                    <div className="logo-container">
                        <img src={logo} />
                    </div>
                    <div className="header-links-container">
                        <Link to={"/inicio"} className="link logging-link">
                            <div className="link-container">
                                <BiSolidDog />
                                <span>Inicio sesión</span>
                            </div>
                        </Link>
                        <Link to={"/registro"} className="link register-link">
                        <div className="link-container">
                                <FaRocket />
                                <span>Registro</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
