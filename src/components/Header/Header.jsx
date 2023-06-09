import { Grid } from "@mui/material";
import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <Grid
      container
      sx={{
        mt: "15px",
      }}
      justifyContent={"space-around"}
      spacing={2}
    >
      <Grid item xs={12} md={2}>
        <Logo></Logo>
      </Grid>
      <Grid item xs={12} md={9}>
        <SearchBar></SearchBar>
      </Grid>
    </Grid>
  );
};

export default Header;
