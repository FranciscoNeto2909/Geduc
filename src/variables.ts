import {
  AiOutlineBarChart,
  AiOutlineIdcard,
  AiOutlineLineChart,
  AiOutlineTeam,
  AiOutlineEnvironment,
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
  },
  {
    icon: PiBookBookmarkFill,
    title: "Secretaria e Diário Eletrônico",
  },
  {
    icon: MdManageAccounts,
    title: "Gestão do Censo Escolar",
  },
  {
    icon: AiOutlineEnvironment,
    title: "Geolocalização",
  },
  {
    icon: FaUsers,
    title: "Gestão de Aulas Não-Presenciais",
  },
  {
    icon: BiCategoryAlt,
    title: "Processos Seletivos",
  },
  {
    icon: AiOutlineTeam,
    title: "Ambiente do Professor e do Aluno",
  },
  {
    icon: MdOutlineHomeWork,
    title: "Ambiente Administrativo",
  },
  {
    icon: FaSchoolCircleCheck,
    title:
      "Gestão de Patrimônio, Alimentação Escolar, Transporte e Almoxarifado",
  },
  {
    icon: AiOutlineBarChart,
    title: "Avaliação Institucional",
  },
  {
    icon: AiOutlineLineChart,
    title: "Gestão de Busca Ativa",
  },
  {
    icon: AiOutlineIdcard,
    title: "AVA Docentes",
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
  }
];
