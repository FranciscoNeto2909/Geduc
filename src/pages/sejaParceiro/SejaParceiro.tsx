import {
  AiOutlineCheck,
  AiOutlineCheckCircle,
  AiOutlineDown,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import {
  acting,
  commission,
  emailRegex,
  parceriaCards,
  partnershipModels,
  partnershipSteps,
  partnerTypes,
  questionsCards,
} from "../../variables";
import quadriculado from "../../assets/quadriculado.png";
import professores from "../../assets/professores.png";
import estudante from "../../assets/estudante.png";
import livro from "../../assets/livro.png";
import Footer from "../../components/footer/Footer";
import "./sejaParceiro.css";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { mask } from "remask";

export default function SejaParceiro() {
  const [hasInterest, setHasInterest] = useState<boolean>(false);
  const [option, setOption] = useState<string>("Selecione uma opção");
  const [optionId, setOptionId] = useState<number>(4);
  const [message, setmessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    enterprise: "",
    phone: "",
    partnership: "ainda não sei",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    enterprise: false,
    email: false,
    phone: false,
    partnership: false,
    message: false,
    msg: "",
  });

  function handleOpenOptions() {
    setHasInterest(!hasInterest);
  }

  function handleCloseOptions() {
    setHasInterest(false);
  }

  function handleChangeOption({ value, id }: { value: string; id: number }) {
    setOption(value);
    setOptionId(id);
    if (id == 4) {
      setForm({ ...form, partnership: "ainda não sei" });
    } else {
      setForm({ ...form, partnership: value });
    }
  }

  function handleMaskPhone(e: string) {
    setForm({
      ...form,
      phone: mask(`${e}`, ["(99) 99999-9999"]),
    });
  }

  function handleRegisterForm() {
    if (form.name.length < 2) {
      setFormErrors({ ...formErrors, name: true, msg: "Preencha esse campo!" });
      setTimeout(() => {
        setFormErrors({ ...formErrors, name: false, msg: "" });
      }, 3000);
    } else if (!emailRegex.test(form.email)) {
      setFormErrors({
        ...formErrors,
        email: true,
        msg: "Digite um email válido!",
      });
      setTimeout(() => {
        setFormErrors({ ...formErrors, email: false, msg: "" });
      }, 3000);
    } else if (form.enterprise.length < 8) {
      setFormErrors({
        ...formErrors,
        enterprise: true,
        msg: "preencha esse campo!",
      });
      setTimeout(() => {
        setFormErrors({ ...formErrors, enterprise: false, msg: "" });
      }, 3000);
    } else if (form.phone.length < 15) {
      setFormErrors({
        ...formErrors,
        phone: true,
        msg: "Digite um telefone válido!",
      });
      setTimeout(() => {
        setFormErrors({ ...formErrors, phone: false, msg: "" });
      }, 3000);
    } else if (form.message.length > 0 && form.message.length < 10) {
      setFormErrors({
        ...formErrors,
        message: true,
        msg: "Mensagem muito curta!",
      });
      setTimeout(() => {
        setFormErrors({ ...formErrors, message: false, msg: "" });
      }, 3000);
    } else {
      setmessage("O matarial chegará no seu email");
      console.log(form);
      setTimeout(() => {
        setmessage("");
        setForm({
          name: "",
          email: "",
          enterprise: "",
          phone: "",
          partnership: "ainda não sei",
          message: "",
        });
      }, 3000);
    }
  }

  return (
    <div className="parceria">
      <div className="parceria-banner">
        <div className="parceria-banner-bg">
          <img src={quadriculado} alt="" />
        </div>
        <div className="parceria-banner-items">
          <div className="parceria-banner-texts">
            <h2 className="parceria-banner-title">
              Programa de Parcerias GEDUC
            </h2>
            <p className="parceria-banner-subtitle">
              Cresça com a gente e leve inovação para a educação pública
            </p>
            <div className="parceria-banner-text">
              <p>
                O Programa de Parcerias GEDUC foi criado para profissionais e
                empresas que acreditam no poder da tecnologia para transformar a
                gestão educacional.
              </p>
              <p>
                Nosso objetivo é expandir nossa atuação na educação pública por
                meio de parceiros estratégicos, oferecendo bonificação por
                indicações e vendas efetivadas do software GEDUC.
              </p>
            </div>
            <div className="parceria-banners-buttons">
              <button className="button">Quero ser parceiro</button>
              <a
                href="https://api.whatsapp.com/send/?phone=(99)%2098453-8839%20"
                className="button button--white"
              >
                <AiOutlineWhatsApp size={24} />
                Fale como um consultor
              </a>
            </div>
          </div>
          <div className="parceria-banner-img">
            <div className="parceria-banner-circle1"></div>
            <img src={professores} alt="professores" />
            <div className="parceria-banner-circle2"></div>
          </div>
        </div>
      </div>
      <div className="parceria-parceiro">
        <div className="parceiro parceiro-header" data-aos="fade-up">
          <h2 className="parceiro-header-title">
            Por que se tornar parceiro GEDUC?
          </h2>
          <p className="parceiro-header-desc">
            O <span className="parceiro-header-emphasis">Programa de Parcerias GEDUC</span> foi criado para ampliar nossa presença
            na educação pública através de parcerias estratégicas. Oferecemos{" "}
            <span className="parceiro-header-emphasis">bonificação por indicações e vendas efetivadas</span> do
            software GEDUC — uma plataforma que já transforma a gestão
            educacional em diversas redes do país.
          </p>
        </div>
        <div
          className="parceiro parceiro-cards"
          data-aos={window.innerWidth > 500 && "fade-up"}
          data-aos-offset="200"
        >
          {parceriaCards.map((item, i) => (
            <div
              key={i}
              className="parceiro-card"
              data-aos={
                window.innerWidth > 500
                  ? "fade-up"
                  : i % 2 == 0
                  ? "fade-right"
                  : "fade-left"
              }
              data-aos-offset="200"
            >
              <div className="parceiro-card-icon">
                <item.icon size={item.size} />
              </div>
              <div className="parceiro-card-texts">
                <h3 className="parceiro-card-title">{item.title}</h3>
                <p className="parceiro-card-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="parceria-models" data-aos="fade-up">
          <div className="models">
            <div className="models-header">
              <h3 className="models-header-title">Modelos de Parceria</h3>
              <p className="models-header-desc">
                Escolha o modelo que melhor se adapta ao seu perfil e objetivos
                de negócio
              </p>
            </div>
            <div className="models-cards">
              {partnershipModels.map((model, i) => (
                <div
                  className="models-card"
                  key={i}
                  data-aos={
                    window.innerWidth > 500
                      ? "fade-up"
                      : i % 2 == 0
                      ? "fade-right"
                      : "fade-left"
                  }
                  data-aos-offset={window.innerWidth > 500 && `${i + 2}00`}
                >
                  <div className="models-card-header">
                    <span className="models-card-category">
                      {model.category}
                    </span>
                    <h3 className="models-card-title">{model.title}</h3>
                    <p className="models-card-desc">{model.subTitle}</p>
                  </div>
                  <div className="models-card-commission">
                    <p className="models-card-commission-title">Comissão</p>
                    <p className="models-card-commission-text">
                      {model.commission}
                    </p>
                  </div>
                  <div className="models-card-desc">
                    <p>{model.desc}</p>
                  </div>
                  <ul className="models-card-advantages">
                    {model.advantages.map((advantage, ai) => (
                      <li className="models-card-advantages-item" key={ai}>
                        <AiOutlineCheckCircle
                          className="card-advantages-item-icon"
                          size={20}
                        />
                        <span className="card-advantages-item-text">
                          {advantage}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="parceiro">
          <div className="parceiro-main" data-aos="fade-up">
            <div className="parceiro-main-img" data-aos="fade-right">
              <div className="parceiro-main-hrectangle"></div>
              <div className="parceiro-main-vrectangle"></div>
              <img src={estudante} alt="" />
            </div>
            <div className="paceiro-main-texts" data-aos="fade-left">
              <h3 className="parceiro-main-title">Como Funciona</h3>
              <p className="parceiro-main-text">
                O parceiro atua ativamente na prospecção e pré-venda, abrindo
                portas e qualificando leads. <br /> O Geduc assume toda a parte
                de negociação, implantação e suporte, garantindo uma entrega
                completa ao cliente final.
                <span>
                  Você foca em gerar conexões — nós cuidamos da operação.
                </span>
              </p>
              <ul className="parceiro-main-items">
                <li className="parceiro-main-item">
                  Sem necessidade de equipe comercial
                </li>
                <li className="parceiro-main-item">
                  Suporte integral do Geduc
                </li>
                <li className="parceiro-main-item">
                  Relacionamento direto com decisores
                </li>
                <li className="parceiro-main-item">
                  Participação estratégica em negócios reais
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="parceiro-types" data-aos="fade-up">
          <div className="parceiro-types-header">
            <span className="types-header-top">Junte-se à nós!</span>
            <h2 className="types-header-title">Quem pode se tornar parceiro</h2>
          </div>
          <div className="parceiro-types-cards">
            {partnerTypes.map((item, i) => (
              <div
                className="types-card"
                key={i}
                data-aos={
                  window.innerWidth > 500
                    ? "fade-up"
                    : i % 2 == 0
                    ? "fade-right"
                    : "fade-left"
                }
                data-aos-offset={window.innerWidth > 500 && `${i + 2}00`}
              >
                <div className={`types-card-icon ${item.iconClass}`}>
                  <item.icon size={item.size} />
                </div>
                <h3 className={`types-card-title ${item.titleClass}`}>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="parceiro-commission" data-aos="fade-up">
          <div className="commission">
            <div className="commission-header">
              <h2 className="commission-header-title">Comissão</h2>
              <div className="commission-header-desc">
                <p>
                  Receba <span className="commission-header-emphasis">15%</span> de comissão recorrente por 2 anos sobre as
                  mensalidades dos seus clientes, sem descontos na implantação.
                </p>
                <p>
                  Perfeito para <span className="commission-header-emphasis">consultores e empresas de tecnologia</span> que atuam
                  no setor público, nosso modelo oferece ganhos previsíveis sem
                  necessidade de estrutura comercial complexa.
                </p>
                <p>
                  Seja mais que um indicador - <span className="commission-header-emphasis">SEJA UM PARCEIRO</span> estratégico com
                  renda garantida.
                </p>
              </div>
            </div>
            <div className="commission-cards">
              {commission.map((item, i) => (
                <div
                  className="commission-card"
                  key={i}
                  data-aos={
                    window.innerWidth > 500
                      ? "fade-up"
                      : i % 2 == 0
                      ? "fade-right"
                      : "fade-left"
                  }
                  data-aos-offset={window.innerWidth > 500 && `${i + 1}00`}
                >
                  <item.icon
                    size={item.size}
                    fill={item.color}
                    className="commission-card-icon"
                  />
                  <div className="commission-card-texts">
                    <h3 className="commission-card-title">{item.title}</h3>
                    <p className="commission-card-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="parceiro-act" data-aos="fade-up">
          <div className="parceiro-act-header">
            <h2 className="act-header-title">Você escolhe como quer atuar</h2>
            <p className="act-header-desc">
              O parceiro GEDUC pode atuar desde a indicação até a representação
              total. Nós cuidamos da negociação, implantação e suporte conforme
              o modelo de parceria escolhido.
            </p>
          </div>
          <div className="parceiro-act-options">
            <div className="act-options-cards">
              {acting.map((act, i) => (
                <div
                  className="act-options-cards-container"
                  key={i}
                  data-aos={
                    window.innerWidth > 500
                      ? "fade-up"
                      : i % 2 == 0
                      ? "fade-right"
                      : "fade-left"
                  }
                  data-aos-offset={window.innerWidth > 500 && `${i + 1}00`}
                >
                  <div className="act-options-card">
                    <div className="act-options-card-num">
                      <span>0{i + 1}</span>
                    </div>
                    <div className="act-options-texts">
                      <h3 className="act-options-title">{act.title}</h3>
                      <p className="act-options-desc">{act.desc}</p>
                    </div>
                  </div>
                  {i < 3 && (
                    <div className="act-options-arrow">
                      <FaArrowRight size={26} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="parceria-questions" data-aos="fade-up">
          <div className="questions-header">
            <span className="questions-header-top">Principais Dúvidas</span>
            <h2 className="questions-header-title">Perguntas Frequentes</h2>
            <p className="questions-header-text">
              As dúvidas mais comuns sobre o{" "}
              <span className="questions-header-emphasis">
                programa de parcerias
              </span>
              do GEDUC estão reunidas aqui para ajudar você a entender como tudo
              funciona.
              <span className="questions-header-text2">
                Confira abaixo as respostas rápidas sobre{" "}
                <span className="questions-header-emphasis">
                  comissões, modalidades, requisitos
                </span>{" "}
                e muito mais.
              </span>
            </p>
          </div>
          <div className="questions-cards">
            {questionsCards.map((item, i) => (
              <div
                className="questions-card"
                key={i}
                data-aos={i % 2 == 0 ? "fade-right" : "fade-left"}
                data-aos-offset="200"
              >
                <p className="questions-card-question">{item.question}</p>
                <button className="questions-card-button">
                  <AiOutlineDown className="questions-card-button-icon" size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="parceria-steps" data-aos="fade-up">
          <div
            className="parceria-steps-texts"
            data-aos={window.innerWidth > 500 && "fade-right"}
          >
            <h2 className="parceria-steps-title">
              O GEDUC está ao seu lado em cada etapa
            </h2>
            <div className="parceria-steps-cards">
              {partnershipSteps.map((step, i) => (
                <div
                  className="parceria-steps-card"
                  key={i}
                  data-aos={
                    window.innerWidth > 500
                      ? "fade-up"
                      : i % 2 == 0
                      ? "fade-right"
                      : "fade-left"
                  }
                  data-aos-offset={"200"}
                >
                  <step.icon className="parceria-steps-card-icon" size={28} />
                  <div className="parceria-steps-card-texts">
                    <h3 className="parceria-steps-card-title">{step.title}</h3>
                    <p className="parceria-steps-card-desc">{step.descc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="parceria-steps-img"
            data-aos={window.innerWidth > 500 ? "fade-left" : "fade-up"}
          >
            <img src={livro} alt="" />
          </div>
        </div>
      </div>
      <div className="parceria-form" data-aos="fade-up">
        <div className="form">
          <div className="form-header">
            <h2 className="form-header-title">
              Pronto para crescer com o GEDUC?
            </h2>
            <p className="form-header-subtitle">
              Preencha o formulário e receba o material completo do Programa de
              Parcerias
            </p>
          </div>
          <div className="form-register">
            {message.length > 0 && (
              <div className="form-register-msg">{message}</div>
            )}
            <form className="form-register-form" autoComplete="off">
              <div className="form-register-container">
                <div className="form-register-item">
                  <label className="form-register-text" htmlFor="name">
                    Nome Completo *
                  </label>
                  <input
                    autoComplete="off"
                    type="text"
                    id="name"
                    placeholder="Seu Nome"
                    className="register-input"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                  />
                  {formErrors.name && (
                    <span className="form-register-errorMsg">
                      {formErrors.msg}
                    </span>
                  )}
                </div>
                <div className="form-register-item">
                  <label className="form-register-text" htmlFor="email">
                    E-mail profissional *
                  </label>
                  <input
                    autoComplete="off"
                    type="email"
                    placeholder="@gmail.com"
                    id="email"
                    className="register-input"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                  />
                  {formErrors.email && (
                    <span className="form-register-errorMsg">
                      {formErrors.msg}
                    </span>
                  )}
                </div>
              </div>
              <div className="form-register-container">
                <div className="form-register-item">
                  <label className="form-register-text" htmlFor="enterprize">
                    Empresa / CNPJ
                  </label>
                  <input
                    type="text"
                    placeholder="Nome da empresa"
                    id="enterprize"
                    className="register-input"
                    autoComplete="off"
                    value={form.enterprise}
                    onChange={e =>
                      setForm({ ...form, enterprise: e.target.value })
                    }
                  />
                  {formErrors.enterprise && (
                    <span className="form-register-errorMsg">
                      {formErrors.msg}
                    </span>
                  )}
                </div>
                <div className="form-register-item">
                  <label className="form-register-text" htmlFor="phone">
                    Telefone
                  </label>
                  <input
                    autoComplete="off"
                    type="text"
                    id="phone"
                    placeholder="(00) 00000-0000"
                    className="register-input"
                    value={form.phone}
                    onChange={e => handleMaskPhone(e.target.value)}
                  />
                  {formErrors.phone && (
                    <span className="form-register-errorMsg">
                      {formErrors.msg}
                    </span>
                  )}
                </div>
              </div>
              <div className="form-register-item-interest">
                <h3 className="form-register-text">
                  Tipo de parceria de interesse *
                </h3>
                <div
                  className="register-item-interest-options"
                  onClick={handleOpenOptions}
                >
                  <div className="register-item-interest-selected">
                    {option}
                  </div>
                  {hasInterest && (
                    <div
                      className="register-item-interest-items"
                      onMouseLeave={handleCloseOptions}
                    >
                      <div
                        className={`register-item-interest-item ${
                          optionId == 1 && "register-item-interest-emphasis"
                        }`}
                        onClick={() =>
                          handleChangeOption({ value: "Indicação", id: 1 })
                        }
                      >
                        {optionId == 1 && (
                          <AiOutlineCheck
                            size={12}
                            className="register-item-interest-icon"
                          />
                        )}
                        <span className="register-item-interest-text">
                          Indicação
                        </span>
                      </div>
                      <div
                        className={`register-item-interest-item ${
                          optionId == 2 && "register-item-interest-emphasis"
                        }`}
                        onClick={() =>
                          handleChangeOption({ value: "Representação", id: 2 })
                        }
                      >
                        {optionId == 2 && (
                          <AiOutlineCheck
                            size={12}
                            className="register-item-interest-icon"
                          />
                        )}
                        <span className="register-item-interest-text">
                          Representação
                        </span>
                      </div>
                      <div
                        className={`register-item-interest-item ${
                          optionId == 3 && "register-item-interest-emphasis"
                        }`}
                        onClick={() =>
                          handleChangeOption({ value: "White Label", id: 3 })
                        }
                      >
                        {optionId == 3 && (
                          <AiOutlineCheck
                            size={12}
                            className="register-item-interest-icon"
                          />
                        )}
                        <span className="register-item-interest-text">
                          White Label
                        </span>
                      </div>
                      <div
                        className="register-item-interest-item"
                        onClick={() =>
                          handleChangeOption({
                            value: "Selecione uma opção",
                            id: 4,
                          })
                        }
                      >
                        <span className="register-item-interest-text">
                          Ainda não sei
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="form-register-item-message">
                <label htmlFor="message" className="form-register-text">
                  Mensagem (Opcional)
                </label>
                <textarea
                  name=""
                  id=""
                  className="form-register-message-text"
                  placeholder="Conte-nos mais sobre seu interesse..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                ></textarea>
                {formErrors.message && (
                  <span className="form-register-errorMsg">
                    {formErrors.msg}
                  </span>
                )}
              </div>
              <button
                type="button"
                className="button form-register-button"
                onClick={handleRegisterForm}
              >
                Enviar e receber o material completo
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
