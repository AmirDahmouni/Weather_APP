import axios from "axios";

async function getWeatherAndForecast(coordinates) {
  const response = await axios.post(`${process.env.REACT_APP_URL_API}/weather/current`, { coordinates });
  return response;
}

export default getWeatherAndForecast;