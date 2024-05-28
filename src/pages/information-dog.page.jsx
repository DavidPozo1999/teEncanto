import Header from "../componentes/header.component"
import Footer from "../componentes/footer.component"
import {auth} from "../firebase/config";
import "../estilos/dog-page.style.css"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { getPet, getQuestions } from "../API/requests";
import AdoptionForm from "../componentes/Adoption-form.component";
import { getUser } from "../API/requests";
const DogPage=()=>{
    const [showForm, setShowForm]=useState(false);
    const { id } = useParams();
    const [pet, setPet] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [userData, setUserData] = useState(null);

    const fetchUserData= async()=>{
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const data= await getUser(user.uid);
                setUserData(data);
            } else {
                console.log('No user is signed in.');
            }
        });
    }

    useEffect(() => {
        const fetchPet = async () => {  
            try {
                const data = await getPet(id);
                setPet(data);
            } catch (error) {
                console.error(error);
            }
        };
    
        fetchPet();
    }, [id]);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const questionsData = await getQuestions();
                setQuestions(questionsData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchQuestions();
    }, []);

    useEffect(() => {
        fetchUserData();
      }, []);
    
    return(
        <>
            <header>
                <Header></Header>
            </header>
            <body>
                {pet &&
                <div className="body-container">
                    <div className="dog-info-container">
                    <div className="dog-info-img-container">
                        <img src={pet.imageUrl} alt={pet.name}/>
                    </div>
                    <div className="dog-info-about-container">
                        <h2>Sobre {pet.name}</h2>
                        <p>{pet.description}</p>
                    </div>
                    <div className="breeder-dog-info">
                        <h5>Ficha técnica</h5>
                        <div className="breeder-info-grid">
                            <div className="breeder-info-item">
                                <h4>Genero:</h4>
                                <span>{pet.gender}</span>
                            </div>
                            <div className="breeder-info-item">
                                <h4>Edad:</h4>
                                <span>{pet.age} años</span>
                            </div>
                            <div className="breeder-info-item">
                                <h4>Raza:</h4>
                                <span>{pet.breed.breedName}</span>
                            </div>
                            <div className="breeder-info-item">
                                <h4>Tamaño:</h4>
                                <span>{pet.size}</span>
                            </div>
                            <div className="breeder-info-item">
                                <h4>Estado de adopcion:</h4>
                                <span>{pet.adoptionStatus}</span>
                            </div>
                            <div className="breeder-info-item">
                                <h4>Vacunado:</h4>
                                <span>{pet.vaccinated ? 'Si' : 'No'}</span>
                            </div>
                            <div className="breeder-info-item">
                                <h4>Esterilizado:</h4>
                                <span>{pet.neutered ? 'Si' : 'No'}</span>
                            </div>
                        </div>
                    </div>
                        <div className="adopt-button-container">
                            <button className="adopt-button" onClick={()=>setShowForm(true)}>Rellenar formulario!</button>
                        </div>
                        {questions && <AdoptionForm isOpen={showForm} questions={questions} user={userData} pet={pet} />}
                    </div>
                </div>
}
            </body>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    )
}

export default DogPage