import beagle from '../IMAGENES/PERROS/beagle_1.jpg'
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import "../estilos/card-dog.style.css"

const CardDog=()=>{
    return(
        <>
            <div className="card-container">
                <div className="card-img-container">
                    <img src={beagle} />
                </div>
                <div className="card-content-container">
                    <h1>Rocky</h1>
                    <div className='card-content-birthday-container'>
                        <LiaBirthdayCakeSolid  />
                        <p>3 años</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardDog