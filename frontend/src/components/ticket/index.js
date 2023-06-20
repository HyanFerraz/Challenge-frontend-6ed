import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import './ticket.css'
import ticketLogo from '../../assets/images/Summer/Logos/Logo ingresso.png'
import ticketImage from '../../assets/images/Summer/Logos/Símbolo ingresso.png'
import QRcode from '../../assets/images/Summer/Imagens/6 - Qr code.png'

function Ticket() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const fetchTicket = async () => {
      const cpf = Cookies.get('cpf');
      console.log(cpf);
      const response = await fetch(`http://localhost:3001/ticket/${cpf}`);
      const data = await response.json();
      setName(data.name);
      setType(data.type);
      setDate(data.date);
    };
    fetchTicket();
  }, []);

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
                <p>Ingresso Costesia</p>
                <p>{type}</p>
                <p>Data: {date}</p>
                <p>Local: São Paulo-SP</p>
            </div>
        </div>
    </div>
  )
}

export default Ticket;