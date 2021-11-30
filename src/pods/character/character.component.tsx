import React from 'react';
// import { Formik, Form } from 'formik';
// import {
  //   TextFieldComponent,
  //   SelectComponent,
  //   RatingComponent,
  // } from 'common/components';
  // import { Button } from '@material-ui/core';
  // import { formValidation } from './character.validations';
  // import { CharacterEntityVmRM } from './character.vm';
  // import * as classes from './character.styles';
  // import { Lookup } from 'common/models';
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
  
  import { CharacterEntityVmRM } from './character.vm';
  import * as classes from './character.styles';
  
interface Props {
  infoCharacter: CharacterEntityVmRM;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { infoCharacter } = props;
  const mapEpisodes = infoCharacter?.episode.map((episode) => 
    <li>{episode}</li>
  );

  return (
    <>
      <div>
        <h2>Ficha de Personaje</h2>
      </div>
      <Card>
      <CardHeader
        avatar={<Avatar aria-label="Character">{infoCharacter?.id}</Avatar>}
        title={infoCharacter?.name}
        subheader={infoCharacter?.status}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={infoCharacter?.image}
            title={infoCharacter?.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            <div className={ classes.data}>
              <span>{infoCharacter?.species}</span>
              <span>{infoCharacter?.gender}</span>
              <span>{infoCharacter?.type}</span>
              <span>{infoCharacter?.location?.name}</span>
              <span>{infoCharacter?.location?.url}</span>

              <span>{infoCharacter?.origin?.name}</span>
              <span>{infoCharacter?.origin?.url}</span>
              <ul>
                {mapEpisodes}
              </ul>
            </div>
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        {/* boton re regreso */}
      </CardActions>
    </Card>
    </>
  );
};
