import "./formSelect.css";

function Select({ name }) {
  return (
    <div className="form__field">
      <label className="form__label">Tipo de ingresso:</label>
      <select
        className="form__input form__select"
        id={name}
        name={name}
        required
      >
        <option value="" disabled selected>
          Tipo de ingresso
        </option>
        <option value="pista-premium">Pista Premium</option>
        <option value="pista-comum">Pista Comum</option>
        <option value="cadeiras-terreo">Cadeiras Terreo</option>
        <option value="cadeiras-superior">Cadeiras Superior</option>
      </select>
    </div>
  );
}

export default Select;
