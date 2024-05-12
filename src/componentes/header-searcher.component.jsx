import "../estilos/header-searcher.style.css"
import Searcher from "./searcher.component"
const HeaderSearcher=()=>{
    return(
        <>
        <div className="header-searcher-container">
           <div className="searcher-container">
            <Searcher />
           </div>
        </div>
        </>
    )
}

export default HeaderSearcher