import { MOVIES_DATA_FETCHED, SHOW_CLICKED_MOVIE_DETAILS } from './../actions'

const initialState = {
    movies: [],
    selectedMovie: null
};

export default function MoviesReducer(state = initialState, action) 
{

    switch (action.type) {
        
        case MOVIES_DATA_FETCHED:
            
            return {...state, movies: action.payload};


        case SHOW_CLICKED_MOVIE_DETAILS:
            
            return {...state, selectedMovie: action.payload};

        default:
            return state
    }
}