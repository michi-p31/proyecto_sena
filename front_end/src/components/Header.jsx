import "../styles/header.css";

const Header = () =>{
    return(
        <header className="header">
            <input type="text"
             placeholder="Buscar libro por titulo o autor"
             className="search-input"
            />
        </header>
    );
};

export default Header;
