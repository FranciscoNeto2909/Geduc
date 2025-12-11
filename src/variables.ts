type CommentType = {
  img: string;
  name: string;
  comment: string;
};

export interface PostInterface {
  img: string;
  title: string;
  subTitle: string;
  texts: string[];
  cardText: string;
  comments: CommentType[];
}

import {
  AiOutlineBarChart,
  AiOutlineIdcard,
  AiOutlineLineChart,
  AiOutlineTeam,
  AiOutlineEnvironment,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlineFileText,
  AiOutlineSync,
} from "react-icons/ai";
import { PiBookBookmarkFill, PiClipboardTextBold } from "react-icons/pi";
import {
  MdManageAccounts,
  MdOutlineHomeWork,
  MdOutlineHandshake,
  MdHeadset,
  MdSupportAgent,
  MdOutlineMoneyOff,
} from "react-icons/md";
import { FaGraduationCap, FaLinkedin, FaUser, FaUsers } from "react-icons/fa";
import { FaSchoolCircleCheck } from "react-icons/fa6";
import { BiCategoryAlt } from "react-icons/bi";
import { BsBank, BsFileText, BsRocket } from "react-icons/bs";
import { RiGraduationCapLine, RiMoneyDollarCircleLine } from "react-icons/ri";

import post1 from "./blog/post1.png";
import post1comment1 from "./blog/post1comment1.png";
import post1comment2 from "./blog/post1comment2.png";
import post1comment3 from "./blog/post1comment3.png";
import post1comment4 from "./blog/post1comment4.png";
import post1comment5 from "./blog/post1comment5.png";
import post1comment6 from "./blog/post1comment6.png";
import post2 from "./blog/post2.png";
import post2comment1 from "./blog/post2comment1.png";
import post2comment2 from "./blog/post2comment2.png";
import post2comment3 from "./blog/post2comment3.png";
import post2comment4 from "./blog/post2comment4.png";
import post2comment5 from "./blog/post2comment5.png";
import post3 from "./blog/post3.png";
import post3comment1 from "./blog/post3comment1.png";
import post3comment2 from "./blog/post3comment2.png";
import post3comment3 from "./blog/post3comment3.png";
import post3comment4 from "./blog/post3comment4.png";
import post4 from "./blog/post4.png";
import post4comment1 from "./blog/post4comment1.png";
import post4comment2 from "./blog/post4comment2.png";
import post4comment3 from "./blog/post4comment3.png";
import post4comment4 from "./blog/post4comment4.png";
import post5 from "./blog/post5.png";
import post5comment1 from "./blog/post5comment1.png";
import post5comment2 from "./blog/post5comment2.png";
import post5comment3 from "./blog/post5comment3.png";
import post6 from "./blog/post6.png";
import post6comment1 from "./blog/post6comment1.png";
import post6comment2 from "./blog/post6comment2.png";
import post6comment3 from "./blog/post6comment3.png";
import post6comment4 from "./blog/post6comment4.png";
import post6comment5 from "./blog/post6comment5.png";
import post6comment6 from "./blog/post6comment6.png";
import { IoIosSettings, IoMdBriefcase } from "react-icons/io";

export const emailRegex = new RegExp(
  "^[_a-z0-9-]+([_a-z0-9-]+)*@[a-z0-9-]+([a-z0-9-]+).([a-z]{2,3})$"
);

export const routes = [
  { name: "Início", to: "/" },
  { name: "Quem Somos", to: "/quem-somos" },
  { name: "Blog", to: "/blog" },
  { name: "Seja Parceiro", to: "/seja-parceiro" },
];

export const publicRoutes = [
  {
    name: "SEMED",
    to: "https://semed.geduc.com.br/index.php?class=LoginForm",
  },
  { name: "Contratos", to: "https://contratos.geduc.com.br/login" },
  {
    name: "Escola",
    to: "https://semed.geduc.com.br/index.php?class=LoginForm",
  },
  {
    name: "Professor",
    to: "https://professor.geduc.com.br/index.php?class=LoginForm",
  },
  {
    name: "Aluno",
    to: "https://aluno.geduc.com.br/index.php?class=LoginForm",
  },
];

export const privateRoutes = [
  {
    name: "Escola",
    to: "https://semed.geduc.com.br/index.php?class=LoginForm",
  },
  {
    name: "Professor",
    to: "https://professor.geduc.com.br/index.php?class=LoginForm",
  },
  {
    name: "Aluno",
    to: "https://aluno.geduc.com.br/index.php?class=LoginForm",
  },
];

export const appTeacher = [
  {
    name: "Apple Store",
    to: "https://apps.apple.com/br/app/geduc-professor/id1538751276",
  },
  {
    name: "Play Store",
    to: "https://play.google.com/store/apps/details?id=br.com.geduc.professor",
  },
];

export const appStudent = [
  {
    name: "Apple Store",
    to: "https://apps.apple.com/br/app/geduc-class/id1534929068",
  },
  {
    name: "Play Store",
    to: "https://play.google.com/store/apps/details?id=br.com.geduc.geducclass.app",
  },
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
  {
    name: "Raimoneey Hermison",
    city: "Fortuna - MA",
    opinion:
      "“No decorrer de sete anos sempre acompanhei meus dados estatísticos em geral de forma rápida e eficiente, nos momentos mais necessários na gestão de informações sempre tive o suporte eficaz”",
  },
  {
    name: "Jose Nilton Vieira",
    city: "Itinga do Maranhão - MA",
    opinion:
      "“O nosso antigo sistema não transmitia a segurança e confiabilidade que precisávamos. Ao aderirmos o GEDUC, podemos ter segurança e confiabilidade nos dados que tem no sistema.”",
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
  {
    icon: AiOutlineInstagram,
    link: "https://www.instagram.com/geduc.educacao",
  },
  {
    icon: AiOutlineWhatsApp,
    link: "https://api.whatsapp.com/send/?phone=5585994323201",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/company/geduc-soluções/",
  },
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
    color: "--blue",
  },
  {
    text: "Mapear os processos que podem ser automatizados e otimizados.",
    color: "--green",
  },
  {
    text: "Apresentar um walkthrough personalizado da plataforma.",
    color: "--primary-blue",
  },
  {
    text: "Esclarecer todas as dúvidas e traçar um potencial roteiro de implementação.",
    color: "--orange",
  },
];

export const posts: PostInterface[] = [
  {
    img: post1,
    title:
      "Integração de Dados na Gestão Escolar: Unindo Pedagógico e Administrativo",
    subTitle: "para uma Tomada de Decisão Mais Eficaz e Personalizada",
    texts: [
      "A gestão escolar enfrenta o desafio de unificar as vertentes <span>pedagógica, administrativa e financeira</span> de maneira eficiente. <span>A integração de dados se apresenta como uma solução poderosa</span> permitindo uma <span>visão holística da escola</span> e capacitando os gestores a tomarem <span>decisões estratégicas mais embasadas.</span>",
      "Integrar dados de diferentes setores em uma <span>única plataforma</span> oferece aos gestores uma <span>visão panorâmica.</span> Este sistema unificado permite, por exemplo, <span>correlacionar dados de desempenho acadêmico com informações financeiras</span>, identificando as causas de problemas como a evasão escolar. Com essas informações, a gestão pode <span>desenvolver planos de ação específicos</span> para corrigir falhas antes invisíveis.",
      "Outro benefício crucial é a <span>capacidade de resposta rápida</span> às demandas internas e de órgãos reguladores. <span>Possuir uma plataforma centralizada</span> permite que relatórios de prestação de contas sejam <span>gerados automaticamente</span> com dados em tempo real, <span>economizando tempo e recursos humanos.</span> Assim, o foco pode ser realocado para o <span>desenvolvimento de estratégias educacionais.</span>",
      "Em conclusão, a <span>integração de dados na gestão escolar é necessária</span> para enfrentar os desafios da educação pública. Ao promover a interconexão dos diferentes aspectos, as instituições se tornam <span>mais resilientes, eficientes e ágeis</span>. A <span>tecnologia e a inovação são motores essenciais</span> para essa transformação.",
    ],
    cardText:
      "A gestão escolar enfrenta o desafio contínuo de unificar diferentes vertentes, como o pedagógico, administrativo e financeiro, de maneira eficiente. A integração de dados se...",
    comments: [
      {
        img: post1comment1,
        name: "Ana Claudia",
        comment:
          "Finalmente um texto que aborda o cerne da questão! Na prática, a falta de integração nos faz perder horas cruzando planilhas manualmente. Unir o pedagógico ao financeiro é a chave para entender, de fato, por que alguns alunos abandonam os estudos.",
      },
      {
        img: post1comment2,
        name: "Carlos Eduardo",
        comment:
          "A ideia é excelente, mas preocupa a execução. Já vi muitos sistemas 'unificados' que são complexos e tomam o tempo que deveria ser em sala.",
      },
      {
        img: post1comment3,
        name: "João Pedro",
        comment:
          "Como pai, fico pensando como isso pode melhorar a comunicação com a escola. Se a gestão tem uma visão completa, significa que poderiam me alertar se meu filho começar a ter queda nas notas ou faltas.",
      },
      {
        img: post1comment4,
        name: "Roberto Silva",
        comment:
          "Vejo um potencial enorme para a personalização do ensino. Ao integrar dados de desempenho com informações de frequência e até socioeconômicas",
      },
      {
        img: post1comment5,
        name: "Marina Costa",
        comment:
          "O artigo acerta ao destacar a visão holística, mas é importante lembrar que a integração de dados exige um cuidado enorme com a LGPD. Unir tudo em uma plataforma é poderoso, mas também concentra riscos.",
      },
      {
        img: post1comment6,
        name: "Patrícia Mendes",
        comment:
          "Este é o futuro da gestão pública. A capacidade de gerar relatórios automáticos para prestação de contas é um avanço imenso em eficiência.",
      },
    ],
  },
  {
    img: post2,
    title: "Como Eliminar Filas e Erros nos Processos de Matrícula Escolar",
    subTitle: "Estratégias Comprovadas para uma Gestão Eficiente",
    texts: [
      "A matrícula escolar é um dos momentos mais críticos no calendário de qualquer instituição de ensino, gerando filas intermináveis, pais frustrados, documentos perdidos e erros administrativos. Esses problemas comprometem a eficiência da gestão escolar, resultando em frustração para as famílias, ineficiência administrativa, erros humanos e impacto financeiro.",
      "A solução para transformar esse processo em algo rápido, organizado e livre de erros está na adoção de tecnologias e estratégias modernas. As principais soluções práticas incluem:",
      "<ul><li>Adotar sistemas de matrícula online, que oferecem formulários digitais padronizados, acessibilidade e centralização de dados.</li><li>Automatizar a validação de documentos com integração com bases de dados oficiais e alertas automáticos.</li><li>Capacitar a equipe administrativa com treinamentos regulares e suporte técnico.</li><li>Oferecer múltiplos canais de comunicação, como e-mails, SMS, chatbots e portais de autoatendimento.</li><li>Planejar a logística com antecedência, incluindo escalonamento de matrículas e simulações prévias.</li></ul>",
      "Os benefícios de um processo eficiente são maior satisfação da comunidade, redução de custos, dados mais confiáveis e a capacidade de focar no que importa: a qualidade da educação.",
      "O primeiro passo para implementar essa mudança é avaliar as ferramentas disponíveis, considerando soluções gratuitas ou parcerias, e iniciar com um projeto-piloto em pequena escala para testar e ajustar a solução",
      "Conclui-se que eliminar filas e erros na matrícula é uma necessidade para modernizar a gestão educacional, transformando um momento desafiador em uma oportunidade de engajar a comunidade e otimizar recursos.",
    ],
    cardText:
      "A educação pública no Brasil enfrenta desafios contínuos para assegurar que todos os estudantes alcancem seu pleno potencial acadêmico. Uma ferramenta poderosa e cada vez...",
    comments: [
      {
        img: post2comment1,
        name: "Claudio Viana",
        comment:
          "A resistência à tecnologia era nosso maior inimigo. Depois que treinamos a equade e adotamos o sistema online, ganhamos tempo para focar em coisas mais importantes, como o pedagógico",
      },
      {
        img: post2comment2,
        name: "Eduarda Costa",
        comment:
          "É um exemplo perfeito de como a tecnologia não deve substituir pessoas, mas sim eliminar tarefas burocráticas para que os profissionais possam ser mais estratégicos e humanos",
      },
      {
        img: post2comment3,
        name: "Olivia S.",
        comment:
          "Como representante dos professores, vejo que menos erros na matrícula significam turmas melhor formadas no primeiro dia de aula. Isso impacta diretamente no planejamento das nossas aulas.",
      },
      {
        img: post2comment4,
        name: "Prof. Otávio",
        comment:
          "Achei complicado no começo, tive que pedir ajuda para preencher o formulário online. As escolas precisam oferecer suporte para quem não é tão familiarizado com a tecnologia.",
      },
      {
        img: post2comment5,
        name: "Coord. Diana",
        comment:
          "Como representante dos professores, vejo que menos erros na matrícula significam turmas melhor formadas no primeiro dia de aula. Isso impacta diretamente no planejamento das nossas aulas.",
      },
    ],
  },
  {
    img: post3,
    title: "Automação na Gestão Escolar: Reduzindo Retrabalho",
    subTitle: "para uma Tomada de Decisão Mais Eficaz e Personalizada",
    texts: [
      "A <span>gestão escolar no Brasil enfrenta desafios diários</span> com recursos limitados e equipes sobrecarregadas. A <span>automatização de processos repetitivos</span> surge como uma necessidade para otimizar o trabalho geracional, permitindo que as equipes se concentrem no que realmente importa: <span>a educação.</span>",
      "Um dos maiores benefícios é a <span>automatização de tarefas administrativas</span>, como a <span>gestão de matrículas</span> e a <span>emissão de boletins escolares</span>. A <span>digitalização e automatização</span> do processo de matrícula <span>elimina a necessidade de papéis</span> e diminui significativamente o tempo gasto com conferência de documentos. A <span>emissão automática de boletins</span> reduz erros humanos e proporciona <span>relatórios mais precisos.</span>",
      "Outro ponto crucial é <span>facilitar a comunicação com famílias e comunidade</span>. Plataformas automatizadas <span>enviam comunicados e notificações em tempo real</span> via aplicativos ou e-mails, criando uma <span>comunicação mais direta e eficiente</span> e promovendo um <span>ambiente mais colaborativo.</span>",
      "Por fim, a <span>integração de dados e análise de desempenho</span> é transformada. <span>Dashboards integrados</span> consolidam dados de frequência e desempenho, <span>reduzindo o trabalho manual</span> de coleta e permitindo o acesso a <span>insights valiosos</span> para <span>decisões pedagógicas e administrativas</span> baseadas em evidências.",
      "Em conclusão, a <span>automação de processos na gestão escolar</span> é uma poderosa ferramenta para <span>aliviar o retrabalho</span> das equipes, capacitando educadores a tomarem <span>decisões mais informadas e estratégicas</span> e transformando as instituições em exemplos de <span>eficiência e inovação.</span>",
    ],
    cardText:
      "A matrícula escolar é um dos momentos mais críticos no calendário de qualquer instituição de ensino, gerando filas intermináveis, pais frustrados, documentos perdidos e erros administrativos...",
    comments: [
      {
        img: post3comment1,
        name: "Kaio Diretor",
        comment:
          "Desde que automatizamos as matrículas e a emissão de boletins, nossa equipe ganhou horas preciosas. Agora podemos focar em projetos pedagógicos em vez de ficar presos em papelada. A mudança foi radical.",
      },
      {
        img: post3comment2,
        name: "Jorge Coord.",
        comment:
          "No começo tive medo da tecnologia, mas agora não vivo sem. Deixar de preenchar tudo manualmente e ter os dados integrados acabou com os erros e a duplicação de trabalho. Melhorou muito meu dia a dia",
      },
      {
        img: post3comment3,
        name: "Prof. Gabriel",
        comment:
          "Receber as notificações pelo celular mudou tudo. Fico sabendo na hora sobre faltas, eventos e boletins. A comunicação com a escola ficou muito mais fácil e transparente. Me sinto muito mais presente.",
      },
      {
        img: post3comment4,
        name: "Prof. Danilo",
        comment:
          "Ter acesso a dashboards com os dados dos alunos é incrível para planejar minhas aulas.",
      },
    ],
  },
  {
    img: post4,
    title: "O Futuro da Educação: Transformação Tecnológica na Gestão Escolar",
    subTitle:
      "Desafios Atuais da Gestão Escolar e Como a Tecnologia Pode Superá-los",
    texts: [
      "A educação pública no Brasil enfrenta <span>desafios contínuos</span> para assegurar que todos os estudantes alcancem seu pleno potencial, e a <span>tecnologia</span> surge como uma ferramenta poderosa e essencial para enfrentá-los.",
      "As principais estratégias apresentadas são:",
      "<ul class='blog-post-decimal'><li><span>Implementar plataformas de gerenciamento de aprendizado</span> para coletar e analisar dados sobre o desempenho, frequência e envolvimento dos alunos. Isso permite identificar rapidamente estudantes que necessitam de atenção especial e alocar recursos de forma adequada.</li><li>Utilizar a <span>personalização do ensino</span> por meio de <span>ferramentas de aprendizado adaptativo</span> com inteligência artificial. Essas ferramentas <span>ajustam o conteúdo e a dificuldade</span> conforme as necessidades individuais, criando um <span>currículo sob medida</span> que aumenta a motivação e melhora os resultados.</li><li><span>Incluir atividades interativas</span>, como <span>módulos de gamificação e realidade aumentada</span>, para tornar a experiência educacional <span>mais envolvente</span> e contribuir para a retenção do conhecimento.</li></ul>",
      "Em suma, a <span>tecnologia aplicada à educação</span> possui um <span>potencial transformador</span> inquestionável. Ela fornece os <span>insights críticos</span> necessários para uma tomada de decisão ágil e fundamentada, permite uma <span>abordagem pedagógica altamente personalizada</span> que respeita as individualidades e, por fim, cria <span>ambientes de aprendizagem ricos, interativos e inclusivos</span>. A transformação digital na educação pública brasileira é, portanto, muito mais do que uma opção: é um <span>imperativo estratégico</span> e uma <span>necessidade urgente</span> para construir um sistema educacional mais equânime, eficiente e preparado para capacitar os cidadãos e profissionais que irão liderar os desafios e oportunidades do século XXI. Cabe aos gestores educacionais em todas as esferas abraçar esta agenda, <span>fomentando a integração consciente e crítica</span> dessas tecnologias no cotidiano das escolas.",
    ],
    cardText:
      "Administrar o transporte escolar é um grande desafio, mas é possível torná-lo mais eficiente com organização e tecnologia, reduzindo custos, otimizando processos e aumentando a confiança das famílias...",
    comments: [
      {
        img: post4comment1,
        name: "Professora Maria",
        comment:
          "Vejo com certa cautela essa onda de tecnologia. Não duvido que possa ajudar, mas já vi modismos passarem e deixarem mais problemas que soluções. Precisamos de investimento em estrutura básica antes de tablets e plataformas sofisticadas.",
      },
      {
        img: post4comment2,
        name: "Dr. Ricardo",
        comment:
          "A tecnologia tem potencial transformador, mas seu uso deve ser criticamente orientado por políticas públicas consistentes.",
      },
      {
        img: post4comment3,
        name: "João Ricardo",
        comment:
          "A transformação tecnológica não é mais uma opção é uma necessidade. Com ferramentas como a GEDUC, conseguimos identificar problemas de evasão e rendimento em tempo real, algo impensável há alguns anos. Isso permite agir antes que seja tarde.",
      },
      {
        img: post4comment4,
        name: "Coord. Paula",
        comment:
          "Acho que a tecnologia nas escolas pode ser incrível, mas tem que ser bem usada. Já tive professor que só passava slide velho e chamava isso de 'aula digital'. Precisamos de coisas que realmente engajem, como jogos, simulações, aulas com realidade virtual.",
      },
    ],
  },
  {
    img: post5,
    title: "Como Tornar a Gestão do Transporte Escolar mais Eficiente",
    subTitle:
      "Estratégias Práticas para Otimizar a Gestão do Transporte Escolar",
    texts: [
      "Administrar o transporte escolar é um grande desafio, mas é possível torná-lo <span>mais eficiente</span> com <span>organização e tecnologia, reduzindo custos, otimizando processos e aumentando a confiança das famílias.</span>",
      "A base da eficiência começa com o <span>planejamento de rotas inteligentes</span>, que deve <span>utilizar softwares de roteirização automática</span> para mapear endereços, organizar pontos de coleta e evitar deslocamentos desnecessários, economizando <span>combustível</span> e reduzindo o <span>tempo dos trajetos.</span>",
      "Outro pilar fundamental é a <span>comunicação transparente com as famílias</span>. Ferramentas como apps com <span>notificações push</span> sobre embarque e desembarque, e <span>canais de atendimento direto</span>, são essenciais para dar <span>tranquilidade aos pais</span> e evitar confusões.",
      "O controle financeiro e <span>operacional eficiente</span> é alcançado através da automação, que traz transparência com a <span>geração automática de boletos</span> e <span>relatórios financeiros</span> para acompanhar receitas e custos com <span>manutenção e combustíveis.</span>",
      "Por fim, a <span>segurança</span> é ampliada pelo <span>monitoramento em tempo real</span> com <span>sistemas de rastreamento (GPS), alertas de desvios e controle de velocidade</span>, oferecendo <span>histórico de percursos para auditorias</span> e maior confiança para a comunidade.",
      "A eficiência na gestão do transporte escolar depende da <span>integração de processos, tecnologia</span> e <span>comunicação.</span>",
    ],
    cardText:
      "A gestão escolar no Brasil enfrenta desafios diários, desde tarefas administrativas complexas até a necessidade de melhorar a experiência de aprendizagem dos alunos. Com recursos...",
    comments: [
      {
        img: post5comment1,
        name: "Paula",
        comment:
          "A notificação no celial quando o ônibus está chegando é fantástica! Acabou a minha ansiedade de ficar esperando no ponto com meu filho no sol ou na chuva. Segurança e praticidade que fazem toda a diferença.",
      },
      {
        img: post5comment2,
        name: "Marcos",
        comment:
          "Implementar um software de roteirização foi um divisor de águas. Reduzimos drasticamente nossos custos com combustível e conseguimos otimizar o tempo dos motoristas. O retorno financeiro e operacional foi imediato.",
      },
      {
        img: post5comment3,
        name: "Sônia",
        comment:
          "O GPS e o controle de rota facilitam muito meu dia a dia, mas a pressão por pontualidade absoluta e ser monitorada o tempo todo pode ser estressante.",
      },
    ],
  },
  {
    img: post6,
    title: "O Impacto dos Dados na Retenção Escolar",
    subTitle: "Como a Gestão de Dados Pode Combater a Evasão Escolar",
    texts: [
      "<span>A gestão eficaz de dados tem se tornado um alicerce essencial para a retenção de alunos</span> na educação pública brasileira. Num contexto onde a <span>evasão escolar continua sendo um desafio significativo</span>, o uso de <span>dados precisos e bem geridos</span> oferece <span>insights valiosos</span> para os gestores, permitindo a <span>identificação precoce de sinais de risco de evasão</span> e a <span>criação de estratégias direcionadas.</span>",
      "O principal benefício é a <span>capacidade de monitorar e analisar o desempenho e a frequência dos alunos em tempo real</span>. Ao <span>identificar padrões de queda de desempenho ou aumento de faltas</span>, a escola pode <span>agir proativamente</span>, oferecendo <span>suporte acadêmico</span> ou <span>psicossocial</span> antes do abandono.",
      "Além disso, os dados ajudam a <span>mapear o envolvimento</span> e a <span>participação em atividades extracurriculares</span>, revelando que estudantes envolvidos nessas atividades <span>tendem a permanecer mais tempo na escola</span> por encontrarem um <span>senso de pertencimento e motivação.</span>",
      "Outro aspecto crucial é a <span>personalização do aprendizado</span>, facilitada pela análise de dados. Com informações sobre <span>estilo de aprendizado, interesses e necessidades individuais</span>, as escolas podem adaptar suas <span>abordagens pedagógicas</span>, melhorando a <span>experiência de aprendizado</span> e o <span>engajamento do aluno</span>.",
      "Em suma, a <span>gestão de dados tem um papel transformador na retenção de estudantes</span>, permitindo a construção de um <span>sistema educacional mais inclusivo e eficiente</span>.",
    ],
    cardText:
      "A gestão eficaz de dados tem se tornado um alicerce cada vez mais essencial para a retenção de alunos na educação pública brasileira. No contexto...",
    comments: [
      {
        img: post6comment1,
        name: "Pedro, Diretor",
        comment:
          "Desde que começamos a cruzar dados de frequência e notas, conseguimos intervir a tempo em dezenas de casos. É a diferença entre perder um aluno e salvar um futuro.",
      },
      {
        img: post6comment2,
        name: "Guilhermina, Professora",
        comment:
          "Os dados me mostram qual aluno está desconectado antes da prova final. Agora posso puxar uma conversa e oferecer ajuda específica. Mudou minha forma de lecionar.",
      },
      {
        img: post6comment3,
        name: "Fabrício, Gestor",
        comment:
          "Os dados me mostram qual aluno está desconectado antes da prova final. Agora posso puxar uma conversa e oferecer ajuda específica. Mudou minha forma de lecionar.",
      },
      {
        img: post6comment4,
        name: "Mariana, Estudante",
        comment:
          "Me recomendaram um clube de robótica porque viram que eu curtia exatas. Foi onde me achei na escola. Dados podem ser legais sim!",
      },
      {
        img: post6comment5,
        name: "João, Gestor",
        comment:
          "O maior desafio é treinar as equipes para usar os dados, não só coletá-los. Precisamos de mais capacitação para transformar números em ação.",
      },
      {
        img: post6comment6,
        name: "Laura, Psicóloga ",
        comment:
          "Os dados são um termômetro social. Eles não mentem: mostram a relação direta entre vulnerabilidade econômica e risco de evasão. Precisamos de políticas baseadas nisso.",
      },
    ],
  },
];

export const commission = [
  {
    icon: MdOutlineHandshake,
    color: "#2EA98C",
    size: 40,
    title: "Para Parceiros Estratégicos",
    desc: "Para parceiros que vão além da indicação.",
  },
  {
    icon: BsBank,
    color: "#FE8E22",
    size: 32,
    title: "Foco no Setor Público",
    desc: "Para quem entende do setor público.",
  },
  {
    icon: RiMoneyDollarCircleLine,
    color: "#FDCE17",
    size: 42,
    title: "Simplicidade e Resultados",
    desc: "Com renda constante sem complexidade.",
  },
];

export const acting = [
  {
    title: "Indicação",
    desc: "Você indica o cliente interessado no GEDUC",
  },
  {
    title: "Negociação",
    desc: "Nossa equipe cuida de todo o processo comercial",
  },
  {
    title: "Implantação e suporte",
    desc: "Implementamos e damos suporte completo ao cliente",
  },
  {
    title: "Ganhos recorrentes",
    desc: "Você recebe comissões enquanto durar o contrato",
  },
];

export const partnershipModels = [
  {
    category: "Mais Simples",
    title: "Indicação",
    subTitle: "Apoio Total na Venda",
    commission: "10% recorrente por 2 anos",
    desc: "Indique o cliente e o GEDUC cuida de tudo",
    advantages: [
      "Você apenas indica o lead qualificado",
      "GEDUC conduz toda a negociação",
      "Suporte e implantação por nossa conta",
      "Sem necessidade de estrutura comercial",
    ],
  },
  {
    category: "Mais Popular",
    title: "Representação",
    subTitle: "Você assume o comercial",
    commission: "30% recorrente durante o contrato",
    desc: "Você assume o processo comercial completo",
    advantages: [
      "Controle total do processo de vendas",
      "Materiais de apoio comercial",
      "Suporte técnico para suas apresentações",
      "GEDUC cuida da implantação e suporte",
    ],
  },
  {
    category: "Máximo Controle",
    title: "White Label",
    subTitle: "Liberdade total",
    commission: "Comissão definida pelo parceiro",
    desc: "Atue com sua marca e total liberdade de preços",
    advantages: [
      "Use sua própria marca",
      "Defina seus próprios preços",
      "Gestão completa do cliente",
      "Gestão completa do cliente",
    ],
  },
];

export const partnershipSteps = [
  {
    icon: MdHeadset,
    title: "Suporte técnico e comercial",
    descc: "Equipe dedicada para apoiar você em todas as etapas",
  },
  {
    icon: AiOutlineFileText,
    title: "Materiais de divulgação prontos",
    descc: "Apresentações, vídeos e conteúdos para facilitar suas vendas",
  },
  {
    icon: RiGraduationCapLine,
    title: "Treinamento contínuo",
    descc: "Capacitação constante sobre o produto e mercado",
  },
  {
    icon: AiOutlineBarChart,
    title: "Relatórios e acompanhamento",
    descc: "Dashboard com métricas e performance em tempo real",
  },
];

export const parceriaCards = [
  {
    icon: AiOutlineSync,
    size: 32,
    title: "Receita Recorrente",
    text: "Transforme suas indicações em renda contínua, recebendo comissões sempre que seus clientes utilizam a plataforma.",
  },
  {
    icon: MdSupportAgent,
    size: 32,
    title: "Suporte Completo",
    text: "Tenha o apoio da nossa equipe em todas as etapas — do aprendizado às vendas.",
  },
  {
    icon: BsRocket,
    size: 32,
    title: "Tecnologia Líder",
    text: "Apresente uma plataforma inovadora e reconhecida por melhorar a gestão educacional.",
  },
  {
    icon: MdOutlineMoneyOff,
    size: 32,
    title: "Zero Custos de Implantação",
    text: "Torne-se parceiro sem nenhum investimento inicial. Simples, rápido e gratuito.",
  },
  {
    icon: BsFileText,
    size: 28,
    title: "Materiais de Vendas",
    text: "Receba conteúdos prontos que facilitam suas abordagens e aumentam suas conversões.",
  },
  {
    icon: AiOutlineEnvironment,
    size: 32,
    title: "Expansão Nacional",
    text: "Atue em qualquer região do país e amplie suas oportunidades de negócio com um produto escalável.",
  },
];

export const partnerTypes = [
  {
    icon: IoMdBriefcase,
    size: 60,
    title: "Representantes Comerciais",
    iconClass: "types-greenIcon",
    titleClass: "types-greenTitle",
    bg: "types-cardGreen",
  },
  {
    icon: FaGraduationCap,
    size: 60,
    title: "Consultores Educacionais",
    iconClass: "types-orangeIcon",
    titleClass: "types-orangeTitle",
    bg: "types-cardOrange",
  },
  {
    icon: IoIosSettings,
    size: 60,
    title: "Empresas de Tecnologia",
    iconClass: "types-yellowIcon",
    titleClass: "types-yellowTitle",
    bg: "types-cardYellow",
  },
  {
    icon: FaUser,
    size: 55,
    title: "Autônomos ou Freelancers",
    iconClass: "types-blueIcon",
    titleClass: "types-blueTitle",
    bg: "types-cardBlue",
  },
];

export const questionsCards = [
  {
    question: "Preciso ter CNPJ?",
    text: "<span>Não</span>. Você pode atuar como <span>pessoa física</span> ou <span>jurídica</span>. Somente o modelo <span>White Label</span> recomenda <span>CNPJ</span> por envolver faturamento próprio.",
  },
  {
    question: "Como receber comissão?",
    text: "O pagamento é mensal, baseado nos contratos ativos que você trouxe.<ul><li><span>Indicação</span>: você indica, o GEDUC fecha e você recebe comissão.</li> <li><span>Parceria</span>: você participa da venda e ganha percentual maior.</li><li><span>White Label</span>: você vende com sua marca, define o preço e fica com o lucro.</li></ul>",
  },
  {
    question: "Quem faz implantação?",
    text: "O time do GEDUC realiza <span>implantação</span>, <span>treinamento</span> e <span>suporte</span> sempre. Mesmo no <span>White Label</span>, sua marca aparece, mas a operação é 100% GEDUC.",
  },
  {
    question: "Posso mudar de modalidade?",
    text: "<span>Sim!</span> Você pode começar no modo <span>Indicação</span> e migrar para <span>Parceria</span> ou <span>White Label</span> quando quiser. Só fazemos uma revisão rápida para ajustar ao seu volume de vendas.",
  },
  {
    question: "Existe fidelidade?",
    text: "Para o <span>parceiro, não</span>. Você atua quando quiser, sem metas mínimas. A fidelidade vale apenas para o <span>cliente final</span>, conforme contrato do GEDUC.",
  },
];
 