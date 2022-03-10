/* eslint-disable no-console */

// async function to grab json data from the pokemon api 
async function getPkmnData(id) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    // wait until we fetch the url response
    const response = await fetch(url);
    // wait for the response to be converted to json
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
  return null;
}

export default getPkmnData;
