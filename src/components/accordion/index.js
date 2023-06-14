import './accordion.css'
import arrow from '../../assets/images/Summer/Ícones/pngs/arrow_drop_down.png'

import React, { useState } from 'react'

function Accordion({title, content}) {
    const [isActive, setIsActive] = useState(false);

    function toggleAccordion() {
        setIsActive(!isActive);
    }

    return (
        <div className='accordion'>
            <div className='accordion__header' onClick={toggleAccordion}>
                <h2>{title}</h2>
                <span className={`accordion__icon ${isActive ? 'open' : 'closed'}`}></span>
                <img src={arrow} className='accordion__arrow'/>
            </div>
            {isActive && (
                <div className='accordion__body'>
                    <p>{content}</p>
                </div>
            )}
        </div>
    )
}

export default Accordion;