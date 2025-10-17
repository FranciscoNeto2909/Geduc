import quad from "../../assets/quadriculado.png";
import quad2 from "../../assets/quadriculado2.png";
import phone from "../../assets/celular.png";
import eficiencia from "../../assets/eficiencia.png";
import conectividade from "../../assets/conectividade.png";
import transformacao from "../../assets/transformacao.png";
import aula from "../../assets/aula.png";
import acompanhamento from "../../assets/acompanhamento.png";
import conectividade2 from "../../assets/conectividade2.png";
import mainFeatures from "../../assets/mainFeatures.png";
import clientsOpinionImg from "../../assets/clientsOpinion.png";
import {
  solutions,
  mainSolutionsBanner,
  clientsOpinion,
  content,
} from "../../variables";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./inicio.css";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

export default function Inicio() {
  return (
    <div className="inicio">
      <div className="inicio-banner">
        <div
          className="banner-img"
          style={{ backgroundImage: `url(${quad})` }}
        ></div>
        <div className="banner-texts">
          <h2 className="banner-texts-title">
            Transformando a <br /> Educação com Inovação e Conexão
          </h2>
          <p className="banner-texts-desc">
            O Geduc conecta mais de 350 mil alunos, 30 mil professores e 2 mil
            instituições, oferecendo uma gestão eficiente e uma educação mais
            acessível e transformadora.
          </p>
          <div className="banner-buttons">
            <button type="button" className="button">
              Conheça a Plataforma
            </button>
            <button type="button" className="button button--inverted">
              Seja Parceiro
            </button>
          </div>
        </div>
        <div className="banners-phone">
          <div className="phone-circle1"></div>
          <img src={phone} alt="celular" className="phone-img" />
          <div className="phone-circle2"></div>
        </div>
      </div>
      <div className="inicio-descriptions">
        <div className="inicio-description">
          <div className="inicio-description-img">
            <img src={conectividade} alt="" />
          </div>
          <h4 className="inicio-description-title">Conectividade</h4>
          <p className="inicio-description-text">
            Integra alunos, professores e instituições
          </p>
        </div>
        <div className="inicio-description">
          <div className="inicio-description-img">
            <img src={eficiencia} alt="" />
          </div>
          <h4 className="inicio-description-title">Eficiência</h4>
          <p className="inicio-description-text">Automação e gestão completa</p>
        </div>
        <div className="inicio-description">
          <div className="inicio-description-img">
            <img src={transformacao} alt="" />
          </div>
          <h4 className="inicio-description-title">Transformação</h4>
          <p className="inicio-description-text">
            Educação moderna e acessivel
          </p>
        </div>
      </div>
      <div className="inicio-pillars">
        <div className="inicio-pillars-header">
          <div className="pillars-header-texts">
            <p className="pillars-header-text">
              <span className="pillars-header-line"></span> Nossos Pilares
            </p>
            <h2 className="pillars-header-title">Conheça os nossos Pilares</h2>
            <p className="pillars-header-desc">O Que Nos Torna Únicos</p>
          </div>
          <div className="pillars-header-button">
            <button
              type="button"
              className="button button--inverted button--small"
            >
              Saiba Mais
            </button>
          </div>
        </div>
        <div className="inicio-pillars-cards">
          <div className="pillars-card">
            <div className="pillars-card-texts">
              <h4 className="pillars-card-title">Gestão Eficiente</h4>
              <p className="pillars-card-desc">
                Envolver os{" "}
                <span className="text--dark">aspectos gerenciais</span> e{" "}
                <span className="text--dark">técnico-administrativos</span> para{" "}
                <span className="text--dark">otimiza</span>r os{" "}
                <span className="text--dark">processos diários</span>.
              </p>
            </div>
            <img className="pillars-card-img" src={aula} alt="" />
          </div>
          <div className="pillars-card">
            <div className="pillars-card-texts">
              <h4 className="pillars-card-title">
                Acompanhamento e Diagnósticos
              </h4>
              <p className="pillars-card-desc">
                Mapear <span className="text--dark">pontos fortes</span> e{" "}
                <span className="text--dark">dificuldades</span> com base nas{" "}
                <span className="text--dark">habilidades</span> dos alunos
                permitindo que os professores{" "}
                <span className="text--dark">avalie</span>m o desempenho dos
                alunos.
              </p>
            </div>
            <img className="pillars-card-img" src={acompanhamento} alt="" />
          </div>
          <div className="pillars-card">
            <div className="pillars-card-texts">
              <h4 className="pillars-card-title">Conectividade</h4>
              <p className="pillars-card-desc">
                Manter os alunos engajados mesmo fora da escola para{" "}
                <span className="text--dark">
                  desenvolver aprendizagem colaborativa
                </span>
                .
              </p>
            </div>
            <img className="pillars-card-img" src={conectividade2} alt="" />
          </div>
        </div>
      </div>
      <div className="inicio-solutions">
        <div
          className="inicio-solutions-banner"
          style={{ backgroundImage: `url(${quad2})` }}
        ></div>
        <div className="solutions-header">
          <h2 className="solutions-header-title">Soluções Geduc</h2>
        </div>
        <div className="solutions-items">
          {solutions.map((solution, i) => (
            <div className="solutions-item" key={i}>
              <solution.icon size={32} className="solutions-item-icon" />
              <h4 className="solutions-item-title">{solution.title}</h4>
            </div>
          ))}
        </div>
        <div className="inicio-pillars-news">
          <div className="pillars-news-texts">
            <h2 className="news-texts-title">
              Receba as <span className="news-texts-news">novidades</span>{" "}
              direto no seu e-mail!
            </h2>
            <p className="news-texts-desc">
              Cadastre-se e receba dicas, conteúdos exclusivos e novidades toda
              semana.
            </p>
          </div>
          <div className="pillars-news-form">
            <form className="news-form" action="">
              <div className="news-form-name">
                <label htmlFor="name"></label>
                <input
                  className="form-input"
                  type="text"
                  id="name"
                  placeholder="Nome Completo*"
                />
              </div>
              <div className="news-form-email">
                <label htmlFor="email"></label>
                <input
                  className="form-input"
                  id="email"
                  type="text"
                  placeholder="E-mail*"
                />
              </div>
              <div className="news-form-burtton">
                <button type="button" className="button">
                  Assinar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="inicio-features">
        <div className="features-header">
          <h2 className="features-header-title">Recursos Principais</h2>
        </div>
        <div className="features-carroussel">
          <div className="features-carroussel-prev">
            <button type="button" className="pagination-button">
              <AiOutlineLeft size={32} />
            </button>
          </div>
          <div className="features-carroussel-page">
            <div className="features-carroussel-items">
              {mainSolutionsBanner.map((item, i) => (
                <div className="features-carroussel-item" key={i}>
                  <div className="features-carroussel-icon">
                    <item.icon size={32} />
                  </div>
                  <div className="features-carroussel-texts">
                    <h4 className="features-carroussel-title">{item.title}</h4>
                    <p className="features-carroussel-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="features-carroussel-img">
              <img src={mainFeatures} alt="laptop e celular" />
            </div>
          </div>
          <div className="features-carroussel-next">
            <button
              type="button"
              className="pagination-button pagination-button--available"
            >
              <AiOutlineRight size={32} />
            </button>
          </div>
        </div>
        <div className="features-more">
          <div className="features-more-pagination">
            <div className="pagination-item pagination-item--selected"></div>
            <div className="pagination-item"></div>
            <div className="pagination-item"></div>
          </div>
          <button type="button" className="button features-more-button">
            Saiba mais
          </button>
        </div>
      </div>
      <div className="inicio-clients">
        <div
          className="clients-img"
          style={{ backgroundImage: `url(${clientsOpinionImg})` }}
        ></div>
        <div className="clients-header">
          <h2 className="clients-header-title">
            Veja o que Nossos Clientes Dizem
          </h2>
        </div>

        <div className="clients-carroussel">
          <div className="clients-carroussel-prev">
            <button type="button" className="pagination-button">
              <AiOutlineLeft size={32} />
            </button>
          </div>
          <div className="clients-carroussel-page">
            <div className="clients-carroussel-items">
              {clientsOpinion.map((client, i) => (
                <div className="clients-carroussel-item" key={i}>
                  <div className="clients-carroussel-opinion">
                    <p className="clients-carroussel-opinion-text">
                      {client.opinion}
                    </p>
                    <span className="carroussel-opinion-tip"></span>
                  </div>
                  <div className="clients-carroussel-client">
                    <h4 className="carroussel-client-name">{client.name}</h4>
                    <p className="carroussel-client-city">{client.city}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="clients-carroussel-next">
            <button
              type="button"
              className="pagination-button pagination-button--available"
            >
              <AiOutlineRight size={32} />
            </button>
          </div>
        </div>
        <div className="clients-pagination">
          <div className="pagination-item pagination-item--selected"></div>
          <div className="pagination-item"></div>
        </div>
      </div>
      <div className="inicio-content">
        <div className="content-header">
          <h2 className="content-header-title">Veja Nossos Conteúdos</h2>
          <div className="content-header-button">
            <button type="button" className="button button--inverted button--small">
              Saiba mais
            </button>
          </div>
        </div>
        <div className="content-cards">
          <div className="content-cards-items">
            {
              content.map((item, i) => (
                <div className="content-cards-item" key={i}>
                  <div className="content-cards-item-texts">
                    <h3 className="content-cards-item-title">{item.title}</h3>
                    <p className="content-cards-item-desc">{item.desc}</p>
                  </div>
                  <div className="content-cards-item-button">
                    <Link to="/" className="button button--underline">LER MAIS</Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
