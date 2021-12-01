import * as React from 'react';
import Button from '@material-ui/core/Button';
import { CharacterEntityVmRM, InfoEntityVmRM } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import { Pages } from '@material-ui/icons';

interface Props {
  characterCollection: CharacterEntityVmRM[];
  infoCollection: InfoEntityVmRM;
  onCreateCharacter: () => void;
  onView: (id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onPrevPage: (prev: string) => void;
  onNextPage: (next: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  // const { characterCollection, onCreateCharacter, onEdit, onDelete } = props;
  const { characterCollection, infoCollection, onEdit, onDelete , onView, onPrevPage, onNextPage} = props;
  console.log('infoCollection ------------xxxxx--------------->', infoCollection);
  return (
    <div className={classes.root}>
      {/* <Button variant="contained" color="primary" onClick={onCreateCharacter}>
        Add (no funciona)
      </Button> */}
      {/* recuperacion de datos de info */}
      <div>
        <p>
          datos ( info ) par la paginación
        </p>
        <p>
            <span>
              Número de personajes .- {infoCollection?.count}<br />
              Páginas .- {infoCollection?.pages}<br />
              Siguiente página .- {infoCollection?.next}<br />
              Página anterior .- {infoCollection?.prev}<br />
            </span>
        </p>
      <Button variant="contained" color="primary" onClick={() => onPrevPage(infoCollection?.prev)}>
        anterior
      </Button>
      <Button variant="contained" color="primary"  onClick={() => onNextPage(infoCollection?.next)}>
        siguiente
      </Button>
      </div>
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onEdit={onEdit} onDelete={onDelete} onView={onView}/>
          </li>
        ))}
      </ul>

    </div>
  );
};
