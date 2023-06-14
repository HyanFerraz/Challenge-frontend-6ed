import "./button.css";

function Button({text, image, link}) {
  return (
    <div className="button__container">
      <a className="button__text" href={link}>
        <p >{text}</p>
        <img src={image} alt="Ticket Icon" />
      </a>
    </div>
  );
}

export default Button;
