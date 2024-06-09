import { LiaBirthdayCakeSolid } from "react-icons/lia";
import "../estilos/card-dog.style.css"
import { Link } from 'react-router-dom';

const CardDog=({pet})=>{
    return(
        <>
        <Link to={`/dog/${pet.id}`}>
            <div className="card-container">
                <div className="card-img-container">
                    <img src={pet.imageUrl} alt={pet.name} />
                </div>
                <div className="card-content-container">
                    <h1>{pet.name}</h1>
                    <div className='card-content-birthday-container'>
                        <LiaBirthdayCakeSolid  />
                        <p>{pet.age} años</p>
                    </div>
                </div>
            </div>
        </Link>
        </>
    )
}

export default CardDog