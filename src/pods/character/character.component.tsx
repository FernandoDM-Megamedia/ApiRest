import React from 'react';
import { CharacterEntityVmRM } from './character.vm';
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

interface Props {
  infoCharacter: CharacterEntityVmRM;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { infoCharacter } = props;
  
  return (
    <>
      <div>
        ficha de personaje .- <br/>
        { infoCharacter}
        {/* {infoCharacter.id}
        {infoCharacter.name}
        {infoCharacter.gender}
        {infoCharacter.image} */}
      </div>
    </>
  );
};
