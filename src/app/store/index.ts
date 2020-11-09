import { Action, ActionReducerMap } from '@ngrx/store';
import { PHOTO_REDUCER_NODE, PhotoState, photoReducer } from './reducers/photo.reducer';
import { BOARD_REDUCER_NODE, BoardState, boardReducer } from './reducers/board.reducer';

export interface State {
  [BOARD_REDUCER_NODE]: BoardState;
  [PHOTO_REDUCER_NODE]: PhotoState;
}

export const reducers: ActionReducerMap<State> = {
  [BOARD_REDUCER_NODE]: boardReducer,
  [PHOTO_REDUCER_NODE]: photoReducer
}

