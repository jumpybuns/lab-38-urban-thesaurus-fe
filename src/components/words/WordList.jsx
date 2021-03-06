import React from 'react';
import PropTypes from 'prop-types';
import Word from './Word';

const WordList = ({ words }) => {
  const wordElements = words.map((word) => (
    <li key={word.defid}>
      <Word {...word} />
    </li>
  ));

  return (
    <>
      <ul>{wordElements}</ul>
    </>
  );
};
WordList.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string.isRequired,
      definition: PropTypes.string.isRequired,
      example: PropTypes.string.isRequired,
    })
  ),
};

export default WordList;
