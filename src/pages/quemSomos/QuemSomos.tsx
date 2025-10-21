import professor from "../../assets/professor.png"
import quad from "../../assets/quadriculado.png"
import "./quemSomos.css";

export default function QuemSomos() {
  return (
    <div className="quemsomos">
      <div className="quemsomos-banner">
        <div className="quemsomos-banner-img" style={{background:`url(${quad})`}}></div>
        <div className="quemsomos-banner-items">
          <div className="quemsomos-banner-items-texts">
            <h2 className="quemsomos-banner-title">A Educação é a Base que Transforma o Mundo</h2>
            <p className="quemsomos-banner-desc">
              A melhor forma de transformar o mundo é através da educação.E é
              com esse propósito que nascemos: para impulsionar mudanças reais,
              construindo pontes entre o presente e o futuro dentro das escolas.
            </p>
            <div className="banner-buttons">
                <button className="button banner-button">Conheça a plataforma</button>
                <button className="button banner-button--inverted">Seja parceiro</button>
            </div>
          </div>
          <div className="quemsomos-banner-items-image">
            <img src={professor} alt="professor" className="quemsomos-banner-image-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
