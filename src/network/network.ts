import { API_ENDPOINTS, apiCall } from "../config/movieApi";

export const fetchPopularMovies = ( ) => {
    const url = `${API_ENDPOINTS.popular}`;
    return apiCall(url);
}

export const fetchTopRatedMovies = ( ) => {
    const url = `${API_ENDPOINTS.toprated}`;
    return apiCall(url);
}

export const fetchUpcomingMovies = ( ) => {
    const url = `${API_ENDPOINTS.upcoming}`;
    return apiCall(url);
}

export const fetchNowPlayingMovies = ( ) => {
    const url = `${API_ENDPOINTS.nowPlaying}`;
    return apiCall(url);
}