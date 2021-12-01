import React, { useState } from 'react';
import { CharacterEntityVmRM, InfoEntityVmRM } from './character-collection.vm';
import { getCharacterCollection, getInfoCollection } from './api';
import { characterMapFromApiToVm, infoMapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  console.log('useCharacterCollection------------------');
  const [characterCollection, setCharacterCollection] = useState<CharacterEntityVmRM[]>([]);
  // duda en la siguiente línea ------------------------------------v
  const [infoCollection, setinfoCollection] = useState<InfoEntityVmRM>();

  const loadCharacterCollection = (page) => {
    getCharacterCollection(page).then((result) => {
        console.log('result ---->', result)
        setCharacterCollection(mapToCollection(result, characterMapFromApiToVm))
      }
    );
  };

  const loadInfoCollection = (page) => {
    getInfoCollection(page).then((info) => {
        console.log('loadInfoCollection - info------->', info)
        // duda en la siguiente línea ----v
        setinfoCollection(infoMapFromApiToVm(info))
      }
    );
  };

  return { characterCollection, loadCharacterCollection, infoCollection, loadInfoCollection};
};
