import { useState } from 'react';
import { searchWords } from '../services/urbanDictionaryAPI';

export const useSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    searchWords(searchTerm).then((words) => {
      setSearchResults(words);
    });
  };

  return {
    searchResults,
    handleSubmit,
    setSearchTerm,
  };
};
