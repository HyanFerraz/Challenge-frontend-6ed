import "../global.css";

import Header from "../../components/header";
import Banner from "../../components/banner";
import Footer from "../../components/footer";

import bannerImage from "../../assets/images/Summer/Imagens/3 - Banner - Mapa de setores.png";
import sectorsImage from "../../assets/images/Summer/Imagens/3 - Mapa setores1.png";
import Legend from "../../components/legend";

function Sectors() {
  const bannerTitle = "Mapa de Setores";

  return (
    <div>
      <Header />
      <Banner image={bannerImage} title={bannerTitle} />
      <section className="lineup__body">
        <div className="legend">
          <img src={sectorsImage} alt="Mapa dos setores" />
            <Legend/>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Sectors;
