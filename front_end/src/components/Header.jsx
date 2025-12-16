import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="search-box">
        <i className="bi bi-search"></i>   
        <input
          type="text"
          placeholder="Buscar libro por título o autor"
          className="search-input"
        />
      </div>
    </header>
  );
};

export default Header;
