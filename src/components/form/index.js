import Button from '../button';
import Field from '../formField';
import Select from '../formSelect';
import buttonImage from "../../assets/images/Summer/Ícones/pngs/local_activity.png";
import './form.css'

function Form() {
  return (
    <div className="form__container">
        <h1 className="form__title">Preencha o formulário a seguir:</h1>
        <form className="form__body"> 
            <Field fieldName={"Nome Completo:"}/>            
            <Field fieldName={"Email:"}/>
            <Field fieldName={"CPF:"}/>
                <div className='form__last__line'>
                    <Select fieldName={"Tipo de ingresso"}/>
                    <Field fieldName={"Data de nascimento:"}/>
                </div>
            <Button text={"Avançar!"} image={buttonImage}/>
        </form>
    </div>
  ) 
    
}

export default Form;