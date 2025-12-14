const BookCard = ({ libro }) => {
  return (
    <div className="book-card">
      <h3>{libro.titulo}</h3>
      <p><strong>Autor:</strong> {libro.autor}</p>
      <p><strong>Año:</strong> {libro.año}</p>

      <div className="book-actions">
        <button className="edit">Editar</button>
        <button className="delete">Eliminar</button>
      </div>
    </div>
  );
};

export default BookCard;
