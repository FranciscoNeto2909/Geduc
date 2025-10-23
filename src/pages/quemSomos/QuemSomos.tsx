import { AiOutlineUser } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { PiClipboardTextBold } from "react-icons/pi";

import professor from "../../assets/professor.png";
import professora from "../../assets/professora.png";
import quad from "../../assets/quadriculado.png";
import Footer from "../../components/footer/Footer";
import "./quemSomos.css";
import { FaChartLine } from "react-icons/fa";

export default function QuemSomos() {
  return (
    <div className="quemsomos">
      <div className="quemsomos-banner">
        <div
          className="quemsomos-banner-img"
          style={{ background: `url(${quad})` }}
        ></div>
        <div className="quemsomos-banner-items">
          <div className="quemsomos-banner-items-texts">
            <h2 className="quemsomos-banner-title">
              A Educação é a Base que Transforma o Mundo
            </h2>
            <p className="quemsomos-banner-desc">
              A melhor forma de transformar o mundo é através da educação.E é
              com esse propósito que nascemos: para impulsionar mudanças reais,
              construindo pontes entre o presente e o futuro dentro das escolas.
            </p>
            <div className="banner-buttons">
              <button className="button banner-button">
                Conheça a plataforma
              </button>
              <button className="button banner-button--inverted">
                Seja parceiro
              </button>
            </div>
          </div>
          <div className="quemsomos-banner-items-image">
            <img
              src={professor}
              alt="professor"
              className="quemsomos-banner-image-img"
            />
          </div>
        </div>
      </div>
      <div className="quemsomos-tecnology">
        <div className="tecnology">
          <div className="tecnology-item">
            <div className="tecnology-item-icons">
              <AiOutlineUser size={24} />
              <hr className="tecnology-item-line" />
              <PiClipboardTextBold size={24} />
              <hr className="tecnology-item-line" />
              <MdManageAccounts size={24} />
            </div>
            <img
              src={professora}
              alt="professora"
              className="tecnology-item-img"
            />
            <div className="tecnology-item-override">
              <div className="item-override">
                <FaChartLine size={24} className="item-override-title-icon" />
                <h3 className="item-override-title">SEMPRE INOVANDO</h3>
                <p className="item-override-desc">
                  Aprendendo, adaptando e crescendo junto com os nossos
                  clientes.
                </p>
                <div className="item-override-elipse"></div>
              </div>
            </div>
          </div>
          <div className="tecnology-item">
            <div className="tecnology-item-top">
              <h4 className="item-top-title">QUEM SOMOS</h4>
            </div>
            <div className="tecnology-item-texts">
              <h2 className="tecnology-item-title">A Tecnologia é o Alicerce da Transformação</h2>
              <p className="tecnology-item-desc">
                A <span className="desc-bold">tecnologia</span> é o alicerce da{" "}
                <span className="desc-bold">transformação</span>, pois amplia o acesso ao{" "}
                <span className="desc-bold">conhecimento</span>, facilita o{" "}
                <span className="desc-bold">aprendizado personalizado e conecta</span>
                alunos e professores a novas <span className="desc-bold">possibilidades</span> de{" "}
                <span className="desc-bold">ensino</span>, <span className="desc-bold">tornando a educação</span> mais
                <span className="desc-bold">inclusiva</span> e <span className="desc-bold">eficaz.</span>
              </p>
              <div className="tecnology-item-bars">
                <span className="tecnology-item-bar"></span>
                <span className="tecnology-item-bar"></span>
              </div>
            </div>
            <div className="tecnology-item-button">
              <span className="tecnology-item-text">Ficou curioso? Saiba mais aqui:</span>
              <button className="button button--inverted">Ver detalhes</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
