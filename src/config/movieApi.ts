import axios from 'axios';
const API_KEY = "6bf6963abd98ed229db08c629b195b15";
export const baseUrl = "https://api.themoviedb.org/3/";
export const imgBaseUrl = "https://image.tmdb.org/t/p/"
export const API_FIELD = `api_key=${API_KEY}`

export const API_ENDPOINTS = {
    popular: baseUrl + 'movie/popular?' + API_FIELD,
    nowPlaying: baseUrl + 'movie/now_playing?' + API_FIELD,
    upcoming: baseUrl + 'movie/upcoming?' + API_FIELD,
    toprated: baseUrl + 'movie/top_rated?' + API_FIELD,
};

export const apiCall = async(endPoint) => {
    const options = {
            method: 'GET',
            url: endPoint
    }
    try {
        const response = await axios.request(options);
        return response.data;   
    }catch(err) {
        console.log(err);
        return null;
    }
}