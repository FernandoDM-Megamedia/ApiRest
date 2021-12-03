import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
// import { deleteCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  const { infoCollection, loadInfoCollection } = useCharacterCollection();
  const history = useHistory();

  React.useEffect(() => {
    loadCharacterCollection('');
    loadInfoCollection('');
  }, []);

  const handleCharacter = () => {
    history.push(linkRoutes.createCharacter);
  };

  // const handleEdit = (id: any) => {
  //   history.push(linkRoutes.editCharacter(id));
  // };

  const handleView = (id: any) => {
    console.log('handleView',id);
    history.push(linkRoutes.editCharacter(id));
  };

  // const handleDelete = async (id: any) => {
  //   await deleteCharacter(id);
  //   loadCharacterCollection('');
  // };

  const handleNextPrevPage = async (page: string) => {
    if(page != null) {
      loadCharacterCollection(page);
      loadInfoCollection(page);
    } else {
      console.log('no hay más paginas');
    }
  };

  return (
    <CharacterCollectionComponent
      infoCollection={infoCollection}
      characterCollection={characterCollection}
      onCreateCharacter={handleCharacter}
      onView={handleView}
      // onEdit={handleEdit}
      // onDelete={handleDelete}
      onNextPage={handleNextPrevPage}
      onPrevPage={handleNextPrevPage}
    />
  );
};
