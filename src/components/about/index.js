import "./about.css";
import imageHomepage from "../../assets/images/Summer/Imagens/1 - Imagem homepage1.png";
import Button from "./button";

function About() {
  return (
    <div className="about">
      <img src={imageHomepage} alt="Homepage Image" />
      <div className="about__text__container">
        <div className="about__title">
          <p>
            &lt;11 e 12 de Março&gt;
            <br />
            Aluródromo de São Paulo
          </p>
        </div>
        <p className="about__text">
          Hora de programar nossa memória com novas lembranças! Uma nova
          experiência sobre música, linguagens e, claro, tecnologia! Somos um
          festival diverso, com vários artistas e referências. Divirta-se!
        </p>
        <Button />
      </div>
    </div>
  );
}

export default About;
