import "../styles/layout.css";
import "../styles/catalog.css";
import BookCard from "../components/BookCard";
import Header from "../components/Header";
import Footer from "../components/Footer"

const LibrarianHome = () => {
  const libros = [
    {
      id: 1,
      titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      año: 1967,
    },
    {
      id: 2,
      titulo: "El principito",
      autor: "Antoine de Saint-Exupéry",
      año: 1943,
    },
  ];

  return (
    <main className="main-content">
      <Header /> 
      <h1>Catálogo de libros</h1>
      <section className="catalog">
        {libros.map((libro) => (
          <BookCard key={libro.id} libro={libro} />
        ))}
      </section>
      <Footer />
    </main>
  );
};

export default LibrarianHome;
