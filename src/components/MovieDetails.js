import React, {Component} from 'react';
import {connect} from 'react-redux';
import './../styles.css';


function mapStateToProps(state) {
    console.log("state in MovieDetails: ", state);
    return {
        movieDetails: state.moviesData.selectedMovie 
    }
}

class MovieDetails extends Component{
    render(){
        const {movieDetails} = this.props;
        let actors = "";
        
        if(movieDetails){
            actors = movieDetails.actors.map((actor, index) => {
                return <span key={index}>{actor}{(index < movieDetails.actors.length -1) ? ", " : ""}</span>
            })

            return(<div className="movieDetails">
                    <h3>{movieDetails.title}</h3>
                    <b>Actors: </b> <i>{actors}</i>
                    <br/><br/>
                    <b>Story:</b><i>{movieDetails.storyline}</i>
                </div>)
        }
        else{
            return(<div></div>)
        }

        
    }
}

export default connect(mapStateToProps)(MovieDetails);