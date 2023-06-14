import './ticket.css'
import ticketLogo from '../../assets/images/Summer/Logos/Logo ingresso.png'
import ticketImage from '../../assets/images/Summer/Logos/Símbolo ingresso.png'
import QRcode from '../../assets/images/Summer/Imagens/6 - Qr code.png' 

function Ticket({name, type, section, date}) {
  return (
    <div className='ticket__container'>
        <div className='ticket__header'>
            <img src={ticketLogo}/>
            <img src={ticketImage}/>
        </div>
        <div className='ticket__body'>
            <img src={QRcode}/>
            <div className='ticket__info'>
                <h2>{name}</h2>
                <p>{type}</p>
                <p>{section}</p>
                <p>Data: {date}</p>
                <p>Local: São Paulo-SP</p>
            </div>
        </div>
    </div>
  )
}

export default Ticket;