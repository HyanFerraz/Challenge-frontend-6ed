import './formSelect.css'

function Select({ticket}) {
  return (
    <div className="form__field">
        <label className="form__label">Tipo de ingresso:</label>
        <select className="form__input form__select" id={ticket} name={ticket}  required>
            <option disabled selected>Tipo de ingresso</option>
            <option value="pista-premium">Pista Premium</option>
            <option value="pista-comum">Pista Comum</option>
            <option value="cadeiras-terreo">Cadeiras Terreo</option>
            <option value="cadeiras-superior">Cadeiras Superior</option>
        </select>
    </div>
  )
}

export default Select;