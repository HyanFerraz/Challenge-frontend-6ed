import "../global.css";

import Header from "../../components/header";
import Banner from "../../components/banner";
import Footer from "../../components/footer";

import bannerImage from "../../assets/images/Summer/Imagens/3 - Banner - Mapa de setores.png";
import sectorsImage from "../../assets/images/Summer/Imagens/3 - Mapa setores1.png";
import detailsImage1 from "../../assets/images/Summer/Imagens/3 - Mapa de setores2.png";
import detailsImage2 from "../../assets/images/Summer/Imagens/3 - Mapa de setores3.png";
import detailsImage3 from "../../assets/images/Summer/Imagens/3 - Mapa de setores4.png";
import Legend from "../../components/legend";
import Details from "../../components/details";

function Sectors() {
  const bannerTitle = "Mapa de Setores";

  return (
    <div>
      <Header />
      <Banner image={bannerImage} title={bannerTitle} />
      <section className="lineup__body">
        <div className="legend">
          <img src={sectorsImage} alt="Mapa dos setores" />
          <Legend />
        </div>
          <h1 className="details__title">Mais detalhes sobre os setores:</h1>
        <div className="details__container">
          <Details
            image={detailsImage1}
            title={"Pista"}
            description={
              "Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade."
            }
          />
          <Details
            style={{ marginTop: "15%" }}
            image={detailsImage2}
            title={"Pista Premium"}
            description={
              "Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área."
            }
          />
          <Details
            image={detailsImage3}
            title={"Cadeiras"}
            description={
              "Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas."
            }
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Sectors;
