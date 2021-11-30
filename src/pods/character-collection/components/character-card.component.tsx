import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar/Avatar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DetailsIcon from '@material-ui/icons/Details';
import { CharacterEntityVmRM } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: CharacterEntityVmRM;
  onView: (id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit, onDelete, onView } = props;
  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Character">{character.id}</Avatar>}
        title={character.name}
        subheader={character.species}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            {character.species}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onView(character.id)}>
          <DetailsIcon/>
        </IconButton>
        <IconButton onClick={() => onEdit(character.id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(character.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
