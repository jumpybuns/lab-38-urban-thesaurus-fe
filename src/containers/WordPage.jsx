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

  return (
    <>
      <WordList words={words} />
    </>
  );
};

export default WordPage;
