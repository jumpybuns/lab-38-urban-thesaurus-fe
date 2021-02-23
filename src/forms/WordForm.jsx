import React from 'react';
import { useSearch } from '../hooks/Search';
import WordList from '../components/words/WordList';

const WordForm = () => {
  const { searchResults, setSearchTerm, handleSubmit } = useSearch();

  return (
    <div>
      <button onClick={handleSubmit}>Submit</button>
      <input
        type="text"
        placeholder="search"
        onChange={({ target }) => setSearchTerm(target.value)}
      />
      <WordList words={searchResults} />
    </div>
  );
};

export default WordForm;
