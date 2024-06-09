import React, { useEffect, useState } from "react";
import CardDog from "../componentes/card-dog.component";
import HeaderSearcher from "../componentes/header-searcher.component";
import Header from "../componentes/header.component";
import Pagination from "../componentes/pagination.component";
import Footer from "../componentes/footer.component";
import "../estilos/home-page.style.css";
import { getPets, searchPetByName } from "../API/requests"; 
import { getUser } from "../API/requests";
import {auth} from "../firebase/config";

    const HomePage = () => {
        const [pets, setPets] = useState([]);
        const [userData, setUserData] = useState(null); 
        const [searchValue, setSearchValue] = useState("");
        const [currentPage, setCurrentPage] = useState(1);
        const [petsPerPage] = useState(6);
        useEffect(() => {
            const fetchPets = async () => {
                try {
                    console.log("Fetching pets...")
                    const data = await getPets(); 
                    setPets(data); 
                } catch (error) {
                    console.error(error);
                }
            };
            fetchPets();
        }, []);

        const fetchUserData= async()=>{
            auth.onAuthStateChanged(async (user) => {
                console.log(user)
                if (user) {
                    const data= await getUser(user.uid);
                    console.log(data)
                    setUserData(data);
                } else {
                    console.log('No user is signed in.');
                }
            });
        }

        useEffect(() => {
    const fetchPets = async () => {
        if (searchValue) {
            try {
                console.log("Fetching pets by name...")
                const data = await searchPetByName(searchValue); 
                setPets(data); 
                console.log(data); 
            } catch (error) {
                console.error(error);
            }
        }
    };
    fetchPets();
}, [searchValue]);

    useEffect(() => {
        fetchUserData();
    }, []);
    
 const indexOfLastPet = currentPage * petsPerPage;
 const indexOfFirstPet = indexOfLastPet - petsPerPage;
 const currentPets = pets.slice(indexOfFirstPet, indexOfLastPet);

 const paginate = pageNumber => setCurrentPage(pageNumber);
        return (
            <>
                <header>
                    <Header user={userData} />
                    <HeaderSearcher setSearchValue={setSearchValue}/>
                </header>
                <div className="body-container">
                    <div className="cards-container">
                    {currentPets.map(pet => (
                        <CardDog key={pet.id} pet={pet} />
                    ))}
                    </div>
                    <div>
                    <Pagination
                        petsPerPage={petsPerPage}
                        totalPets={pets.length}
                        paginate={paginate}
                    />
                    </div>
                </div>
                <footer>
                    <Footer />
                </footer>
            </>
        );
    };

export default HomePage;
