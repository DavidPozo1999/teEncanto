import "../estilos/searcher.style.css"
const Searcher=()=>{
    return(
        <>
        <div id='search-box'>
                <input id='search-text'/>
                <button id='search-button' type='submit'><span>Busca!</span></button>
        </div>
        </>
    )
}

export default Searcher