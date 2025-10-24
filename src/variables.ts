import {
  AiOutlineBarChart,
  AiOutlineIdcard,
  AiOutlineLineChart,
  AiOutlineTeam,
  AiOutlineEnvironment,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { PiBookBookmarkFill, PiClipboardTextBold } from "react-icons/pi";
import { MdManageAccounts, MdOutlineHomeWork } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaSchoolCircleCheck } from "react-icons/fa6";
import { BiCategoryAlt } from "react-icons/bi";

export const routes = [
  { name: "Início", to: "/" },
  { name: "Quem Somos", to: "/quem-somos" },
  { name: "Blog", to: "/blog" },
  { name: "Seja Parceiro", to: "/seja-parceiro" },
  { name: "Plataforma", to: "/plataforma" },
  { name: "Baixar App", to: "/baixar-app" },
];

export const solutions = [
  {
    icon: PiClipboardTextBold,
    title: "Gestão de Matricula e Rematrícula",
    desc: "Otimização dos processos de pré-matrícula, matrícula e rematrícula, facilitando a formação de turmas por série/ano, turno e modalidade.",
  },
  {
    icon: PiBookBookmarkFill,
    title: "Secretaria e Diário Eletrônico",
    desc: "Armazenamento de registros acadêmicos gerados pela interação entre professor e aluno são automaticamente armazenados, e emissão de documentos de secretaria via plataforma.",
  },
  {
    icon: MdManageAccounts,
    title: "Gestão do Censo Escolar",
    desc: "Monitoramento da infrequência escolar, evitando a evasão e abandono, com a possibilidade de integração com Conselhos Tutelares e Ministério Público.",
  },
  {
    icon: AiOutlineEnvironment,
    title: "Geolocalização",
    desc: "Sistema integrado de rastreamento do transporte escolar, com cobertura 4G e GPRS, permitindo o acompanhamento em tempo real para pais e alunos.",
  },
  {
    icon: FaUsers,
    title: "Gestão de Aulas Não-Presenciais",
    desc: "Adaptação de aulas para o formato remoto ou híbrido, seguindo as normas dos Conselhos de Educação.",
  },
  {
    icon: BiCategoryAlt,
    title: "Processos Seletivos",
    desc: "Digitalização de processos seletivos, com portal de editais on-line, gestão de inscrições e recebimento de documentos garantindo eficiência e agilidade.",
  },
  {
    icon: AiOutlineTeam,
    title: "Ambiente do Professor e do Aluno",
    desc: "Facilita a interação digital e o acompanhamento das atividades escolares.",
  },
  {
    icon: MdOutlineHomeWork,
    title: "Ambiente Administrativo",
    desc: "Integração de ferramentas de gestão administrativa e pedagógica, acessíveis a gestores, coordenadores, professores e alunos.",
  },
  {
    icon: FaSchoolCircleCheck,
    title:
      "Gestão de Patrimônio, Alimentação Escolar, Transporte e Almoxarifado",
    desc: "Uma ferramenta para otimizar recursos financeiros e auxiliar na gestão eficiente de patrimônio, almoxarifado e alimentação escolar.",
  },
  {
    icon: AiOutlineBarChart,
    title: "Avaliação Institucional",
    desc: "Permite a avaliação interativa e personalizada, com suporte para o acompanhamento de indicadores educacionais e o desenvolvimento do planejamento estratégico.",
  },
  {
    icon: AiOutlineLineChart,
    title: "Gestão de Busca Ativa",
    desc: "Monitoramento da infrequência escolar, evitando a evasão e abandono, com a possibilidade de integração com Conselhos Tutelares e Ministério Público.",
  },
  {
    icon: AiOutlineIdcard,
    title: "AVA Docentes",
    desc: "Sistema para a capacitação contínua dos docentes, com formação digital, presencial ou online, incluindo acompanhamento do progresso e emissão de certificados.",
  },
];

export const mainSolutionsBanner = [
  {
    icon: FaUsers,
    title: "Gestão de Aulas Não-Presenciais",
    desc: "Adaptação de aulas para o formato remoto ou híbrido, seguindo as normas dos Conselhos de Educação",
  },
  {
    icon: AiOutlineTeam,
    title: "Ambiente do Professor e do Aluno",
    desc: "Facilita a interação digital e o acompanhamento das atividades escolares.",
  },
  {
    icon: AiOutlineLineChart,
    title: "Gestão de Busca Ativa",
    desc: "Monitoramento da infrequência escolar, evitando a evasão e abandono, com a possibilidade de integração com Conselhos Tutelares e Ministério Público.",
  },
];

export const clientsOpinion = [
  {
    name: "Flávio Viana",
    city: "Alto Alegre do Pindaré - MA",
    opinion:
      "“No decorrer de sete anos sempre acompanhei meus dados estatísticos em geral de forma rápida e eficiente, nos momentos mais necessários na gestão de informações sempre tive o suporte eficaz.”",
  },
  {
    name: "Gildasio Candeira",
    city: "Palmeiras do Tocantis - TO",
    opinion:
      "“Muito bom ter um sistema como o do Geduc dando facilidade em fazer acontecer o trabalho do professor em sala de aula.”",
  },
];

export const content = [
  {
    title:
      "Integração de Dados na Gestão Escolar: Unindo Pedagógico e Administrativo",
    desc: "A gestão escolar enfrenta o desafio contínuo de unificar diferentes vertentes, como o pedagógico, administrativo e financeiro, de maneira eficiente. A integração de dados se...",
  },
  {
    title: "Tecnologia na Educação: 5 Abordagens para Potencializar Resultados",
    desc: "A educação pública no Brasil enfrenta desafios contínuos para assegurar que todos os estudantes alcancem seu pleno potencial acadêmico. Uma ferramenta poderosa e cada vez...",
  },
  {
    title: "Como Eliminar Filas e Erros nos Processos de Matrícula Escolar",
    desc: "A matrícula escolar é um dos momentos mais críticos no calendário de qualquer instituição de ensino, gerando filas intermináveis, pais frustrados, documentos perdidos e erros administrativos...",
  },
  {
    title: "Como Tornar a Gestão do Transporte Escolar mais Eficiente",
    desc: "Administrar o transporte escolar é um grande desafio, mas é possível torná-lo mais eficiente com organização e tecnologia, reduzindo custos, otimizando processos e aumentando a confiança das famílias...",
  },
  {
    title: "Automação na Gestão Escolar: Reduzindo Retrabalho",
    desc: "A gestão escolar no Brasil enfrenta desafios diários, desde tarefas administrativas complexas até a necessidade de melhorar a experiência de aprendizagem dos alunos. Com recursos...",
  },
  {
    title: "O Impacto dos Dados na Retenção Escolar",
    desc: "A gestão eficaz de dados tem se tornado um alicerce cada vez mais essencial para a retenção de alunos na educação pública brasileira. No contexto...",
  },
];

export const social = [
  { icon: AiOutlineInstagram },
  { icon: AiOutlineWhatsApp },
  { icon: AiOutlineLinkedin },
];

export const ourValues = [
  {
    emphasis: "Inovar",
    title: "Inovação com Propósito",
    desc: "Não buscamos a tecnologia mais complexa, mas a mais inteligente e útil. Cada funcionalidade que desenvolvemos é pensada para resolver um problema real, simplificar e eliminar a dor dos gestores, professores e famílias.",
    color: "emphasis-orange",
  },
  {
    emphasis: "Cumprir",
    title: "Parceria e Confiança",
    desc: "Nossa relação com as escolas vai além do fornecedor-cliente. Nosso sucesso é medido pelo sucesso dos nossos parceiros.",
    color: "emphasis-primary-blue",
  },
  {
    emphasis: "Educar",
    title: "Paixão por Educação",
    desc: "Acreditamos, genuinamente, no poder transformador da educação. Nosso combustível é ver as instituições de ensino prosperando e os alunos alcançando seu potencial máximo.",
    color: "emphasis-green",
  },
  {
    emphasis: "Transmitir",
    title: "Simplicidade e Eficiência",
    desc: "A complexidade é inimiga da produtividade. Lutamos contra ela todos os dias. Buscamos transformar processos complexos e burocráticos em fluxos simples, intuitivos e eficientes.",
    color: "emphasis-dark-blue",
  },
];

export const steps = [
  {
    text: "Compreender os desafios específicos da sua escola.",
    color:"--blue"
  },
  {
    text: "Mapear os processos que podem ser automatizados e otimizados.",
    color:"--green"
  },
  {
    text: "Apresentar um walkthrough personalizado da plataforma.",
    color:"--primary-blue"
  },
  {
    text: "Esclarecer todas as dúvidas e traçar um potencial roteiro de implementação.",
    color:"--orange"
  },
];
