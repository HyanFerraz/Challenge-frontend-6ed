import FormSubmit from "../formSubmit";
import Field from "../formField";
import Select from "../formSelect";
import buttonImage from "../../assets/images/Summer/Ícones/pngs/local_activity.png";
import "./form.css";

function Form() {
  return (
    <div className="form__container">
      <h1 className="form__title">Preencha o formulário a seguir:</h1>
      <form className="form__body" action="http://localhost:3001/ticket" method="POST">
        <Field labelName={"Nome Completo:"} name={"name"} />
        <Field labelName={"Email:"} name={"email"} />
        <Field labelName={"Senha:"} name={"password"} type={"password"} />
        <Field labelName={"CPF:"} name={"cpf"} />
        <div className="form__last__line">
          <Select labelName={"Tipo de ingresso"} name={"ticket"} />
          <Field
            labelName={"Data de nascimento:"}
            type={"date"}
            name={"birthday"}
          />
        </div>
        <FormSubmit image={buttonImage}>Avançar!</FormSubmit>
        <a className="form__link" href="/meu-ingresso">Já possuo um ingresso!</a>
      </form>
    </div>
  );
}

export default Form;
