import "./footer.css";
import logo from "../../assets/images/Summer/Logos/Logo cinza.png";
import whats from "../../assets/images/Summer/Ícones/pngs/Ícone whatsapp.png";
import twitch from "../../assets/images/Summer/Ícones/pngs/Ícone Twitch.png";
import insta from "../../assets/images/Summer/Ícones/pngs/Ícone instagram.png";
import twitter from "../../assets/images/Summer/Ícones/pngs/Ícone twitter.png";

function Footer() {
  return (
    <footer>
      <div className="footer__logo">
        <img src={logo} />
        <div className="footer__social__media">
          <p>Acesse nossas redes:</p>
          <a href="#">
            <img src={whats} />
          </a>
          <a href="#">
            <img src={twitch} />
          </a>
          <a href="#">
            <img src={insta} />
          </a>
          <a href="#">
            <img src={twitter} />
          </a>
        </div>
      </div>
        <p className="footer__text">Desenvolvido por Hyan.<br/> Projeto fictício sem fins comerciais.</p>
    </footer>
  );
}

export default Footer;
