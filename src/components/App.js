import React, {Component} from 'react';
import MoviesList from './MoviesList';
import MovieDetails from './MovieDetails';


class App extends Component{
    render(){
        return(<div>
            <MoviesList/>
            <MovieDetails />
        </div>);
    }
}

export default App;