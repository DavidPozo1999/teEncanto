import CardDog from "../componentes/card-dog.component";
import HeaderSearcher from "../componentes/header-searcher.component";
import Header from "../componentes/header.component";
import Pagination from "../componentes/pagination.component";
import Footer from "../componentes/footer.component";
import "../estilos/home-page.style.css"
const HomePage=()=>{
    return (
        <>
            <header>
                <Header />
                <HeaderSearcher />
            </header>
            <div className="body-container">
                <div className="cards-container">
                    <CardDog />
                    <CardDog />
                    <CardDog />
                    <CardDog />
                    <CardDog />
                </div>
                <div>
                    <Pagination />
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default HomePage;
