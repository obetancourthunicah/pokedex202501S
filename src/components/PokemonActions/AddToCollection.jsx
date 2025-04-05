import { useLocalStorage } from "../../services/localStorageServices";
import { Link } from 'react-router';

export const AddToCollection = (
    {
        code,
        name
    }
)=>{
    const [collection, saveCollection] = useLocalStorage("my_collection", []);

    const isPokemonInCollection = collection?.find(
        (pokemon)=>pokemon.code === code
    );
    const addToCollection = ()=>{
        const pokemonToAdd = {
            code: code,
            name: name,
            url: `https://pokeapi.co/api/v2/${code}`
        }
        saveCollection([...collection, pokemonToAdd]);
    }
    const removeFromCollection = ()=>{
        const newCollection = collection.filter(
            (pokemon)=>pokemon.code !== code
        );
        saveCollection(newCollection);
    }

    return (
        <>
            {isPokemonInCollection ?
                <>
                    <Link to="/my-collection">View In My Collection</Link>
                    <button onClick={()=>removeFromCollection()}>
                        Remove from Collection
                    </button>
                </>
                :
                <button onClick={()=>addToCollection()} >
                    Add to Collection
                </button>
            }
        </>
    )
}