import React, { Component } from 'react';
import { Poster } from './Movie';
import styled from 'styled-components';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  state = {
    movie: []
  }
  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=6e2437156edf9721bc0a67e47653581f&language=en-US`);
      const movie = await res.json();
      this.setState({
        movie: movie
      });

    } catch(e) {
      console.log(e);
    }
  }
  render() {
    const { movie } = this.state;
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={`${movie.title}`} />
          <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetail;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background-size: cover;
  background: url(${props => props.backdrop}) no-repeat;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;