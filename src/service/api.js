import Request from 'superagent'

// BASEDIR
const BASE = '/mundial/api/v1';

// URLS APIS
const URL_MINAMIN = `${BASE}/playing/now/`

// METHODS
const fetchMinamin = () => Request.get(URL_MINAMIN)

export default {
  fetchMinamin,
};
