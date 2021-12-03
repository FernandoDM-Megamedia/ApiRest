import React from 'react';
import { useParams} from 'react-router-dom';
import * as api from './api';
import { CharacterEntityVmRM } from './character.vm'
import { characterMapFromApiToVm } from './character.mapper';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<CharacterEntityVmRM>();
  const { id } = useParams();
  console.log('container id----------_>', id);
  // const history = useHistory();

  const handleLoadCharacter = async () => {
    console.log('llamamos al api');
    const apiCharacter = await api.getCharacter(id);
    console.log('handleLoadCharacter----------_>', apiCharacter);
    // peta aqui en el seteo de datos ¿?
    setCharacter(characterMapFromApiToVm(apiCharacter));
    console.log('seteamos datos a character ----------_>', apiCharacter);

  };

  React.useEffect(() => {
    console.log('if -- >para llamar a handleLoadCharacter con id ---->', id)
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  return <CharacterComponent infoCharacter={character} />;
};
