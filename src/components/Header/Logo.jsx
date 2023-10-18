import { Grid, Typography, useMediaQuery } from "@mui/material";
import EmailLogo from "../../logoEmail.svg";
import React from "react";

const Logo = () => {
  const isMobile = useMediaQuery("(min-width:700px)");

  return (
    <img
      src={EmailLogo}
      alt="email"
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
