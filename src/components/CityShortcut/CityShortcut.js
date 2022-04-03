import React from "react";
import { Link } from "react-router-dom";
import { actionDeleteCity, actionGetCity } from "../../store/actions";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import classNames from "classnames";

import css from "./CityShortcut.module.css";

const CityShortcutComponent = ({
  rootClassName,
  className,
  weather,
  main,
  name,
  sys,
  removeCityFroList,
  getCitiesToShow,
}) => {
  const rootClass = rootClassName || css.root;
  const classes = classNames(rootClass, className);

  return (
    <Link
      to={`/city/${name}`}
      className={classes}
      onClick={() => getCitiesToShow(name)}
    >
      <div className={css.body}>
        <div className={css.name}>
          City: {name},{sys.country}
          <CloseIcon
            onClick={(e) => {
              e.stopPropagation();
              e.nativeEvent.stopImmediatePropagation();
              removeCityFroList(name);
            }}
          />
        </div>
        <div className={classNames(css.header, css.flex)}>
          <span className={css.type}>Weather is {weather[0].main}</span>
          <span className={css.temp}>Temp: {main.temp}</span>
        </div>
      </div>
    </Link>
  );
};

const CityShortcut = connect(
  (s) => ({
    cityInfoObj: s.city,
  }),
  {
    removeCityFroList: actionDeleteCity,
    getCitiesToShow: actionGetCity,
  }
)(CityShortcutComponent);

export default CityShortcut;
