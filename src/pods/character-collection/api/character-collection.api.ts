import Axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];
const url = '/api/characters';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  // return characterCollection;
  const response  = await fetch(url);
  console.log("Character-collectios.api.ts <----------", url);
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(response.statusText);
  }
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
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
