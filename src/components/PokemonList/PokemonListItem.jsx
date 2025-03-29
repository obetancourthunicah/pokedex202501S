export const PokemonListItem = (
    { name,
    cod,
    img
    }
)=>{
    return (
        <section>
            <img src={img} alt={name} />
            <div>
                <strong>{name}</strong>
                <button>Details</button>
            </div>
        </section>
    );
}