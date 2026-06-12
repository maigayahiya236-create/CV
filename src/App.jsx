import { useState } from "react";
import "./App.css";

function App() {
  // Petit compteur pour montrer l'interactivité de React
  const [vues, setVues] = useState(0);

  return (
    <div className="cv">
      {/* En-tête : identité */}
      <header className="cv-header">
        <div className="cv-avatar">AD</div>
        <div className="cv-identite">
          <h1>Aïssata Diarra</h1>
          <p className="cv-titre">Étudiante en Licence Informatique</p>
          <p className="cv-contact">
            Bamako, Mali · aissata.diarra@exemple.com · +223 00 00 00 00
          </p>
        </div>
      </header>

      {/* Profil */}
      <section className="cv-section">
        <h2>Profil</h2>
        <p>
          Passionnée de développement web, je conçois des applications simples,
          utiles et accessibles. Curieuse et rigoureuse, j'aime apprendre de
          nouvelles technologies et mener mes projets jusqu'à la mise en ligne.
        </p>
      </section>

      {/* Compétences */}
      <section className="cv-section">
        <h2>Compétences</h2>
        <ul className="cv-tags">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Git</li>
          <li>GitHub</li>
        </ul>
      </section>

      {/* Formation */}
      <section className="cv-section">
        <h2>Formation</h2>
        <div className="cv-item">
          <div className="cv-item-tete">
            <span className="cv-item-titre">Licence en Informatique</span>
            <span className="cv-item-date">2023 — 2026</span>
          </div>
          <p className="cv-item-lieu">Université Ecossup, Bamako</p>
        </div>
        <div className="cv-item">
          <div className="cv-item-tete">
            <span className="cv-item-titre">Baccalauréat scientifique</span>
            <span className="cv-item-date">2023</span>
          </div>
          <p className="cv-item-lieu">Lycée de Bamako</p>
        </div>
      </section>

      {/* Projets */}
      <section className="cv-section">
        <h2>Projets</h2>
        <div className="cv-item">
          <div className="cv-item-tete">
            <span className="cv-item-titre">Mon CV en ligne</span>
            <span className="cv-item-date">2026</span>
          </div>
          <p className="cv-item-lieu">
            Application React déployée sur Vercel, versionnée avec Git et GitHub.
          </p>
        </div>
      </section>

      {/* Pied de page interactif */}
      <footer className="cv-footer">
        <button onClick={() => setVues(vues + 1)}>
          J'aime ce CV 👍
        </button>
        <span className="cv-vues">{vues} clic(s)</span>
      </footer>
    </div>
  );
}

export default App;
