import "../estilos/header-searcher.style.css"
const HeaderSearcher=({setSearchValue})=>{
    return(
        <>
        <div className="header-searcher-container">
           <div className="searcher-container">
           <div id='search-box'>
            <form action='/search' id='search-form' method='get' target='_top'>
                <input id='search-text' name='q' type='text'onChange={(e) => setSearchValue(e.target.value)}/>
                <button id='search-button' type='submit'><span>Busca!</span></button>
            </form>
        </div>
           </div>
        </div>
        </>
    )
}

export default HeaderSearcher