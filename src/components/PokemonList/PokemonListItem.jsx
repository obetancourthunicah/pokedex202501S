export const PokemonListItem = (
    { name,
    cod,
    img,
    onShowDetail
    }
)=>{
    return (
        <section>
            <img src={img} alt={name} />
            <div>
                <strong>{name}</strong>
                <button onClick={()=>{onShowDetail(cod)}}>Details</button>
            </div>
        </section>
    );
}