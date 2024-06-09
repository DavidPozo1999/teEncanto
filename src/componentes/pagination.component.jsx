import { useState } from "react";
import "../estilos/pagination.style.css"

const Pagination = ({ petsPerPage, totalPets, paginate }) => {
    const [startPage, setStartPage] = useState(1);
    const totalPages = Math.ceil(totalPets / petsPerPage);
    const pageNumbers = [startPage, startPage + 1, startPage + 2].filter(num => num <= totalPages);

    const handleNext = () => {
        setStartPage(totalPages - 2);
        paginate(totalPages);
    };

    const handlePrev = () => {
        setStartPage(1);
        paginate(1);
    };

    const handlePageClick = (num) => {
        if (num > 1 && num < totalPages) {
            setStartPage(num);
        }
        paginate(num);
    };

    return (
        <div className="pagination">
            <ul>
                <li className="btn prev" onClick={handlePrev} disabled={startPage === 1}><span><i className="fas fa-angle-left"></i> Prev</span></li>
                {pageNumbers.map(num => (
                    <li key={num} className="numb" onClick={() => handlePageClick(num)}>
                        <span>{num}</span>
                    </li>
                ))}
                <li className="btn next" onClick={handleNext} disabled={startPage === totalPages - 2}><span>Next <i className="fas fa-angle-right"></i></span></li>
            </ul>
        </div>
    );
};

export default Pagination;