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
};

export const photoReducer = (
  state: PhotoState = initialState, action: PhotoActions) => {
    switch (action.type) {
      case photoActionsType.load:
        return {
          ...action.payload.state
        }
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
        case photoActionsType.delete:
          const newPhotoList = state.photoList.filter(item => item.idBoard === action.payload.boardId );
          const otherPhotoList = state.photoList.filter(item => item.idBoard !== action.payload.boardId );

          const lastItem = newPhotoList.length - 1;
          if (lastItem !== undefined) {
            newPhotoList.splice(lastItem, 1);
          }
          return {
            ...state,
            photoList: [...otherPhotoList, ...newPhotoList]
          };
        default:
          return state;
    }
};

