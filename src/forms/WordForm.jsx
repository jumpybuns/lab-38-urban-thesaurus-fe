import React, { Component } from 'react';
import { getWords, searchWords } from '../services/urbanDictionaryAPI';

export default class WordForm extends Component {
  state = {
    searchWords: '',
    words: [],
  };

  componentDidMount() {
    getWords().then((words) => this.setState({ words }));
  }

  handleChange = ({ target }) => {
    searchWords(target.value).then((words) => this.setState({ words }));
    this.setState({ searchWords: target.value });
  };
  render() {
    return (
      <>
        <input
          type="text"
          placeholder="Title"
          value={searchWords}
          onChange={handleChange}
        />
        <WordList onChange={handleChange} words={words} />
      </>
    );
  }
}
