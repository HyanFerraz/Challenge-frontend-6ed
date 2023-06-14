import './formSubmit.css'

function FormSubmit(props) {
    return (
        <button className="formSubmit__button" type="submit">
            <p>{props.children}</p>
            <img src={props.image} alt="Icon" />
        </button>
    )
}

export default FormSubmit