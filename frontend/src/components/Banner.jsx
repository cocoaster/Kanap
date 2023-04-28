import React from "react";

function Banner(props) {
  const { background, image, alt, className } = props;
  const bannerStyle = {
    backgroundImage: `url(${background})`,
  };
  const imgStyle = {
    width: "100%",
    height: "auto",
  };
  return (
    <div className={`banner ${className}`} style={bannerStyle}>
      <p className="bannerTxt">{props.children}</p>
      <img className="imgBackground" src={image} alt={alt} style={imgStyle} />
    </div>
  );
}

export default Banner;
