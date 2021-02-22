import React from 'react';
import PropTypes from 'prop-types';
import Word from './Word';

const WordList = ({ words, onSubmit }) => {
  const wordElements = words.map((word) => (
    <li key={word.id}>
      <Word {...word} />
    </li>
  ));

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="search" value={words} />
      </form>
      <ul>{wordElements}</ul>
    </>
  );
};
WordList.propTypes = {
  words: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default WordList;
