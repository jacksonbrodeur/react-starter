import 'whatwg-fetch';

const SEARCH_ENDPOINT = 'http://www.omdbapi.com/?s=';
const ID_ENDPOINT = 'http://www.omdbapi.com/?i=';

function handleJSON(json) {
  return json.Search ? json.Search : [{ Title: 'No movies found', Year: '' }];
}

function handleResponse(response) {
  return response.json();
}

export function searchMovies(title) {
  const query = SEARCH_ENDPOINT + title;
  return fetch(query).then(handleResponse).then(handleJSON);
}

export function getMovieById(id) {
  const query = ID_ENDPOINT + id + '&plot=full&r=json';
  return fetch(query).then(handleResponse);
}
