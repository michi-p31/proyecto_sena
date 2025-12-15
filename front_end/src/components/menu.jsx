import "../styles/menu.css";

const Menu = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo">Biblioteca</h2>

      <nav>
        <ul>
          <i class="bi bi-bookmark-heart-fill"></i><li className="active"> Catálogo</li>
          <li>Registrar libro</li>
          <li>Préstamos</li>
          <li>Usuarios</li>
        </ul>
      </nav>
    </aside>
  );
};

export default menu;
