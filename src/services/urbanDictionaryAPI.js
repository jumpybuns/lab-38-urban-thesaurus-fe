export const searchWords = (word) => {
  return fetch(
    `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`
  )
    .then((res) => res.json())
    .then((results) =>
      results.map(({ word, definition, example }) => ({
        word,
        definition,
        example,
      }))
    );
};
