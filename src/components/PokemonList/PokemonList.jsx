import { getPokemonImg } from "../../services/pokemonService";
import { PokemonListItem } from "./PokemonListItem";

export const PokemonList = (
    { pokemons }
) => {
    return (<section className="pokemonHolder">
        {pokemons.map((pokemon) => {
            const [cod, img] = getPokemonImg(pokemon.url)
            return (
                <PokemonListItem
                    key={cod}
                    name={pokemon.name}
                    cod={cod}
                    img={img}
                />
            )
        })
        }
    </section>
    )
}