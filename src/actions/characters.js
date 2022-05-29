import { apiCall } from '../services/api';
import {
  CHARACTERS_ERROR,
  CHARACTERS_SUCCESS,
  SET_CURRENT_CHARACTER,
  START_GET_CHARACTERS,
} from './types';

export const getCharacters = () => async (dispatch) => {
  dispatch(startGetCharacters());
  try {
    const { data } = await apiCall.get('characters');
    dispatch(getCharactersSuccess(data));
  } catch (err) {
    dispatch(getCharactersError());
  }
};

export const setCurrentCharacter = (character) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_CHARACTER,
    payload: character,
  });
};

const startGetCharacters = () => ({
  type: START_GET_CHARACTERS,
  payload: true,
});

const getCharactersSuccess = (characters) => ({
  type: CHARACTERS_SUCCESS,
  payload: characters,
});

const getCharactersError = () => ({
  type: CHARACTERS_ERROR,
  payload: true,
});
