import "../global.css";
import Header from "../../components/header";
import Banner from "../../components/banner";
import About from "../../components/about";
import Lineup from "../../components/lineup";
import Footer from "../../components/footer";
import Frame from "../../components/frame";
import imageUrl from "../../assets/images/Summer/Imagens/1 - Banner -Homepage.png";

function Homepage() {

  const title = "Boas-vindas ao"
  const subtitle = "#CodeChella2023!"

  return (
    <div>
      <Header />
      <Banner image={imageUrl} title={title} subtitle={subtitle} />
      <section className="lineup__body">
        <About />
        <Lineup />
      </section>
      <Frame />
      <Footer />
    </div>
  );
}

export default Homepage;
