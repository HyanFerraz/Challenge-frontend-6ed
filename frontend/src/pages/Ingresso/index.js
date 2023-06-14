import Banner from '../../components/banner';
import Footer from '../../components/footer';
import Header from '../../components/header';
import bannerImage from '../../assets/images/Summer/Imagens/5 - Banner - garanta seu ingresso.png'
import '../global.css'
import Form from '../../components/form';

function Ingresso() {
  return (
    <div>
        <Header />
        <Banner image={bannerImage} title={"Garanta seu Ingresso"}/>
        <section className="lineup__body">
            <Form />
        </section>
        <Footer />
    </div>
    );
}

export default Ingresso;