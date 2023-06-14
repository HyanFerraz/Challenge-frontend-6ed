import "./button.css";
import React from "react";

function Button({children, image, link}) {

  return (
    <div className="button__container">
      <a className="button__text" href={link} >
        <p>{children}</p>
        <img src={image} alt="Icon" />
      </a>
    </div>
  );
}

export default Button;
