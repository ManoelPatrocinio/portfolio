import "./style.css";
import Myself from "./assets/images/mySelf.jpg";
import SkillsHeaderImg from "./assets/images/Coding_SVG.svg";
import FoxImg from "./assets/images/fox.png";
import IconStyledComponets from "./assets/images/icons_styledcomponents.png";
import IconTypeScript from "./assets/images/icons_typescript.png";

import { NavBar } from "./components/NavBar";
import { Card_Project } from "./components/Card_Project";
import { useState } from "react";
import ProjectsListJson from "./datas/projects.json";

export function Home() {
  const [projectType, setProjectType] = useState(ProjectsListJson);
  const [showMenu, setShowMenu] = useState<boolean>(false)

  function filterByType(type: string) {
    if (type === "Todos") {
      setProjectType(ProjectsListJson);
    } else {
      const filtedList = ProjectsListJson.filter((p) => p.type == type);
      filtedList && setProjectType(filtedList);
    }
  }

  return (
    <main className={ showMenu ? "show-menu" : ""}>
      <header id="main_header">
        <div className="hamburguer" onClick={()=>{setShowMenu(!showMenu)}}>
          <div className="line" id="line1"></div>
          <div className="line" id="line2"></div>
          <div className="line" id="line3"></div>
          <span>fechar</span>
        </div>
        <NavBar />
        <div className="banner">
          <h1 id="banner__apresentation-text">
            Olá, <br />
            Eu sou o <span id="myName">Manoel</span>
            <br />
            <span id="banner__text-occupation"> Desenvolvedor Web</span>
          </h1>
          <p id="banner__skill-text">Front End | Back End | UI/UX Designer</p>

          <a
            className="banner__btn_download-cv"
            href="../../assets/docs/Curriculo_Manoel_Patrocinio.pdf"
            download="ManoelPatrocinioCV"
          >
            Download CV
          </a>
        </div>
      </header>

      <aside className="menu_sidebar">
        <nav>
          <ul className="menu">
            <li className="menu-item">
              <a href="#" className="menu-link">
                Home
              </a>
            </li>
            <li className="menu-item">
              <a href="#about_Me" className="menu-link">
                Sobre Mim
              </a>
            </li>
            <li className="menu-item">
              <a href="#skills" className="menu-link">
                Skills
              </a>
            </li>
            <li className="menu-item">
              <a href="#projects" className="menu-link">
                Projetos
              </a>
            </li>
            <li className="menu-item">
              <a href="#contact" className="menu-link">
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <div className="social-media">
          <a target="_blank" href="https://www.instagram.com/patrocinioiii/">
            <i className="fab fa-instagram"></i>
          </a>
          <a target="_blank" href="https://github.com/ManoelPatrocinio">
            <i className="fab fa-github-alt"></i>
          </a>
          <a
            target="_blank"
            href="https://linkedin.com/in/manoel-patrocinio-1b342b203"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </aside>

      <section className="C_aboutMe" id="about_Me">
        <header className="section-header">
          <h1>Sobre Mim</h1>
        </header>
        <main id="aboutMe_Content">
          <div id="MySelf">
            <img src={Myself} alt="Manoel Patrocinioa" />
          </div>

          <div id="text_aboutMe">
            <p>
              Olá, eu sou o Manoel, tenho 22 anos e moro na cidade de Barra-Ba.
              Atualmente estou cursando do 7º semestre do curso de Análise e
              Desenvolvimento de sistemas, ofertado pelo IFBA-Campus Irecê.
            </p>
            <p>
              Mas, estudo sobre Desenvolvimento web desde 2017, e desde então,
              estou em um caminho de aprendizado contínuo, rumo ao objetivo
              profissional de ser um desenvolvedor full stack de excelência.
            </p>
          </div>
        </main>
      </section>

      <section className="C_skills" id="skills">
        <div className="C_skills_header">
          <img id="skill_Header_Img" src={SkillsHeaderImg}></img>
          <p className="TextinProgress">Always learning</p>
        </div>

        <div className="skills">
          <div className="skill">
            <div className="skill-header">
              <i className="fab fa-react"></i>
              <h3>React JS</h3>
            </div>
            <div className="skill-text left">
              <p>
                Biblioteca JavaScript de código aberto, com foco na criação de
                interfaces de usuário, e aplicações web componentisadas e
                escaláveis .
              </p>
            </div>
          </div>
          <div className="skill">
            <div className="skill-header">
              <i className="fab fa-bootstrap"></i>
              <h3>BootStrap</h3>
            </div>
            <div className="skill-text left">
              <p>
                Para agilidade no desenvolvimento e padronização na construção
                de projetos.
              </p>
            </div>
          </div>

          <div className="skill">
            <div className="skill-header">
              <img
                src={IconStyledComponets}
                alt="Styled Components"
                className="skills_icon"
              />
              <h3>Styled Components</h3>
            </div>
            <div className="skill-text left">
              <p>
                Biblioteca para React e React Native que permite que você use
                estilos ao nível de componente na sua aplicação.
              </p>
            </div>
          </div>
          <div className="skill">
            <div className="skill-header">
              <img
                src={IconTypeScript}
                alt="type script"
                className="skills_icon"
              />
              <h3>Typescript</h3>
            </div>
            <div className="skill-text right">
              <p>
                Linguagem que nos permite adicionar tipagens no código JS,
                Possibilitando maior padronização e controlhe de erros.
              </p>
            </div>
          </div>

          <div className="skill">
            <div className="skill-header">
              <i className="fab fa-node-js"></i>
              <h3>Node JS</h3>
            </div>
            <div className="skill-text right">
              <p>
                Software de código aberto, multiplataforma, baseado no
                interpretador V8 do Google e que permite a execução de códigos
                JavaScript fora de um navegador web.
              </p>
            </div>
          </div>
          <div className="skill">
            <div className="skill-header">
              <i className="fas fa-database"></i>
              <h3>MongoDB e Postgre</h3>
            </div>
            <div className="skill-text right">
              <p>
                Banco de dados NoSQL e relacional, para protrotipação e
                construção de toda a base de dados da aplicação
              </p>
            </div>
          </div>
          <div className="skills-img-wrapper">
            <img src={FoxImg} alt="Fox Image" />
          </div>
        </div>
      </section>

      <section className="C_projects" id="projects">
        <header className="section-header">
          <h1>Projetos</h1>

          <ul className="C_projects__types_content">
            <li
              className="C_projects__header_types"
              onClick={() => filterByType("Todos")}
            >
              Todos
            </li>
            <li
              className="C_projects__header_types"
              onClick={() => filterByType("site")}
            >
              Sites
            </li>
            <li
              className="C_projects__header_types"
              onClick={() => filterByType("API")}
            >
              APIs
            </li>
            <li
              className="C_projects__header_types"
              onClick={() => filterByType("Layouts")}
            >
              Layouts
            </li>
          </ul>
        </header>

        <div className="C_projects__card_container">
          {projectType?.map((p, index) => {
            return <Card_Project project={p} key={index} />;
          })}
        </div>
        <footer className="C_projects__footer">
          <p>
            <a href="https://github.com/ManoelPatrocinio" target="_blank">
              Clique Aqui
            </a>
            <br />
            para conferir todos os meus projetos no Github
          </p>
        </footer>
      </section>

      <section className="C_contact" id="contact">
        <header className="section-header">
          <h1>Contato</h1>
        </header>
        <article className="C_contact__container">
          <div className="C_contact__content C_contact_left">
            <h2>Entre em contato</h2>
            <p>
              Se quiser falar sobre uma ideia ou papear, não se acanhe, pode me
              mandar mensagem pelo meio disponiveis.
            </p>
            <ul className="C_menu_social_links">
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/patrocinioiii/"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/manoel-patrocinio/"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/ManoelPatrocinio">
                  <i className="fab fa-github-alt"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="C_contact__content C_contact_right">
            <form
              action="https://formsubmit.co/manoelpatrocinio99@gmail.com"
              method="POST"
              className="C_contact_right__form"
            >
              <div className="input_group">
                <label htmlFor="yourEmail">Seu E-mail</label>
                <input type="email" name="email" id="yourEmail" required />
              </div>
              <div className="input_group">
                <label htmlFor="yourMessage">Seu E-mail</label>

                <textarea
                  id="yourMessage"
                  placeholder="Your Message"
                  className="form-control"
                  name="message"
                  rows={3}
                  required
                ></textarea>
              </div>
              <input
                type="hidden"
                name="_next"
                value="https://manoel-patrocinio-portifolio.vercel.app/"
              ></input>
              <input type="hidden" name="_subject" value="Portfolio"></input>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </article>
      </section>

      <footer className="lastFooter"> Copyright&copy; Manoel Patrocinio</footer>
    </main>
  );
}
