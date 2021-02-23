import React from 'react';
import PropTypes from 'prop-types';

const Word = ({ word, definition, example }) => (
  <figure>
    <h1>{word}</h1>
    <h2>{definition}</h2>
    <h3>{example}</h3>
  </figure>
);

Word.propTypes = {
  defid: PropTypes.number.isRequired,
  word: PropTypes.string.isRequired,
  definition: PropTypes.string.isRequired,
  example: PropTypes.string.isRequired,
};

export default Word;
