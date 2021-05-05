import { connect } from "react-redux";

function SideBar({
  match: {
    params: { city },
  },  
  cityInfoObj = {},
}) {
  let cityInfo = cityInfoObj[city];
  function timeConverter(time) {
    let date = new Date(time * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    return formattedTime;
  }
  return (
    <div className="cityInfo flex">
      <h1 className="cityInfo__name xl">{cityInfo?.name}</h1>
      <span className="cityInfo__item xl bold">
        Weather is :{" "}
        {cityInfo?.weather[0].description
          ? cityInfo?.weather[0].description
          : cityInfo?.weather[0].main}
      </span>
      <span className="cityInfo__item md">
        Sunrise: {timeConverter(cityInfo?.sys.sunrise)}
      </span>
      <span className="cityInfo__item md">
        Sunset: {timeConverter(cityInfo?.sys.sunset)}
      </span>
      <span className="cityInfo__item md">
        Wind speed : {cityInfo?.wind?.speed}
      </span>
      <span className="cityInfo__item md">
        Wind deg : {cityInfo?.wind?.deg}
      </span>
      <span className="cityInfo__item md">
        Temperature : {cityInfo?.main?.temp}
      </span>
      <span className="cityInfo__item md">
        Feels like : {cityInfo?.main?.feels_like}
      </span>
    </div>
  );
}

const CSideBar = connect(
  (s) => ({
    cityInfoObj: s.city,
  }),
  {  
  }
)(SideBar);

export default CSideBar;
