import "./button.css";
import ticketIcon from "../../../assets/images/Summer/Ícones/pngs/ícone ingresso.png";

function Button() {
  return (
    <div className="button__container">
      <a className="button__text" href="#">
        <p >Comprar ingresso!</p>
        <img src={ticketIcon} alt="Ticket Icon" />
      </a>
    </div>
  );
}

export default Button;
