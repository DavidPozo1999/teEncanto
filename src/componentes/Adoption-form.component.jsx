import "../estilos/form.style.css"
import { postForm } from "../API/requests";
import { Link, useNavigate } from "react-router-dom";

const AdoptionForm = ({ isOpen, questions, user, pet }) => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = {
            pet: {
                id: pet.id,
                name: pet.name,
                age: pet.age,
                breed: {
                    id: pet.breed.id,
                    breedName: pet.breed.breedName
                },
                gender: pet.gender,
                size: pet.size,
                description: pet.description,
                imageUrl: pet.imageUrl,
                vaccinated: pet.vaccinated,
                neutered: pet.neutered,
                adoptionStatus: pet.adoptionStatus,
                dateOfArrival: pet.dateOfArrival,
            },
            user: {
                id: user.id,
                username: user.username,
                password: user.password,
                email: user.email,
                fullName: user.fullName,
                phoneNumber: user.phoneNumber,
                address: user.address
            },
            adoptionDate: "2023-05-27",
            approvalStatus: "Pending",
            reasonForRejection: null,
            additionalNotes: "Looking forward to adopting a new friend!"
        };
        postForm(form);
        navigate("/");
    };
    return (
        <>
            <form style={{ display: isOpen ? '' : 'none' }} onSubmit={handleSubmit}>
                {questions.map((question, index) => (
                    <div className="input-group" key={index}>
                        <label htmlFor={`nombre_${index}`}>{question.questionText}</label>
                        <input
                            type="text"
                            id={`nombre_${index}`}
                            name={`nombre_${index}`}
                            className="input-form"
                            placeholder="Escribe aquí..."
                            required
                        />
                    </div>
                ))}
                <input type="submit" value="Enviar Formulario" className="submit-form" />
            </form>
        </>
    );
};

export default AdoptionForm