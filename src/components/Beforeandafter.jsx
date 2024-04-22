import React from "react";

function Beforeandafter({lagringspladspre, kgwattpre, lagringspladspost, kgwattpost, image1, alt1, image2, alt2 }) {
    return(
        <>
        <div className="twocolums">
            <div className="baacolum">
                <h3>Før</h3>
                <img src={image1} alt={alt1} style={{borderRadius: "25px"}} />
                <p>Lagringsplads: {lagringspladspre}
                <br />
                Energi i kg/watt: {kgwattpre}</p>
            </div>

            <div className="baacolum">
                <h3>Efter</h3>
                <img src={image2} alt={alt2} style={{borderRadius: "25px"}} />
                <p>Lagringsplads: {lagringspladspost}
                <br />
                Energi i kg/watt: {kgwattpost}</p>
            </div>
        </div>
        </>
    );
}
export default Beforeandafter;