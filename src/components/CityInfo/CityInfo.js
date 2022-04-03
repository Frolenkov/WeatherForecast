import { connect } from "react-redux";
import moment from "moment";
import { Redirect } from "react-router-dom";

import classNames from "classnames";

import css from "./CityInfo.module.css";

const  CityInfoComponent = ({
  rootClassName,
  className,
  match: {
    params: { city },
  },
  cityInfoObj = {},
}) => {

  
 
  const rootClass = rootClassName || css.root;
  const classes = classNames(rootClass, className);

  const cityInfo = cityInfoObj[city] || {};

  if (Object.keys(cityInfo).length === 0) {
   return <Redirect to="/" />
  }

  console.log(cityInfo, Object.keys(cityInfo).length === 0)

  return (
    <div className={classes}>
      <h1 className={classNames(css.name, css.xl)}>
        {cityInfo?.name}
      </h1>
      <span className={classNames(css.item, css.xl, css.bold)} >
        Weather is :{" "}
        {cityInfo?.weather[0].description
          ? cityInfo?.weather[0].description
          : cityInfo?.weather[0].main}
      </span>
      <span className={classNames(css.item, css.md)}>
        Sunrise: {moment(cityInfo?.sys.sunrise).format("hh:mm")}
      </span>
      <span className={classNames(css.item, css.md)}>
        Sunset: {moment(cityInfo?.sys.sunset).format("hh:mm")}
      </span>
      <span className={classNames(css.item, css.md)}>
        Wind speed : {cityInfo?.wind?.speed}
      </span>
      <span className={classNames(css.item, css.md)}>
        Wind deg : {cityInfo?.wind?.deg}
      </span>
      <span className={classNames(css.item, css.md)}>
        Temperature : {cityInfo?.main?.temp}
      </span> 
      <span classNames={(css.item, css.md)}>
        Feels like : {cityInfo?.main?.feels_like}
      </span>
    </div>
  );
}

const CityInfo = connect(
  (s) => ({
    cityInfoObj: s.city,
  }),
  {}
)(CityInfoComponent);

export default CityInfo;
