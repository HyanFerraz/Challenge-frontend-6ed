import "./banner.css";

function Banner({ image }) {
    console.log(image)

    const styles = {
        backgroundImage: `url("${image}")`
    }

  return (
    <div className="banner" style={styles}>
      <h1>Boas-vindas ao</h1>
      <h1>#CodeChella2023!</h1>
    </div>
  );
}

export default Banner;
