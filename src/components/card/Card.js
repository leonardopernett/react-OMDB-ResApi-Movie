import React from "react";
import PropTypes from 'prop-types';

const Card = ({ movie }) => {
  return (
    <div className="col-md-3 mt-5">
      <div className="card">
        <img src={movie.Poster} alt="" className="card-img-top" width="50" height="300" />
        <div className="card-body text-center">
          <h3>
            {movie.Title}
          </h3>
          <p>{movie.Year}</p>
          <p>{movie.Type}</p>

        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
    movie:PropTypes.shape({
      Title:PropTypes.string,
      Year:PropTypes.string,
      Type:PropTypes.string,
      Poster:PropTypes.string
    }).isRequired

}

export default Card;
