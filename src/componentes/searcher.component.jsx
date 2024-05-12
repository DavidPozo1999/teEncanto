import "../estilos/searcher.style.css"
const Searcher=()=>{
    return(
        <>
        <div id='search-box'>
            <form action='/search' id='search-form' method='get' target='_top'>
                <input id='search-text' name='q' type='text'/>
                <button id='search-button' type='submit'><span>Busca!</span></button>
            </form>
        </div>
        </>
    )
}

export default Searcher