import Axios from 'axios';
import { CharacterEntityApiRM, InfoEntityApiRM } from './character-collectionRM.api-model';
// import { mockCharacterCollectionRM } from './character-collectionRM.mock-data';

// let characterCollection = [...mockCharacterCollectionRM];
// const url = '/api/results';
let url = 'https://rickandmortyapi.com/api/character/';

// https://rickandmortyapi.com/api/character/?page=2

export const getCharacterCollection = (page): Promise<CharacterEntityApiRM[]> => {
  // return characterCollection;
  // const response  = await fetch(url);
  // const response  = fetch(url);
  console.log("url de inicio <----------", url);
  console.log("pagina <----------", page);
  let aux = '';
  if (page != '') {
    console.log('pagina ----->', page);
    aux = page;
  } else {
    console.log('carga inicial ', url);
    aux = url;
  }
  // siguiente linea ok
  return fetch((aux)).then(character => character.json().then(data => data.results))

  // con paginación


  // if (response.ok) {
  //   return await response.json();
  // } else {
  //   throw Error(response.statusText);
  // }
};

export const getInfoCollection = (page): Promise<InfoEntityApiRM> => {
  // return characterCollection;
  // const response  = await fetch(url);
  // const response  = fetch(url);
  // console.log("Character-collectios.api.ts <----------", url);
  let aux = '';
  if (page != '') {
    console.log('info ----->', page);
    aux = page;
  } else {
    console.log('carga inicial ', url);
    aux = url;
  }
  return fetch((aux)).then(info => info.json().then(data => data.info))


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
