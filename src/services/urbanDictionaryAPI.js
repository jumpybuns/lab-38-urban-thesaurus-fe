export const getWords = () => {
  return fetch(
    `https://mashape-community-urban-dictionary.p.rapidapi.com/`
  ).then((res) => res.json());
};

export const searchWords = (search) => {
  return fetch(
    `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${search}`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'a5d4ff71fcmsh6c9425374da360fp1168dcjsn4bf2045f5c5a',
        'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com',
      },
    }
  )
    .then((res) => res.json())
    .then((results) =>
      results.list.map(({ defid, word, definition, example }) => ({
        defid,
        word,
        definition,
        example,
      }))
    );
};
