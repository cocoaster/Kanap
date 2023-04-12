import React from "react";
import backgound from "../assets/Background.png"
import imgBackgound2 from "../assets/IMGbackground2.png"

const A_Propos = () => {
  return (
    <div id="homeContent" >
      <div id="banner">
      <img className="background" src={backgound} alt="background" />
        <img className="background imgBackground" src={imgBackgound2} alt="landscape" />
      </div>
    </div>
  );
};

export default A_Propos;
