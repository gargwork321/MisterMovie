import { API_ENDPOINTS, API_FIELD, apiCall, baseUrl } from "../config/movieApi";

const urlForCategoryId = (id) => {
    switch(id){
        case 1:
            return `${API_ENDPOINTS.nowPlaying}`;
        case 2:
            return `${API_ENDPOINTS.upcoming}`;
        case 3:
            return `${API_ENDPOINTS.toprated}`;
        case 4:
            return `${API_ENDPOINTS.popular}`;
    }
}

export const fetchMoviesWithCategoryId = (id) => {
    const url = urlForCategoryId(id);
    return apiCall(url);
}

export const fetchMovieDetail =(id) => {
    const url = `${baseUrl}${id}${API_FIELD}`
    return apiCall(url);
}
