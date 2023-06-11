import "./bannerText.css";

function bannerText ({ title, subtitle}) {
  return (
    <div>
      <h1 className="banner__text">{ title }</h1>
      <h1 className="banner__text">{ subtitle }</h1>
    </div>
    )
}

export default bannerText;