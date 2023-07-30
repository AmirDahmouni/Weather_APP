import axios from "axios";

async function getAddressOfCoordinates(lat, lng) {

  const response = await axios.post(`${process.env.REACT_APP_URL_API}/coordinations/getAdressBycoords`, { lat, lng });
  return response;

}

export default getAddressOfCoordinates;