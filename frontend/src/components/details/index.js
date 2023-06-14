import './details.css'

function Details( {image, title, description, style} ) {
    return (
        <div className="details__card" style={style}>
            <img src={ image }/>
            <h2 className='details__title'>{ title }</h2>
            <p className='details__text'>{ description }</p>
        </div>
    )
}

export default Details;