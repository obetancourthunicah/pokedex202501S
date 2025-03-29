export const NavBar = (
    {isOpen = false}
)=>{
    return (
        <nav className={isOpen ? "open": ""}>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">My Collection</a></li>
                    <li><a href="">About</a></li>
                </ul>
        </nav>
    )
}

export const HamburgerBtn = (
    {
        onClickHandler = ()=>{}
    }
)=>{
    return (
        <button
            className="btnHamburger"
            onClick={onClickHandler}
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}