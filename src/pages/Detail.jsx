import { useParams } from "react-router"
import { useGetPokemon } from "../services/pokemonService";
export const Detail = ()=>{
    const { pokecod } = useParams();
    const {pokemonData, isLoading, error} = useGetPokemon(pokecod);
    return (
        <>
            <h1>Showing Detail for: {pokecod} </h1>
            {isLoading && <div>Loading ....</div>}
            {error && <div>Error al Cargar el Pokemon</div>}
            {!isLoading && pokemonData && (
                <pre>
                    {JSON.stringify(pokemonData, null, 2)}
                </pre>
            )}
        </>
    )
}