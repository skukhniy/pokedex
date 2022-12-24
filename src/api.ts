interface responseData {
  name: string;
  height: number;
  weight: number;
  id: string;
  types: any;
  sprites: any;
}

// return json data objects from pokeapi
async function getPkmnData(id: number, species = '') {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon${species}/${id}`;
    // wait until we fetch the url response
    const response = await fetch(url);
    // wait for the response to be converted to json
    const data: responseData = await response.json();
    console.log(typeof data);
    return data;
  } catch (err) {
    console.log(err);
  }
  return null;
}
export { getPkmnData, responseData };
