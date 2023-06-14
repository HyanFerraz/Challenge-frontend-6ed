import "./cards.css";

function Cards( { imageUrl, title, text, style } ) {

    const imageStyle = {
        order: style.order,
    }

    const textStyle = {
        textAlign: style.textAlign,
    }

  return (
    <div className="card__container">
      <img src={imageUrl} alt="Card Image" style={ imageStyle }/>
      <div className="card__text__container" style={ textStyle }>
        <h3 className="card__title">{ title }</h3>
        <p className="card__text" style={ textStyle }>
          { text }
        </p>
      </div>
    </div>
  );
}

export default Cards;
