import "./perfil.css";
import bg from "../../assets/background.png";
import Footer from "../../components/footer/Footer";
import { AiOutlineCamera } from "react-icons/ai";
import { PiCopySimpleFill } from "react-icons/pi";
import DadosPesoais from "./dadosPessoais/DadosPessoais";

export default function Perfil() {
  return (
    <div className="perfil">
      <div className="perfil-bg">
        <img src={bg} alt="" />
      </div>
      <div className="perfil-container">
        <div className="perfil-image">
          <div className="perfil-image-container">
            <label htmlFor="img" className="perfil-image-label">
              <img
                src="https://static.vecteezy.com/system/resources/previews/036/280/651/original/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                alt=""
                className="perfil-image-img"
              />
              <div className="perfil-image-cam">
                <AiOutlineCamera className="perfil-image-cam-icon" size={22} />
              </div>
              <input type="file" id="img" />
            </label>
          </div>
          <div className="perfil-image-data">
            <h4 className="perfil-image-name">Seu Nome</h4>
            <p className="perfil-image-position">Cargo</p>
          </div>
          <div className="perfil-image-buttons">
            <button className="perfil-image-button">Sair</button>
            <div className="perfil-image-link">
              <span>https://app.geduc...</span>
              <button className="perfil-image-link-icon">
                <PiCopySimpleFill size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="perfil-data">
          <div className="perfil-data-header">
            <button className="data-header-button data-header-button--selected">
              Dados Pessoais
            </button>
            <button className="data-header-button">Dados Empresariais</button>
            <button className="data-header-button">Segurança</button>
            <button className="data-header-button">configurações</button>
          </div>
          <div className="perfil-data-form">
            <DadosPesoais />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
