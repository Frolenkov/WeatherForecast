let APIkey = "bd0d7d6c8ed6c8a5ff0b814cbfca33ef";

const actionPromise = (name, promise) => {
  const actionPending = () => ({
    type: "PROMISE",
    name,
    status: "PENDING",
    payload: null,
    error: null,
  });
  const actionResolved = (payload) => ({
    type: "PROMISE",
    name,
    status: "RESOLVED",
    payload,
    error: null,
  });
  const actionRejected = (error) => ({
    type: "PROMISE",
    name,
    status: "REJECTED",
    payload: null,
    error,
  });

  return async (dispatch) => {
    dispatch(actionPending());
    let payload;
    try {
      payload = await promise;
      dispatch(actionResolved(payload));
    } catch (e) {
      dispatch(actionRejected(e));
    }
    return payload;
  };
};


const actionGetCity = (currentCity, currentCountry) => async (dispatch) => {
  let city = await dispatch(
    actionPromise(
      "getCityInfo",     
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity},${currentCountry}&units=metric&appid=${APIkey}`)
        .then(response => response.json())
    )
  );
  if (city.name) {
     let cityData = city
    dispatch(actionCityToStore({cityData, cityName:city.name}))
  }
};

const actionDeleteCity = (city) => async (dispatch) => { 
    dispatch(actionDeleteCityFromStore(city))  
};

const actionCityToStore = (city) => {
 return { type: "CITYTOSTORE", city };
};

const actionDeleteCityFromStore = (city) => {
  return { type: "CITYOUTSTORE", city };
 };


export {  
  actionPromise,
  actionDeleteCity,
  actionGetCity
};
