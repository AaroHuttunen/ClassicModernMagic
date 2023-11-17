import React from "react";
import panoramabanner from "./panoramabanner.jpg";

function BannerImage() {
    return (
        <img
        src={panoramabanner}
        alt="Banner image"
        style={{ width: "100%", marginTop: "70px" }}
        />
    );
}
  
export default BannerImage;