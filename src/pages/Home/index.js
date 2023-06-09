import "./index.css";
import Header from "../../components/header";
import Banner from "../../components/banner";
import About from "../../components/about";
import Lineup from "../../components/Lineup";
import Footer from "../../components/footer";
import Frame from "../../components/frame";
import imageUrl from "../../assets/images/Summer/Imagens/1 - Banner -Homepage.png";

function App() {

  return (
    <body>
      <Header />
      <Banner image={imageUrl}/>
      <section className="lineup__body">
        <About />
        <Lineup />
        <Frame />
      </section>
      <Footer />
    </body>
  );
}

export default App;
