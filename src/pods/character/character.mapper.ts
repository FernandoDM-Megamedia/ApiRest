import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const characterMapFromApiToVm = (
    character: apiModel.CharacterEntityApiRM
  ): viewModel.CharacterEntityVmRM => ({
    ...character,
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    type: character.type,
    gender: character.gender,
    origin: character.origin,
    location: character.location,
    image: character.image,
    episode: character.episode,
    url: character.url,
    created: character.created,
  }
);