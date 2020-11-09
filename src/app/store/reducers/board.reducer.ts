import { IBoard } from 'src/app/models/board';
import { BoardActions, boardActionsType } from '../actions/board.actions';

export const BOARD_REDUCER_NODE = 'board';

export interface BoardState {
  idIncrement: number;
  boardList: IBoard[];
}

const initialState: BoardState = {
  idIncrement: 1,
  boardList: []
}

export const boardReducer = (
  state: BoardState = initialState, action: BoardActions) => {
  switch (action.type) {
    case boardActionsType.create:
      return {
        ...state,
        idIncrement: state.idIncrement + 1,
        boardList: [
          ...state.boardList,
          {
            id: state.idIncrement,
            name: action.payload.name,
          }
        ]
      };

      default:
        return state;
  }
};

