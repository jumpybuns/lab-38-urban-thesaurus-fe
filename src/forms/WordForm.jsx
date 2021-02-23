import React from 'react';
import { useSearch } from '../hooks/Search';
import WordList from '../components/words/WordList';

const WordForm = () => {
  const { searchResults, setSearchTerm, handleSubmit } = useSearch();

  return (
    <div>
      <form>
        <button onClick={handleSubmit}>Submit</button>
        <input
          type="text"
          placeholder="search"
          onChange={({ target }) => setSearchTerm(target.value)}
        />
        <WordList words={searchResults} />
      </form>
    </div>
  );
};

export default WordForm;
