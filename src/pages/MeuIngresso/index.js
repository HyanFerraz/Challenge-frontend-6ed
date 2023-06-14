import '../global.css'
import './ingresso.css'
import bannerImage from '../../assets/images/Summer/Imagens/6 - Banner - seu ingresso está aqui.png'
import Banner from '../../components/banner';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Ticket from '../../components/ticket';

function MeuIngresso() {
  return (
    <div>
        <Header />
        <Banner title={"Seu ingresso está aqui!"} image={bannerImage}/>
        <section className='lineup__body'>
            <h2 className='ticket__title'>Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</h2>
            <Ticket 
                name={"Hyan"}
                date={"11/03"}
                section={"Setor Pista"}
                type={"Ingresso Costesia"}
            />
        </section>
        <Footer />
    </div>
    )
}

export default MeuIngresso;