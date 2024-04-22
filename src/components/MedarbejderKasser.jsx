import React from "react";
import Pil from "../assets/folderpilned.svg";

export default function MedarbejderKasser({ paragraph1, paragraph2, paragraph3, paragraph4 }) {
  return (
    <div className="MedarbejderKasse">
      <div className="MedarbejderKasseIndhold">
        <p className="MedarbejderInfo">{paragraph1}</p>
        <img className="" src={Pil} alt="Pil op" />
        <img src={Pil} alt="Pil ned" />
        <button>Slet</button>
      </div>
      <br /><br />
      <div className="MedarbejderKasseIndhold">
        <p className="MedarbejderInfo">{paragraph2}</p>
        <p className="MedarbejderInfo">{paragraph3}</p>
      </div>
      <br /><br />
      <div className="MedarbejderKasseIndhold">
        <p className="MedarbejderInfo">{paragraph4}</p>
      </div>
    </div>
  );
}



/******
 <div className="MedarbejderKasse">
      <div className="MedarbejderKasseIndhold">
        <p className="MedarbejderInfo">{paragraph1}</p>
        <img className="" src={Pil} alt="Pil op" />
        <img src={Pil} alt="Pil ned" />
        <button>Slet</button>
      </div>
      <br /><br />
      <div className="MedarbejderKasseIndhold">
        <p className="MedarbejderInfo">{paragraph2}</p>
        <p className="MedarbejderInfo">{paragraph3}</p>
      </div>
      <br /><br />
      <div className="MedarbejderKasseIndhold">
        <p className="MedarbejderInfo">{paragraph4}</p>
      </div>
    </div>
 *****/