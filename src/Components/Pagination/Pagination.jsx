import "./Pagination.css";

function Pagination({totalProducts,productsPerPage,currentPage,setCurrentPage}){
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    const pages = [];

    for(let i=1; i<= totalPages; i++){
        pages.push(i);
    }

    return(
        <div className="pagination">
            <button 
               className = "nav-btn"
               disabled = {currentPage === 1}
               onClick = {()=>setCurrentPage(currentPage-1)}>
                Prev
            </button>

        {/* Page numbers */}

        {pages.map((page) => (
            <button key={page}
                    className={currentPage === page ? "page-btn active-page" : "page-btn"}
                    onClick={() => setCurrentPage(page)}>
                        {page}
            </button>
        ))}

        {/* Next Button */}

        <button className="nav-btn"
                disabled = {currentPage === totalPages}
                onClick={()=> setCurrentPage(currentPage+1)}>
                    Next
        </button>     
    </div>
)
}
export default Pagination;