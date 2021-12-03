import React, { useState } from 'react';
import { CharacterEntityVmRM, InfoEntityVmRM } from './character-collection.vm';
import { getCharacterCollection, getInfoCollection } from './api';
import { characterMapFromApiToVm, infoMapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = useState<CharacterEntityVmRM[]>([]);
  const [infoCollection, setinfoCollection] = useState<InfoEntityVmRM>();

  const loadCharacterCollection = (page) => {
      getCharacterCollection(page).then((result) => {
        setCharacterCollection(mapToCollection(result, characterMapFromApiToVm))
      }
    );
  };

  const loadInfoCollection = (page) => {
      getInfoCollection(page).then((info) => {
        setinfoCollection(infoMapFromApiToVm(info))
      }
    );
  };

  return { characterCollection, loadCharacterCollection, infoCollection, loadInfoCollection};
};
