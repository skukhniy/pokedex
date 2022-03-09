/* eslint-disable no-console */
async function getPkmnData(id) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    // wait until we fetch the url response
    const response = await fetch(url);
    // wait for the response to be converted to json
    const data = await response.json();
    return data
    // grab data
    //console.log(data.sprites.front_default);
    //console.log(data);
  } catch (err) {
    console.log(err);
  }
}
function pkmnData(id) {
  return getPkmnData(id).then((res) => { return res });
}

export default pkmnData;
