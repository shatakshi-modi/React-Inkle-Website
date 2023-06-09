import { useMediaQuery } from "@mui/material";
import React from "react";

const Logo = () => {
  const isMobile = useMediaQuery("(min-width:700px)");

  return (
    <img
      src="https://uploads-ssl.webflow.com/62cd4e1c91e7d377d6328e70/62ce75472b272f9cca3fa366_Inkle%20Logo.svg"
      alt="inkle"
      style={
        isMobile
          ? {}
          : {
              display: "block",
              margin: "0 auto",
            }
      }
    />
  );
};

export default Logo;
