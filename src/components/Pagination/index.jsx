const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => { 
    const totalPages = Math.ceil(totalItems / itemsPerPage); 
    const paddingPages = 4;  
 
    return ( 
        <div className="pagination-container"> 
            {currentPage > 1 && ( 
                <button className="pagination-button" onClick={() => onPageChange(currentPage - 1)}>Anterior</button> 
            )} 
 
            {[...Array(totalPages)].map((_, index) => { 
                if ( 
                    index < paddingPages ||  
                    (index >= currentPage - paddingPages && index <= currentPage + paddingPages) ||  
                    index > totalPages - paddingPages - 1  
                ) { 
                    return ( 
                        <button 
                            className={`pagination-button ${currentPage === index + 1 ? "active-page" : ""}`} 
                            key={index} 
                            onClick={() => onPageChange(index + 1)} 
                            disabled={currentPage === index + 1} 
                        > 
                            {index + 1} 
                        </button> 
                    ); 
                } else if ( 
                    index === paddingPages || 
                    index === totalPages - paddingPages - 1 || 
                    index === currentPage - paddingPages - 1 || 
                    index === currentPage + paddingPages 
                ) { 
                    return <span key={index}>...</span>; 
                } 
                return null; 
            })} 
 
            {currentPage < totalPages && ( 
                <button className="pagination-button" onClick={() => onPageChange(currentPage + 1)}>Siguiente</button> 
            )} 
        </div> 
    ); 
} 
 
export default Pagination;