import './formSelect.css'

import React from 'react';

function Select() {
  return (
    <div className="form__field">
        <label className="form__label" for="name">Tipo de ingresso:</label>
        <select className="form__input form__select" id="name" name="name"  required>
            <option disabled="true" selected >Tipo de ingresso</option>
            <option value="meia">Meia entrada</option>
            <option value="inteira">Inteira</option>
        </select>
    </div>
  )
}

export default Select;