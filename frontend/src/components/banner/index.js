import "./banner.css";
import Text from "../bannerText";

function Banner({ image, title, subtitle }) {
    const styles = {
        backgroundImage: `url("${image}")`
    }

  return (
    <div className="banner" style={styles}>
      <Text title={ title } subtitle={ subtitle } />
    </div>
  );
}

export default Banner;
