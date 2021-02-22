import React, { useEffect, useState } from 'react';
import WordList from '../components/words/WordList';
import { searchWords } from '../services/urbanDictionaryAPI';

const WordPage = () => {
  const [words, setSearchWords] = useState('');

  useEffect(() => {
    searchWords().then((res) => {
      setSearchWords(res);
    });
  }, []);

  const handleSubmit = ({ target }) => {
    searchWords(target.value).then((words) => setSearchWords({ words }));
  };
  return (
    <>
      <WordList words={words} onSubmit={handleSubmit} />
    </>
  );
};

export default WordPage;
