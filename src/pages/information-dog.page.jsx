import Header from "../componentes/header.component"
import Footer from "../componentes/footer.component"
import beagle from '../IMAGENES/PERROS/beagle_1.jpg'
import "../estilos/dog-page.style.css"
import Modal from "../componentes/modal.component"
import { useState } from "react"
import AdoptionForm from "../componentes/Adoption-form.component"
const DogPage=()=>{
    const [showForm, setShowForm]=useState(false);

    return(
        <>
            <header>
                <Header></Header>
            </header>
            <body>
                <div className="body-container">
                    <div className="dog-info-container">
                        <div className="dog-info-img-container">
                            <img src={beagle}/>
                        </div>
                        <div className="dog-info-about-container">
                            <h2>Sobre Rocky</h2>
                            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                        </div>
                        <div class="breeder-dog-info">
                            <h5>Dog Information</h5>
                            <div class="breeder-info-grid">
                                <div class="breeder-info-item">
                                    <h4>Gender:</h4>
                                    <span>Male</span>
                                </div>
                                <div class="breeder-info-item">
                                    <h4>Age:</h4>
                                    <span>1 year</span>
                                </div>
                                <div class="breeder-info-item">
                                    <h4>Color:</h4>
                                    <span>White</span>
                                </div>
                                <div class="breeder-info-item">
                                    <h4>Pet ID:</h4>
                                    <span>09481</span>
                                </div>
                                <div class="breeder-info-item">
                                    <h4>Size:</h4>
                                    <span>Med. 26-60 lbs</span>
                                </div>
                                <div class="breeder-info-item">
                                    <h4>Gender:</h4>
                                    <span>Male</span>
                                </div>
                                <div class="breeder-info-item">
                                    <h4>City:</h4>
                                    <span>New York</span>
                                </div>
                                <div class="breeder-info-item">
                                    <h4>Breed:</h4>
                                    <span>Husky</span>
                                </div>
                            </div>
                        </div>
                        <div className="adopt-button-container">
                            <button className="adopt-button" onClick={()=>setShowForm(true)}>Rellenar formulario!</button>
                        </div>
                        <AdoptionForm isOpen={showForm} />
                    </div>
                </div>
            </body>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    )
}

export default DogPage