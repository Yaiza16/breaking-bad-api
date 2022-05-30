import { apiCall } from '../services/api';
import {
  CHARACTERS_ERROR,
  CHARACTERS_SUCCESS,
  QUOTE_ERROR,
  QUOTE_SUCCESS,
  SET_CURRENT_CHARACTER,
  START_GET_CHARACTERS,
  START_GET_QUOTE,
} from './types';

/* -------------------------------------------------------------------------- */
/*                                 CHARACTERS                                 */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*                                   QUOTES                                   */
/* -------------------------------------------------------------------------- */
export const getQuote = (author) => async (dispatch) => {
  console.log(author);
  dispatch(startGetQuote());
  try {
    const { data } = await apiCall.get(
      `quote/random?author=${author.replace(/\s+/g, '+')}`
    );
    dispatch(getQuoteSuccess(data));
  } catch (err) {
    dispatch(getCharactersError());
  }
};

const startGetQuote = () => ({
  type: START_GET_QUOTE,
  payload: true,
});

const getQuoteSuccess = (quote) => ({
  type: QUOTE_SUCCESS,
  payload: quote,
});

const getQuoteError = () => ({
  type: QUOTE_ERROR,
  payload: true,
});
