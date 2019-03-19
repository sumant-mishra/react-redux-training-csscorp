import axios from 'axios';

export const FETCH_MOVIES_DATA = 'FETCH_MOVIES_DATA';
export const MOVIES_DATA_FETCHED = 'MOVIES_DATA_FETCHED';
export const SHOW_CLICKED_MOVIE_DETAILS = 'SHOW_CLICKED_MOVIE_DETAILS';

export const fetchMoviesList = () => {
    console.log("calling fetch fetchMoviesList")
    return (dispatch) => {
        console.log("dispatch: ", dispatch);
        axios.get('https://s3.amazonaws.com/jquerytestcsscorp/movies-in-theaters.json')
        .then(function (response) {
            console.log(response);
            dispatch( {
                type: MOVIES_DATA_FETCHED,
                payload: response.data
            })
        })
        .catch(function (error) {
            console.log("error: ", error);
        });

    }
}

export const showClickedMovie = (movieItem) => {
    return {
        type: SHOW_CLICKED_MOVIE_DETAILS,
        payload: movieItem
    }
}


