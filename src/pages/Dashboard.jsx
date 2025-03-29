import { useState } from "react"
import { useGetPokemons } from "../services/pokemonService"
import { PokemonList } from "../components/PokemonList/PokemonList";

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
                <PokemonList
                    pokemons={pokemonData.results}
                />
                <button onClick={()=>setPage(page - 1)}>Previous</button>
                <button onClick={()=>setPage(page + 1)}>Next</button>
            </>
        )}
        </>
    )
}