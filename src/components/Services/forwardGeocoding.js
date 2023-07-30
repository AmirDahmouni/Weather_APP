import axios from "axios";

async function getCoordinatesOfAddress(address) {
  const response = await axios.post(`${process.env.REACT_APP_URL_API}/coordinations/getcoordsByAdress`, { address });
  return response;
}

export default getCoordinatesOfAddress;