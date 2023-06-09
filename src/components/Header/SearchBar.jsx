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
  const handleSearch = () => {
    navigate({
      search: createSearchParams(
        search
          ? {
              search: search,
            }
          : {}
      ).toString(),
    });
  };

  const isMobile = useMediaQuery("(max-width: 600px)");
  let searchFilter = searchParams.get("search");
  useEffect(() => {
    if (!searchFilter) {
      setSearch(""); //To reset the textfield value
    } else {
      console.log(searchFilter);
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
          onChange={(e) => setSearch(e.target.value)}
          sx={isMobile ? { pl: 1 } : {}}
        />
      </Grid>
      <Grid item xs={isMobile ? 3 : 3} md={2}>
        <Button variant="outlined" fullWidth={!isMobile} onClick={handleSearch}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
