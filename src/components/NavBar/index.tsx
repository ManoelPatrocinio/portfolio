import "./style.css"
import Logo from "../../assets/images/logo.png" 
export function NavBar() {
  return (
    <nav className="nav_menu" id="menu-desktop">
      <a id="nav_menu__logo" href="#main-header">
        <img src={Logo}alt="Logo" />
      </a>
      <ul id="nav_menu__menu">
        <li>
          <a className="menu__item" href="#about_Me">
            Sobre Mim
          </a>
        </li>
        <li>
          <a className="menu__item" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="menu__item" href="#projects">
            Projetos
          </a>
        </li>
        <li>
          <a className="menu__item" href="#services">
            Serviços
          </a>
        </li>
        <li>
          <a className="menu__item" href="#contact">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}
