import React from "react";
import { Link } from "react-router-dom";
import {actionDeleteCity, actionGetCity} from '../store/actions'
import CloseIcon from '@material-ui/icons/Close';
import { connect } from "react-redux";

function CityShortcut({ weather, main, name, sys, removeCityFroList, getCitiesToShow }) {  

return (
    <Link to={`/${name}`} className="cityShortcut" onClick={()=>getCitiesToShow(name)}>     
        <div className="cityShortcut__body">
        <div className="cityShortcut__name">
          City: {name},{sys.country}
          <CloseIcon onClick={(e)=>{
             e.stopPropagation();
             e.nativeEvent.stopImmediatePropagation();
            removeCityFroList(name)
            }}/>
        </div>
          <div className="cityShortcut__header flex">
            <span className="cityShortcut__type">Weather is {weather[0].main}</span>
            <span className="cityShortcut__temp">Temp: {main.temp}</span>
          </div>
        </div>     
    </Link>
  );
}

const CCityShortcut = connect(
  (s) => ({
    cityInfoObj: s.city,
  }),
  {
    removeCityFroList: actionDeleteCity,
    getCitiesToShow: actionGetCity
  }
)(CityShortcut);

export default CCityShortcut;
