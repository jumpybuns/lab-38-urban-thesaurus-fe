import React, { useState } from 'react';
import { searchWords } from '../services/urbanDictionaryAPI';
import { useDispatch } from 'react-redux';

const WordForm = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [definition, setDefinition] = useState('');
  const [example, setExample] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchWords({ definition, example }));
    setDefinition('');
    setExample('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
        <button onSubmit={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default WordForm;
