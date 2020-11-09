import { Action } from '@ngrx/store';

export enum boardActionsType {
  create = '[BOARD] create board item',
}

export class BoardCreateAction implements Action {
  readonly type = boardActionsType.create;
  constructor(public payload: { name: string }) {}
}

// export class IdBoardAddAction implements Action {
//   readonly type = boardActionsType.addIdBoard;
//   constructor(public payload: { idBoard: number }) {}
// }

export type BoardActions = BoardCreateAction;

// | IdBoardAddAction;
