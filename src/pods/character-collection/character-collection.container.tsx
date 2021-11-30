import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  const { infoCollection, loadInfoCollection } = useCharacterCollection();
  const history = useHistory();
 
  React.useEffect(() => {
    loadCharacterCollection('');
    loadInfoCollection('');
    console.log('estoy en el container despues de llamar al loa_xxxx ----------------->',infoCollection, characterCollection);
  }, []);

  const handleCharacter = () => {
    history.push(linkRoutes.createCharacter);
  };

  const handleEdit = (id: any) => {
    history.push(linkRoutes.editCharacter(id));
  };

  const handleView = (id: any) => {
    console.log('handleView',id);
    history.push(linkRoutes.editCharacter(id));
  };

  const handleDelete = async (id: any) => {
    await deleteCharacter(id);
    loadCharacterCollection('');
  };
  const handlePrevPage = async (prev: string) => {
    console.log('handlePrevPage page ----->', prev);
    
  };
  const handleNextPage = async (next: string) => {
    console.log('next page ----->', next);
    loadCharacterCollection(next);
    loadInfoCollection(next);
  };

  return (
    <CharacterCollectionComponent
      infoCollection={infoCollection}
      characterCollection={characterCollection}
      onCreateCharacter={handleCharacter}
      onView={handleView}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onNextPage={handleNextPage}
      onPrevPage={handlePrevPage}
    />
  );
};
