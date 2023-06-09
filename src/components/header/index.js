import "./header.css";
import logo from "../../assets/images/Summer/Logos/Logo branco.png";

function Header() {
  return (
    <header className="cabecalho">
      <img src={logo} alt="Logo Code" />
      <nav className="cabecalho__nav">
        <a className="cabecalho__nav__item" href="#">
          A experiência
        </a>
        <a className="cabecalho__nav__item" href="#">
          Mapa de Setores
        </a>
        <a className="cabecalho__nav__item" href="#">
          Informações
        </a>
        <a className="cabecalho__nav__item" href="#">
          Ingresso
        </a>
      </nav>
    </header>
  );
}

export default Header;
