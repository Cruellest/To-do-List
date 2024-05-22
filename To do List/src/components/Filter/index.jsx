import React from "react";

function Filter({filter,setFilter,setOrder}) {
    return(
        <div className='filter'>

        <h2>Filtrar:</h2>
        <div className='filter-options'>
            <div>
                <p>
                    Status:
                </p>
                <select value={filter} onChange={(e)=> setFilter(e.target.value)}>
                    <option value='All'>Todos</option>
                    <option value='Completed'>Completados</option>
                    <option value='Uncompleted'>Não Completados</option>
                </select>
            </div>
            <div>
                <p>Ordem Alfabetica:</p>
                <button onClick={()=> setOrder("Asc")}>↑</button>
                <button onClick={()=> setOrder("Desc")}>↓</button>
            </div>
        </div>

        </div>
    )
}
export default Filter;