import { connect } from "react-redux";
import React, { useState } from "react";
import {actionGetCity} from "../store/actions";
import { TextField, Button } from "@material-ui/core";
import Select from 'react-select'
import countryList from 'react-select-country-list'


function Search({
  match: {
    params: { city },
  },
  addCity,  
  allChatsMessages = [],
}) {
  const [currentCity, setCurrentCity] = useState('') 
  const [currentCountry, setCurrentCountry] = useState('') 
  const countries = countryList().getData();
  const changeHandler = value => {
    setCurrentCountry(value.value)   
  }

  return (
    <div className="search">
       <TextField className="search__city" value={currentCity}  onChange={(e) => setCurrentCity(e.target.value)} id="city" label="City" />
       <Select className="search__country" options={countries} onChange={changeHandler} />
       <Button onClick={()=>addCity(currentCity, currentCountry)} className="search__button" variant="contained" color="primary" >Add city</Button>
    </div>
  );
}

const CSearch = connect(
  (s) => ({
    cityInfo:  s.promise?.actionGetCity?.payload?.data?.getCityInfo
  }),
  {
    addCity: actionGetCity
  }
)(Search);

export default CSearch;
