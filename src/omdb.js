import 'whatwg-fetch';

const SEARCH_ENDPOINT = 'http://www.omdbapi.com/?s=';
const ID_ENDPOINT = 'http://www.omdbapi.com/?i=';

function handleJSON(json) {
  return json.Search || [];
}

function handleResponse(response) {
  return response.json();
}

export async function searchMovies(title) {
  const query = SEARCH_ENDPOINT + title;
  const response = await fetch(query);
  const json = await handleResponse(response);
  return await handleJSON(json);
}

export async function getMovieById(id) {
  const query = ID_ENDPOINT + id + '&plot=full&r=json';
  const response = await fetch(query);
  return await handleResponse(response);
}
