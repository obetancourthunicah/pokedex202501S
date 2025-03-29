import { useState } from "react"
import { useGetPokemons } from "../services/pokemonService"

export const DashBoard = ()=>{
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(20);

    const {pokemonData, isLoading, error} = useGetPokemons(page, limit);
    return (
        <>
        <h1>Dashboard</h1>
        {isLoading && <section>Loading ....</section>}
        {pokemonData.results.length > 0 && (
            <>
                <pre>
                    {JSON.stringify(pokemonData.results, null ,2)}
                </pre>
                <button onClick={()=>setPage(page - 1)}>Previous</button>
                <button onClick={()=>setPage(page + 1)}>Next</button>
            </>
        )}
        </>
    )
}