import "../estilos/footer.style.css"
import logo from "../IMAGENES/logo-sinfondo.png"
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
const Footer=()=>{
    return(
    <>        
        <div class="container">
            <div class="row">
                  <div class="col" id="company">
                      <img src={logo} alt="" class="logo" />
                      <p>
                        We are specialized in designings, make your business a brand.
                        Try our premium services.
                      </p>
                      <div class="social">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                      </div>
                  </div>


                  <div class="col" id="services">
                     <h3>Servicios</h3>
                     <div class="links">
                        <a href="#">Perros</a>
                        <a href="#">Adopciones</a>
                        <a href="#">Protectoras</a>
                        <a href="#">Apadrinar</a>
                     </div>
                  </div>

                  <div class="col" id="useful-links">
                     <h3>Links</h3>
                     <div class="links">
                        <a href="#">Sobre nosotros</a>
                        <a href="#">Servicios</a>
                        <a href="#">Nuestras políticas</a>
                        <a href="#">Ayuda</a>
                     </div>
                  </div>

                  <div class="col" id="contact">
                      <h3>Contact</h3>
                      <div class="contact-details">
                         <IoLocation />
                         <p>FF-42, Procube Avenue, <br /> NY, USA</p>
                      </div>
                      <div class="contact-details">
                         <FaPhoneAlt />
                         <p>+34 695955456</p>
                      </div>
                  </div>
            </div>

            <div class="row">
                  <div class="form">
                    <form action="">
                        <input type="text" placeholder="Email here..." />
                        <button><i class="fa fa-paper-plane"></i></button>
                    </form>
                  </div>
            </div>
        </div>
    </>
    )
}

export default Footer