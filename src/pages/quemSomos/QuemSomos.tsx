import { AiOutlineUser } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { PiClipboardTextBold } from "react-icons/pi";

import professor from "../../assets/professor.png";
import professora from "../../assets/professora.png";
import alunos from "../../assets/alunos2.png";
import aluna from "../../assets/aluna2.png";
import quad from "../../assets/quadriculado.png";
import Footer from "../../components/footer/Footer";
import "./quemSomos.css";
import { FaChartLine } from "react-icons/fa";
import { ourValues, steps } from "../../variables";

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
              <h2 className="tecnology-item-title">
                A Tecnologia é o Alicerce da Transformação
              </h2>
              <p className="tecnology-item-desc">
                A <span className="desc-bold">tecnologia</span> é o alicerce da{" "}
                <span className="desc-bold">transformação</span>, pois amplia o
                acesso ao <span className="desc-bold">conhecimento</span>,
                facilita o{" "}
                <span className="desc-bold">
                  aprendizado personalizado e conecta
                </span>
                alunos e professores a novas{" "}
                <span className="desc-bold">possibilidades</span> de{" "}
                <span className="desc-bold">ensino</span>,{" "}
                <span className="desc-bold">tornando a educação</span> mais
                <span className="desc-bold">inclusiva</span> e{" "}
                <span className="desc-bold">eficaz.</span>
              </p>
              <div className="tecnology-item-bars">
                <span className="tecnology-item-bar"></span>
                <span className="tecnology-item-bar"></span>
              </div>
            </div>
            <div className="tecnology-item-button">
              <span className="tecnology-item-text">
                Ficou curioso? Saiba mais aqui:
              </span>
              <button className="button button--inverted">Ver detalhes</button>
            </div>
          </div>
        </div>
      </div>
      <div className="quemsomos-proporsal">
        <div className="proporsal">
          <div className="proporsal-item">
            <span className="proporsal-item-">O Que Nós Fazemos ?</span>
            <div className="proporsal-item-texts">
              <h2 className="proporsal-item-title">
                A Nossa Proposta de Valor
              </h2>
              <p className="proporsal-item-desc">
                O Geduc é uma plataforma de gestão escolar desenvolvida para
                transformar a forma como as instituições educacionais gerenciam
                suas operações.
              </p>
              <p className="proporsal-item-desc">
                Promovemos eficiência, controle e inovação através da automação
                completa de processos como matrículas, rematrículas e gestão de
                alunos, eliminando tarefas repetitivas e proporcionando economia
                significativa nos custos operacionais.
              </p>
              <p className="proporsal-item-desc">
                Sua integração inteligente de dados entre setores pedagógicos,
                administrativos e financeiros oferece uma visão unificada e
                estratégica da escola, permitindo tomadas de decisão mais
                rápidas e embasadas.
              </p>
              <p className="proporsal-item-desc">
                Além disso, a plataforma otimiza recursos <br /> logísticos e
                simplifica processos seletivos, <br /> garantindo agilidade,
                segurança e padronização.
              </p>
              <p className="proporsal-item-desc">
                Ao unir tecnologia de ponta com a compreensão dos desafios
                educacionais, o Geduc impulsiona a modernização da gestão
                escolar e prepara as instituições para o futuro da educação.
              </p>
            </div>
            <div className="proporsal-item-button">
              <button className="button">Conheça a Plataforma</button>
            </div>
          </div>
          <div className="proporsal-item">
            <div className="proporsal-item-left">
              <img className="proporsal-item-img" src={alunos} alt="" />
            </div>
            <div className="proporsal-item-orange"></div>
            <div className="proporsal-item-right">
              <img className="proporsal-item-img" src={aluna} alt="" />
            </div>
            <div className="proporsal-item-green"></div>
          </div>
        </div>
      </div>
      <div className="quemsomos-values">
        <div className="values-circle1"></div>
        <div className="values">
          <div className="values-texts">
            <span className="values-texts-top">Os Nossos Valores</span>
            <h2 className="values-texts-title">
              Os <span>Pilares</span> que Guiam Cada Decisão
            </h2>
            <p className="values-texts-desc">
              São os princípios que guiam todas as nossas ações e decisões.
            </p>
          </div>
          <div className="values-cards">
            {ourValues.map((value, i) => (
              <div className="values-card-container">
                <div className={`values-card-emphasis ${value.color}`}>
                  <h4 className="values-card-emphasis-title">
                    {value.emphasis}
                  </h4>
                </div>
                <div className="values-card" key={i}>
                  <div className="values-card-texts">
                    <h3 className="values-card-title">{value.title}</h3>
                    <p className="values-card-desc">{value.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="values-circle2"></div>
      </div>
      <div className="quemsomos-firstStep">
        <div className="firststep">
          <div className="firststep-item">
            <div className="firstStep-item-form">
              <form action="">
                <div className="firstStep-form-header">
                  <h3 className="firstStep-form-header-title">
                    Converse com um de nossos Especialistas!
                  </h3>
                </div>
                <div className="firstStep-form-body">
                  <div className="firststep-form-item">
                    <label htmlFor="name"></label>
                    <input
                      id="name"
                      placeholder="Nome*"
                      type="text"
                      className="form-input"
                    />
                  </div>
                  <div className="firststep-form-item">
                    <label htmlFor="surname"></label>
                    <input
                      id="surname"
                      placeholder="Sobrenome*"
                      type="text"
                      className="form-input"
                    />
                  </div>
                  <div className="firststep-form-item">
                    <label htmlFor="email"></label>
                    <input
                      id="email"
                      type="email"
                      placeholder="E-mail*"
                      className="form-input"
                    />
                  </div>
                  <div className="firststep-form-item">
                    <label htmlFor="phone"></label>
                    <input
                      id="phone"
                      placeholder="Telefone*"
                      type="text"
                      className="form-input"
                    />
                  </div>
                  <div className="">
                    <textarea
                      className="firstStep-form-item-text"
                      id="text"
                      placeholder="Escreva para Nós!"
                    ></textarea>
                  </div>
                </div>
                <div className="firstStep-form-button">
                  <button className="button">Enviar</button>
                </div>
              </form>
            </div>
          </div>
          <div className="firststep-item">
            <div className="firstStep-item-header">
              <h2 className="firstStep-item-header-title">
                O Primeiro Passo para a Transformação
              </h2>
              <span className="firstStep-item-header-undertitle">
                Não hesite em nos contatar
              </span>
              <p className="firstStep-item-header-desc">
                Não se trata apenas de uma demonstração de software, mas de uma
                análise estratégica gratuita. Nossos especialistas irão:
              </p>
            </div>
            <div className="firstStep-item-steps">
              {steps.map((step, i) => (
                <div className="firstStep-item-step" key={i}>
                  <div className="item-step-number">
                    <h3 className="step-number" style={{ color: `var(${step.color})` }}>{`0${i+1}.`}</h3>
                  </div>
                  <div className="item-step-text">
                    <h3 className="step-text">{step.text}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="firstStep-item-invite">
              <p className="item-invite-text">
                Agora que você já conhece nossa história, nossos valores e o que
                nos move, convidamos você a experimentar na prática como a Geduc
                pode revolucionar <br /> a gestão da sua instituição.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
