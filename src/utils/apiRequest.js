//export const API_URL_ROOT = "https://www.googleapis.com/customsearch/v1?q=harrypotter&cx=011476162607576381860:ra4vmliv9ti&key=AIzaSyAjTPFgulkdrELcWmo1jAa8wqtHLrztyKc";
export const API_URL_ROOT = 'https://www.googleapis.com/customsearch/v1?';
export async function get(url) {
  const KEY = 'AIzaSyAjTPFgulkdrELcWmo1jAa8wqtHLrztyKc';
  console.log('Url root===', `${API_URL_ROOT}${url}&key=${KEY}`);
  return await fetch(`${API_URL_ROOT}${url}&key=${KEY}`);
}
