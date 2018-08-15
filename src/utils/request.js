require('es6-promise').polyfill();
require('isomorphic-fetch');
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 500) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response.json();
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           An object containing either "data" or "err"
 */
module.exports = function (url, options, onSuccess, onError) {
  // let tokenChicago = window.store.getState().global.get('tokenChicago');
  const opt = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  Object.assign(opt, options);

  return fetch(url, opt)
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => {
      if (onSuccess) onSuccess(data);
      return {data: data}
    })
    .catch((err) => {
      if (onError) onError(err);
      return {err: err}
    });
};
