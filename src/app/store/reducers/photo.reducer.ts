import { IPhoto } from 'src/app/models/photo';
import { PhotoActions, photoActionsType } from '../actions/photo.actions';

export const PHOTO_REDUCER_NODE = 'photo';

export interface PhotoState {
  idIncrement: number;
  photoList: IPhoto[];
}

const initialState: PhotoState = {
  idIncrement: 1,
  photoList: []
}

export const photoReducer = (
  state: PhotoState = initialState, action: PhotoActions) => {
    switch (action.type) {
      case photoActionsType.create:
        return {
          ...state,
          idIncrement: state.idIncrement + 1,
          photoList: [
            ...state.photoList,
            {
              id: state.idIncrement,
              imgUrl: action.payload.photo.imgUrl,
              idBoard: action.payload.photo.idBoard
            }
          ]
        };
        default:
          return state;
    }
}




//  case boardActionsType.createPhoto:
//   return {
//     ...state,
//     idIncrement: state.idIncrement + 1,
//     boardList: [
//       ...state.boardList,
//       {
//         id: state.idIncrement,
//         imgUrl: action.payload.imgUrl,
//         idBoard: action.payloadAdd.idBoard
//       }
//     ]
//   };
