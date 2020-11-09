import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BOARD_REDUCER_NODE, BoardState } from '../reducers/board.reducer';

export const boardFeatureSelector = createFeatureSelector<BoardState>(BOARD_REDUCER_NODE);

export const boardListSelector = createSelector(
  boardFeatureSelector,
  state => state.boardList
);
