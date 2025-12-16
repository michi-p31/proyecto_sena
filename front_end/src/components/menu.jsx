import "../styles/menu.css";

const Menu = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo">Gestion de Bibloteca<i className="bi bi-building"></i></h2>
      <nav>
        <ul>
          <li className="active"> <i class="bi bi-book"></i> Catálogo</li>
          <li> <i class="bi bi-bookmark-plus"></i> Registrar libro</li>
          <li> <i class="bi bi-bookmark-star"></i> Préstamos</li>
          <li> <i class="bi bi-people"></i> Usuarios</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Menu;
