import { Button, Grid, useMediaQuery } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  let [searchParams] = useSearchParams();
  const handleSearch = (e) => {
    navigate({
      search: createSearchParams({
        search: e.target.value,
      }).toString(),
    });
  };

  const isMobile = useMediaQuery("(max-width: 600px)");
  let searchFilter = searchParams.get("search");
  useEffect(() => {
    if (!searchFilter) {
      setSearch(""); //To reset the textfield value
    } else {
      setSearch(searchFilter);
    }
  }, [searchFilter]);

  return (
    <Grid
      container
      spacing={2}
      justifyContent={isMobile ? "center" : "flex-start"}
      alignItems="center"
    >
      <Grid item xs={isMobile ? 9 : 9} md={10}>
        <TextField
          id="outlined-search"
          label="Search"
          type="search"
          size="small"
          fullWidth
          value={search}
          onChange={handleSearch}
          sx={isMobile ? { pl: 1 } : { mt: 2 }}
        />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
