import { useEffect, useState } from "react";

import "../styles/layout.css";
import "../styles/catalog.css";
import BookCard from "../components/BookCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LibrarianHome = () => {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/libros")
      .then((response) => response.json())
      .then((data) => {
        setLibros(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar libros:", error);
        setLoading(false);
      });
  }, []);

  return (
    <main className="main-content">
      <Header />

      <section className="content">
        <h1>Catálogo de libros</h1>

        {loading ? (
          <p>Cargando libros...</p>
        ) : (
          <section className="catalog">
            {libros.map((libro) => (
              <BookCard key={libro.id} libro={libro} />
            ))}
          </section>
        )}
      </section>

      <Footer />
    </main>
  );
};

export default LibrarianHome;
