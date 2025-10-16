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
    desc:"Monitoramento da infrequência escolar, evitando a evasão e abandono, com a possibilidade de integração com Conselhos Tutelares e Ministério Público."
  },
];
