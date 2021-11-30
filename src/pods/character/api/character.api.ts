import { CharacterEntityApiRM } from './character.api-model';
// import { Lookup } from 'common/models';
// import { mockCities, mockCharacterCollection } from './character.mock-data';
// import { hot } from 'react-hot-loader';
// import Axios from 'axios';

// const characterListUrl = '/api/characters';
const characterListUrl = 'https://rickandmortyapi.com/api/character';
// https://rickandmortyapi.com/api/character/2

export const getCharacter = async (id: string): Promise<CharacterEntityApiRM> => {
  // return mockCharacterCollection.find((h) => h.id === id);
  console.log('dentro de la API con id ----->', id);
  const response  = await fetch(`${characterListUrl}/${id}`);
  console.log('respuesta  ---------->', response);
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(response.statusText);
  }
};