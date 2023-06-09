import React, { useEffect } from "react";
import EmailPanel from "./EmailPanel/EmailPanel";
import Header from "./Header/Header";
import { Grid, useMediaQuery } from "@mui/material";
import FilterPanel from "./FilterPanel/FilterPanel";
import { getMailData } from "../redux/action";
import { useDispatch } from "react-redux";

const Email = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMailData());
  }, []);

  return (
    <div>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <Header></Header>
        </Grid>
        <Grid item xs={2}>
          <FilterPanel></FilterPanel>
        </Grid>
        <Grid item xs={10}>
          <EmailPanel></EmailPanel>
        </Grid>
      </Grid>
    </div>
  );
};

export default Email;
