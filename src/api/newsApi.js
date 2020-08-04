import { handleResponse, handleerror} from './apiUtils';
const baseUrl = process.env.REACT_APP_API_URL+"/headlines";

export const getTopNews = (queryStr) => {
    let urlCon = queryStr ? baseUrl + "?searchQuery=" + queryStr : baseUrl
    return fetch(urlCon, {headers: { "Access-Control-Allow-Origin" :"*"}}).then(handleResponse).catch(handleerror);
}