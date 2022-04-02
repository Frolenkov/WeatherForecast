import { connect } from "react-redux";
import { useState } from "react";
import { actionGetCity } from "../store/actions";
import { TextField, Button } from "@material-ui/core";
import Select from "react-select";
import countryList from "react-select-country-list";
import classNames from "classnames";

import css from "./NotFound.module.css";

const SearchComponent = ({
  match: {
    params: { city },
  },
  addCity,
  rootClassName,
  className,
}) => {
  const [currentCity, setCurrentCity] = useState("");
  const [currentCountry, setCurrentCountry] = useState("");
  const countries = countryList().getData();
  const changeHandler = (value) => {
    setCurrentCountry(value.value);
  };

  const rootClass = rootClassName || css.root;
  const classes = classNames(rootClass, className);

  return (
    <div className={classes}>
      <TextField
        className={css.city}
        value={currentCity}
        onChange={(e) => setCurrentCity(e.target.value)}
        id="city"
        label="City"
      />
      <Select
        className={css.country}
        options={countries}
        onChange={changeHandler}
      />
      <Button
        onClick={() => addCity(currentCity, currentCountry)}
        className={css.button}
        variant="contained"
        color="primary"
      >
        Add city
      </Button>
    </div>
  );
};

const Search = connect(
  (s) => ({
    cityInfo: s.promise?.actionGetCity?.payload?.data?.getCityInfo,
  }),
  {
    addCity: actionGetCity,
  }
)(SearchComponent);

export default Search;
