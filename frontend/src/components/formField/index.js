import './formField.css'

function Field({labelName, type, name}) {
  return(
        <div className="form__field">
            <label className="form__label">{labelName}</label>
            <input className="form__input" type={type} id={name} name={name} required/>
        </div>
    )
}

export default Field;