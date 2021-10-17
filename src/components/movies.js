import React from 'react';
import MovieItem from './movieItem';

class Movies extends React.Component
{
    render(){
        return this.props.movies.map( (movie)=>{
            return <MovieItem movie ={movie}></MovieItem>
        })
    }
}
export default Movies;