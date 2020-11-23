import { Action } from '@ngrx/store';
import { BoardState } from '../reducers/board.reducer';

export enum boardActionsType {
  create = '[BOARD] create board item',
  load = '[BOARD] load board state'
}

export class BoardLoadStateAction implements Action {
  readonly type = boardActionsType.load;
  constructor(public payload: { state: BoardState}) {}
}

export class BoardCreateAction implements Action {
  readonly type = boardActionsType.create;
  constructor(public payload: { name: string }) {}
}

export type BoardActions = BoardCreateAction | BoardLoadStateAction;

// | IdBoardAddAction;
