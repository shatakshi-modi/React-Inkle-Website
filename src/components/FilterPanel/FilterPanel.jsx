import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { listMapping } from "../utils";

const FilterPanel = () => {
  const isMobile = useMediaQuery("(min-width:800px)");
  const [tab, setTab] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const filterPath = location.pathname.split("/")[1];
    setTab(filterPath);
  }, []);

  const handleClick = (value) => {
    setTab(value);
    navigate({
      pathname: `/${value}`,
    });
  };
  return (
    <List sx={{ mt: 7 }}>
      {Object.keys(listMapping).map((e) => {
        const { id, text, icon } = listMapping[e];
        const IconComp = icon;
        return (
          <ListItemButton onClick={() => handleClick(id)} selected={id === tab}>
            <ListItemIcon>
              <IconComp />
            </ListItemIcon>
            {isMobile && <ListItemText primary={text} />}
          </ListItemButton>
        );
      })}
    </List>
  );
};

export default FilterPanel;
