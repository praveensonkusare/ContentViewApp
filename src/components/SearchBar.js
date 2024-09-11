import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../styles.css";
import { IconButton, InputAdornment, TextField } from "@mui/material";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div style={{ padding: "10px", textAlign: "center", flexDirection: "row" }}>
      <TextField
        sx={{
          width: "100%",
          boxSizing: "border-box",
          fontSize: 16,
          input: { color: "#ffffff" },
          borderColor: "black",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "transparent",
            },
            "&:hover fieldset": {
              borderColor: "transparent",
            },
            "&.Mui-focused fieldset": {
              borderColor: "transparent",
            },
          },
        }}
        InputLabelProps={{ sx: { color: "white" } }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon sx={{ color: "white" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
