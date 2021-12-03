import { CharacterEntityApiRM } from './character.api-model';
const characterListUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacter = async (id: string): Promise<CharacterEntityApiRM> => {

  const response  = await fetch(`${characterListUrl}/${id}`);

  if (response.ok) {
    return await response.json();
  } else {
    throw Error(response.statusText);
  }
};