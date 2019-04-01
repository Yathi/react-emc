import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Overdrive from 'react-overdrive';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
  <div>
    <Link to={`movie/${movie.id}`}>
      <Overdrive id={movie.id}>
        <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={`${movie.title}`} />
      </Overdrive>
    </Link>
  </div>
);

export default Movie;
Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
  }).isRequired,
};

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
`;
