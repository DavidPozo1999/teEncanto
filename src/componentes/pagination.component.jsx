
import "../estilos/pagination.style.css"
const Pagination=()=>{
    return(
        <>
        <div class="pagination">
            <ul>
                <li class="btn prev"><span><i class="fas fa-angle-left"></i> Prev</span></li>
                <li class="first numb"><span>1</span></li>
                <li class="btn next" onclick="createPagination(totalPages, ${page + 1})"><span>Next <i class="fas fa-angle-right"></i></span></li>
            </ul>
        </div>
        </>
    )
}

export default Pagination