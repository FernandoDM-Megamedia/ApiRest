import { CharacterEntityApiRM, InfoEntityApiRM } from './character-collectionRM.api-model';

let url = 'https://rickandmortyapi.com/api/character/';

export const getCharacterCollection = (page): Promise<CharacterEntityApiRM[]> => {
  let aux = '';
  if (page != '') {
    aux = page;
  } else {
    aux = url;
  }
  return fetch((aux)).then(character => character.json().then(data => data.results))
};

export const getInfoCollection = (page): Promise<InfoEntityApiRM> => {
  let aux = '';
  if (page != '') {
    aux = page;
  } else {
    aux = url;
  }
  return fetch((aux)).then(info => info.json().then(data => data.info))
};
