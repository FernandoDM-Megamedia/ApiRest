import Axios from 'axios';
import { CharacterEntityApiRM, InfoEntityApiRM } from './character-collectionRM.api-model';
// import { mockCharacterCollectionRM } from './character-collectionRM.mock-data';

// let characterCollection = [...mockCharacterCollectionRM];
// const url = '/api/results';
const url = 'https://rickandmortyapi.com/api/character/';
// https://rickandmortyapi.com/api/character/?page=2

export const getCharacterCollection = (): Promise<CharacterEntityApiRM[]> => {
  // return characterCollection;
  // const response  = await fetch(url);
  // const response  = fetch(url);
  // console.log("Character-collectios.api.ts <----------", url);

  return fetch(url).then(character => character.json().then(data => data.results))


  // if (response.ok) {
  //   return await response.json();
  // } else {
  //   throw Error(response.statusText);
  // }
};

export const getInfoCollection = (): Promise<InfoEntityApiRM> => {
  // return characterCollection;
  // const response  = await fetch(url);
  // const response  = fetch(url);
  // console.log("Character-collectios.api.ts <----------", url);

  return fetch(url).then(info => info.json().then(data => data.info))


  // if (response.ok) {
  //   return await response.json();
  // } else {
  //   throw Error(response.statusText);
  // }
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  // base
  // characterCollection = characterCollection.filter((h) => h.id !== id);
  // return true;

  // version primera
  // const response = await fetch(`${url}/${id}` ,{method: 'DELETE' });
  // return response.ok;

  // version con axios
  await Axios.delete(`${url}/${id}`);
  return true;
};
