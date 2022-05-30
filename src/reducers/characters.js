import {
  CHARACTERS_ERROR,
  CHARACTERS_SUCCESS,
  QUOTE_ERROR,
  QUOTE_SUCCESS,
  SET_CURRENT_CHARACTER,
  START_GET_CHARACTERS,
  START_GET_QUOTE,
} from '../actions/types';

const initialState = {
  characters: [],
  error: null,
  loading: false,
  currentCharacter: null,
  quote: null,
};

const characterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case START_GET_QUOTE:
    case START_GET_CHARACTERS:
      return {
        ...state,
        loading: true,
      };
    case QUOTE_ERROR:
    case CHARACTERS_ERROR:
      return {
        ...state,
        error: payload,
      };
    case CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: payload,
      };
    case QUOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        quote: payload,
      };
    case SET_CURRENT_CHARACTER:
      return {
        ...state,
        currentCharacter: payload,
      };
    default:
      return state;
  }
};

export default characterReducer;
