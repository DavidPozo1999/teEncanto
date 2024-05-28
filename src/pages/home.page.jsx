import React, { useEffect, useState } from "react";
import CardDog from "../componentes/card-dog.component";
import HeaderSearcher from "../componentes/header-searcher.component";
import Header from "../componentes/header.component";
import Pagination from "../componentes/pagination.component";
import Footer from "../componentes/footer.component";
import "../estilos/home-page.style.css";
import { getPets, searchPetByName } from "../API/requests"; // Import the getPets function from the requests file

    const HomePage = () => {
        const [pets, setPets] = useState([]); // State to store the pets data
        const [searchValue, setSearchValue] = useState("");
        useEffect(() => {
            // Fetch the pets data when the component mounts
            const fetchPets = async () => {
                try {
                    console.log("Fetching pets...")
                    const data = await getPets(); // Call the getPets function
                    setPets(data); // Update the pets state with the fetched data
                    console.log(data); // Log the fetched data
                } catch (error) {
                    console.error(error);
                }
            };
            fetchPets();
        }, []);


        useEffect(() => {
    const fetchPets = async () => {
        if (searchValue) {
            try {
                console.log("Fetching pets by name...")
                const data = await searchPetByName(searchValue); // Call the searchPetByName function
                setPets(data); // Update the pets state with the fetched data
                console.log(data); // Log the fetched data
            } catch (error) {
                console.error(error);
            }
        }
    };
    fetchPets();
}, [searchValue]);
        return (
            <>
                <header>
                    <Header />
                    <HeaderSearcher setSearchValue={setSearchValue}/>
                </header>
                <div className="body-container">
                    <div className="cards-container">
                        {pets && pets.map((pet) => (
                            <CardDog key={pet.id} pet={pet} /> // Render a CardDog component for each pet
                        ))}
                    </div>
                    <div>
                        <Pagination />
                    </div>
                </div>
                <footer>
                    <Footer />
                </footer>
            </>
        );
    };

export default HomePage;
