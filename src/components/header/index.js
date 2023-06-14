import "./header.css";
import logo from "../../assets/images/Summer/Logos/Logo branco.png";

function Header() {
  return (
    <header className="cabecalho">
      <a href="/">
      <img src={logo} alt="Logo Code" />
      </a>
      <nav className="cabecalho__nav">
        <a className="cabecalho__nav__item" href="/experiencia">
          A experiência
        </a>
        <a className="cabecalho__nav__item" href="/setores">
          Mapa de Setores
        </a>
        <a className="cabecalho__nav__item" href="/informacoes">
          Informações
        </a>
        <a className="cabecalho__nav__item" href="/ingresso">
          Ingresso
        </a>
      </nav>
    </header>
  );
}

export default Header;
