import Banner from '../../components/banner';
import Header from '../../components/header';
import bannerImage from '../../assets/images/Summer/Imagens/4 - Banner - infos gerais.png';
import '../global.css'
import Footer from '../../components/footer';
import Accordion from '../../components/accordion';

function Informacoes() {
  return (
    <div>
        <Header />
        <Banner image={bannerImage} title={"Informações Gerais"} />
        <section className="lineup__body">
          <div className='questions'>
            <h1 className='questions__title'>Perguntas Frequentes:</h1>
            <Accordion 
            title={"Quais serão as atrações?"}
            content={"Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas pop. Confira o line-up em detalhes clicando neste link!"}/>
            <Accordion
            title={"Qual é a classificação etária?"}
            content={"A partir de 16 anos, todo mundo pode entrar. De 13 a 15 anos, tem que estar acompanhado dos pais ou responsáveis legais. Menores de 10 anos não podem entrar."}
            />
            <Accordion
            title={"Quais são os setores disponíveis?"}
            content={"Pista Premium\nPista Comum\nCadeiras térreo\nCadeiras superiores\nRampas"}
            />
            <Accordion
            title={"Quais são os itens proibidos?"}
            content={"Garrafas, latas, bebidas, utensílios de armazenagem, embalagens rígidas com tampa, capacetes, cadeiras ou bancos, armas de fogo e armas brancas, objetos pontiagudos, cortantes e/ou perfurantes, correntes e cinturões, fogos de artifício, objetos de vidro, substâncias inflamáveis, cigarro eletrônico, corrosivas e ou tóxicas, revistas, jornais, livros e copo térmico ou similares."}
            />
            <Accordion
            title={"Quem tem direito a meia-entrada?"}
            content={"De acordo com a Lei Federal, têm direito ao benefício da meia-entrada aqueles que preencherem os requisitos e apresentarem os documentos comprobatórios."}
            />
          </div>
        </section>
        <Footer />
    </div>
  )
}

export default Informacoes;