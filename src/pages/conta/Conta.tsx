import quadriculado from "../../assets/quadriculado.png";
import aluna from "../../assets/aluna3.png";
import "./conta.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Footer from "../../components/footer/Footer";

export default function Conta() {
  return (
    <div className="conta">
      <div className="conta-banner">
        <div className="conta-banner-bg">
          <img src={quadriculado} alt="" />
        </div>
        <div className="conta-banner-items">
          <div className="conta-banner-texts" data-aos="fade-right">
            <h3 className="conta-banner-title">
              Junte-se à comunidade do Geduc
            </h3>
            <p className="conta-banner-subtitle">
              Faça <a href="/login">login</a> ou <a href="/cadastro">crie</a>{" "}
              sua conta para começar.
            </p>
            <div className="conta-banner-desc">
              <p className="conta-banner-text">
                Descubra artigos, dicas e tendências para simplificar a
                administração escolar, engajar alunos e impulsionar resultados.
              </p>
              <a href="/" className="conta-banner-link">
                Acesse Já!
              </a>
            </div>
            <div className="conta-banner-buttons">
              <a
                href="https://semed.geduc.com.br/index.php?class=LoginForm"
                className="button"
              >
                Conheça a plataforma
              </a>
              <a href="/seja-parceiro" className="button button--inverted">
                Seja parceiro
              </a>
            </div>
          </div>
          <div className="conta-banner-img" data-aos="fade-left">
            <img src={aluna} alt="" />
          </div>
        </div>
        <div className="conta-banner-cards">
          <div className="conta-banner-card" data-aos={window.innerWidth > 500 ? "zoom-in" : "fade-right"}>
            <h4 className="conta-banner-card-title">
              Não perca nenhuma novidade
            </h4>
            <p className="conta-banner-card-desc">
              Nossa plataforma está em constante <span>evolução</span>! Todas as
              semanas adicionamos novos{" "}
              <span>artigos, recursos exclusivos</span> e{" "}
              <span>informações</span>
              atualizadas para manter você sempre à frente.
            </p>
            <button className="conta-banner-card-btn">Saiba mais</button>
          </div>
          <div className="conta-banner-card" data-aos={window.innerWidth > 500 ? "zoom-in" : "fade-left"}>
            <h4 className="conta-banner-card-title">Boas Práticas em Gestão</h4>
            <p className="conta-banner-card-desc">
              Acesse <span>modelos de planejamento</span>,{" "}
              <span>indicadores de qualidade</span> e{" "}
              <span>cases de sucesso</span> para aplicar na sua escola.
            </p>
            <button className="conta-banner-card-btn">Ver Práticas</button>
          </div>
          <div className="conta-banner-card" data-aos={window.innerWidth > 500 ? "zoom-in" : "fade-right"}>
            <h4 className="conta-banner-card-title">Seja Nosso Parceiro</h4>
            <p className="conta-banner-card-desc">
              Como parceiro, você terá acesso a{" "}
              <span>benefícios exclusivos, suporte dedicado</span> e
              <span>oportunidades de crescimento conjunto</span> para
              transformar a educação.
            </p>
            <button className="conta-banner-card-btn">Seja Parceiro</button>
          </div>
        </div>
      </div>
      <div className="conta-login">
        <div className="login">
          <div className="login-form-container" data-aos={window.innerWidth > 500 ? "fade-right" : "fade-up"}>
            <h3 className="login-form-title">Entrar</h3>
            <form action="" className="login-form">
              <div className="login-form-item">
                <label className="login-form-item-title" htmlFor="email">
                  E-mail
                </label>
                <input
                  type="email"
                  className="register-input"
                  placeholder="Digite o seu e-mail"
                />
              </div>
              <div className="login-form-item">
                <label className="login-form-item-title" htmlFor="senha">
                  Senha
                </label>
                <input
                  type="password"
                  className="register-input"
                  placeholder="Digite a sua senha"
                />
              </div>
              <span className="login-form-forget">Esqueci minha senha</span>
              <div className="login-form-buttons">
                <button>Entrar</button>
                <button>Entrar com Google</button>
              </div>
              <span className="login-form-registerlink">
                Ainda não tem uma conta? Se{" "}
                <a href="/cadastro">cadastre aqui</a>{" "}
              </span>
            </form>
          </div>
          <div className="login-texts" data-aos={window.innerWidth > 500 ? "fade-left" : "fade-up"}>
            <div className="login-texts-header">
              <h3 className="login-texts-header-title">
                Faça já o seu login ou se cadastre!
              </h3>
              <p className="login-texts-header-text">
                Fazer login no Geduc significa conveniência, comunicação e
                controle, oferecendo uma experiência integrada que simplifica a
                gestão escolar para todos os envolvidos.
              </p>
            </div>
            <div className="login-texts-cards">
              <div className="login-texts-card" data-aos={window.innerWidth > 500 ? "" : "fade-right"} data-aos-offset="100">
                <div className="login-texts-card-icon icon--location">
                  <IoLocationSharp size={24} />
                </div>
                <div className="login-texts-card-texts" >
                  <h4 className="login-texts-card-title">Localização</h4>
                  <ul className="login-texts-card-items">
                    <li className="login-texts-card-item">
                      <a
                        href="https://maps.app.goo.gl/eb1JhT3bZSvBdA8h9"
                        target="_blank"
                      >
                        Imperatriz - MA
                      </a>
                    </li>
                    <li className="login-texts-card-item">
                      <a
                        href="https://maps.app.goo.gl/uNcwA8Gaw2BBubMv8"
                        target="_blank"
                      >
                        Aldeota - CE
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="login-texts-card" data-aos={window.innerWidth > 500 ? "" : "fade-left"} data-aos-offset="200">
                <div className="login-texts-card-icon icon--phone">
                  <FaPhoneAlt size={20} />
                </div>
                <div className="login-texts-card-texts">
                  <h4 className="login-texts-card-title title--contact">
                    Contato
                  </h4>
                  <a href="" className="login-texts-card-text">
                    (99) 98453-8839
                  </a>
                </div>
              </div>
              <div className="login-texts-card" data-aos={window.innerWidth > 500 ? "" : "fade-right"} data-aos-offset="200">
                <div className="login-texts-card-icon icon--time">
                  <FaClock size={22} />
                </div>
                <div className="login-texts-card-texts">
                  <h4 className="login-texts-card-title">Funcionamento</h4>
                  <p className="login-texts-card-text">8:00 às 18:30</p>
                </div>
              </div>
              <div className="login-texts-card" data-aos={window.innerWidth > 500 ? "" : "fade-left"} data-aos-offset="300">
                <div className="login-texts-card-icon icon--email">
                  <IoMdMail size={22} />
                </div>
                <div className="login-texts-card-texts">
                  <h4 className="login-texts-card-title">E-mail</h4>
                  <p className="login-texts-card-text">
                    contato@genesistech.com.br
                  </p>
                </div>
              </div>
            </div>
            <div className="login-texts-bottom">
              <p className="login-texts-bottom-text">
                Faça login para ter uma visão completa e instantânea de tudo o
                que importa.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
