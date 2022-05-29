import {
  CHARACTERS_ERROR,
  CHARACTERS_SUCCESS,
  SET_CURRENT_CHARACTER,
  START_GET_CHARACTERS,
} from '../actions/types';

const initialState = {
  characters: [],
  error: null,
  loading: false,
  currentCharacter: null,
};

const characterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case START_GET_CHARACTERS:
      return {
        ...state,
        loading: true,
      };
    case CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: payload,
      };
    case CHARACTERS_ERROR:
      return {
        ...state,
        error: payload,
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
