import './formField.css'

function Field({fieldName, type}) {
  return(
        <div className="form__field">
            <label className="form__label" for="name">{fieldName}</label>
            <input className="form__input" type= {type} id="name" name="name"  required/>
        </div>
    )
}

export default Field;