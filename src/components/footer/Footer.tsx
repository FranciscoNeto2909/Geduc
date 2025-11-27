import "./footer.css";
import logo from "../../assets/logo.png";
import { social } from "../../variables";
import { Link, useNavigate } from "react-router-dom";
import { PiChalkboardTeacherLight, PiStudentLight } from "react-icons/pi";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Footer() {
  const navigate = useNavigate();

  function handleRegister() {
    navigate("/cadastro");
  }
  return (
    <div className="footer">
      <div className="footer-header">
        <div className="footer-header-logo-containter">
          <div className="footer-header-logo">
            <img className="footer-header-logo-img" src={logo} alt="logo" />
            <h3 className="footer-header-logo-title">Geduc</h3>
          </div>
          <div className="footer-header-logo-social">
            {social.map((item, i) => (
              <a
                href={item.link}
                target="_blank"
                className="social-item"
                key={i}
              >
                <item.icon className="social-item-icon" size={22} />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-line" />
      </div>
      <div className="footer-body">
        <div className="footer-body-container">
          <div className="footer-body-address">
            <h3 className="footer-body-title">Endereço</h3>
            <div className="footer-body-addresses">
              <Link
              target="_blank"
                to="https://maps.app.goo.gl/eb1JhT3bZSvBdA8h9"
                className="footer-body-text"
              >
                Rua Monte Castelo, 02, Jardim São Luís, <br />
                <span>Imperatriz - MA</span>
              </Link>
              <Link
              target="_blank"
                to="https://maps.app.goo.gl/uNcwA8Gaw2BBubMv8"
                className="footer-body-text"
              >
                Av. Desembargador Moreira 2020, Trade Center, sala 208 - <br />
                <span>Aldeota, Fortaleza, Ceará</span>
              </Link>
            </div>
          </div>
          <div className="footer-body-contacts">
            <div className="footer-body-contacts-email">
              <h3 className="footer-body-title">Email</h3>
              <p className="footer-body-text">suporte@genesistech.com.br</p>
              <p className="footer-body-text">contato@genesistech.com.br</p>
              <p className="footer-body-text">comercial@genesistech.com.br</p>
            </div>
            <div className="footer-body-contacts-phone">
              <h3 className="footer-body-title">Telefone</h3>
              <Link
                to="https://wa.me/5599984538839"
                target="_blank"
                className="footer-body-phone"
              >
                (99) 98453-8839
              </Link>
            </div>
          </div>
          <div className="footer-body-app">
            <div className="">
              <h3 className="footer-body-title">Baixar Aplicativo</h3>
              <div className="footer-body-links">
                <Link
                  to="https://play.google.com/store/apps/details?id=br.com.geduc.professor"
                  target="_blank"
                  className="footer-body-link"
                >
                  <PiChalkboardTeacherLight size={30} />
                  <p className="footer-body-link-text">App do Professor</p>
                </Link>
                <Link
                  to="https://play.google.com/store/apps/details?id=br.com.geduc.geducclass.app&pli=1"
                  target="_blank"
                  className="footer-body-link"
                >
                  <PiStudentLight size={30} />
                  <p className="footer-body-link-text">App do Aluno</p>
                </Link>
              </div>
            </div>
            <div className="">
              <h3 className="footer-body-title">Cadastra-se em nosso Site!</h3>
              <div className="footer-body-register">
                <form action="" className="footer-body-register">
                  <div className="">
                    <label htmlFor=""></label>
                    <input
                      type="text"
                      placeholder="E-mail*"
                      className="register-input form-input-small"
                    />
                  </div>
                  <button
                    onClick={handleRegister}
                    className="button footer-body-button"
                  >
                    Cadastre-se
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-line" />
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-item">
          <p>©Geduc - 2018</p>
        </div>
        <div className="footer-bottom-item">
          <p>Contato</p>
          <Link to="/" className="footer-bottom-link">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </div>
  );
}
