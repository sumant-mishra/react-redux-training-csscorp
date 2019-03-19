import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions';


function mapDispatchToProps(dispatch) {
    return{
        loadMoviesList: () => dispatch(actions.fetchMoviesList()),
        moviesItemClicked: (id) => dispatch(actions.showClickedMovie(id))
    }
}


function mapStateToProps(state) {
    console.log("state in MoviesList: ", state);
    return {
        movies: state.moviesData.movies 
    }
}


class MoviesList extends Component{

    componentDidMount(){
        this.props.loadMoviesList();
    }

    movieItemClicked(item){
        this.props.moviesItemClicked(item)
    }

    render(){
        const {movies} = this.props;

        const movieItems = movies.map((item)=>{

            
            return <div className="movieListItem" key={item.id} onClick={this.movieItemClicked.bind(this, item)}>
            <b>{item.title}</b><br/>
            IMDB Rating: <i>{item.imdbRating}</i>
            </div>
        })
        return(<div className="movieListPanel">
            <h3>Movies List:</h3>
            {movieItems}
        </div>)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);