import * as React from 'react';
import Button from '@material-ui/core/Button';
import { CharacterEntityVmRM, InfoEntityVmRM } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import PrevIcon from '@material-ui/icons/ArrowBack';
import NextIcon from '@material-ui/icons/ArrowForward';

interface Props {
  characterCollection: CharacterEntityVmRM[];
  infoCollection: InfoEntityVmRM;
  onCreateCharacter: () => void;
  onView: (id: number) => void;
  // onEdit: (id: number) => void;
  // onDelete: (id: number) => void;
  onPrevPage: (prev: string) => void;
  onNextPage: (next: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, infoCollection, onView, onPrevPage, onNextPage} = props;
  // const { characterCollection, infoCollection, onEdit, onDelete , onView, onPrevPage, onNextPage} = props;

  return (
    <div className={classes.root}>
      <div>
        <h2>
          Informacion de la colección .- 
        </h2>
        <div>
          <span>
              Número de personajes .- {infoCollection?.count}<br />
              Páginas .- {infoCollection?.pages}<br />
              Siguiente página .- {infoCollection?.next}<br />
              Página anterior .- {infoCollection?.prev}<br />
          </span>
        </div>
        <div className={classes.pagination}>
          <Button variant="contained" color="primary" onClick={() => onPrevPage(infoCollection?.prev)}>
            <PrevIcon />
            <span>anterior</span>
          </Button>
          <Button variant="contained" color="primary"  onClick={() => onNextPage(infoCollection?.next)}>
            <span>siguiente</span>
            <NextIcon />
          </Button>
        </div>
      </div>
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onView={onView}/>
            {/* <CharacterCard character={character} onEdit={onEdit} onDelete={onDelete} onView={onView}/> */}
          </li>
        ))}
      </ul>
      <div className={classes.pagination}>
        <Button variant="contained" color="primary" onClick={() => onPrevPage(infoCollection?.prev)}>
          <PrevIcon />
          <span>anterior</span>
        </Button>
        <Button variant="contained" color="primary"  onClick={() => onNextPage(infoCollection?.next)}>
          <span>siguiente</span>
          <NextIcon />
        </Button>
      </div>

    </div>
  );
};
