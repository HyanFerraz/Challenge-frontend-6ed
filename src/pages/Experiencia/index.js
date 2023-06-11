import "../global.css";
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Cards from "../../components/cards";
import imageUrl from "../../assets/images/Summer/Imagens/2 - Banner - A Experiência.png";
import accessibilityImage from "../../assets/images/Summer/Imagens/2 - A experiência1.png";
import sustentabilityImage from "../../assets/images/Summer/Imagens/2 - A Experiência2.png";
import atractionsImage from "../../assets/images/Summer/Imagens/2 - A Experiência3.png";

function Experiencia () {

    const bannerTitle = "A Experiência"
    const accessibilityTitle = "Acessibilidade e Inclusão"
    const accessibilityText = "Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!"
    const sustentabilityTitle = "Sustentabilidade"
    const sustentabilityText = "Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo."
    const atractionsTitle = "Atrações"
    const atractionsText = "Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda gigante e outros brinquedos!"

    const style1 = {
        order: 0,
        textAlign: "start"
    }

    const style2 = {
        order: 1,
        textAlign: "end"
    }

    return (
        <div>
            <Header />
            <Banner image={imageUrl} title={bannerTitle}/>
            <section className="lineup__body">
                <Cards 
                imageUrl={accessibilityImage}
                title={accessibilityTitle}
                text={accessibilityText}
                style={style1}
                />

                <Cards 
                imageUrl={sustentabilityImage}
                title={sustentabilityTitle}
                text={sustentabilityText}
                style={style2}
                />

                <Cards
                imageUrl={atractionsImage}
                title={atractionsTitle}
                text={atractionsText}
                style={style1}
                />
            </section>
            <Footer />
        </div>
    )
}

export default Experiencia;