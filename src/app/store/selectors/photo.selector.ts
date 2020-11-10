import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PhotoState, PHOTO_REDUCER_NODE } from '../reducers/photo.reducer';


export const photoFeatureSelector = createFeatureSelector<PhotoState>(PHOTO_REDUCER_NODE);

export const photoListSelector = createSelector(
  photoFeatureSelector,
  state => state.photoList
);

export const selectPhotoByBoard = createSelector(
  photoListSelector,
  (photo, props) => {
    return photo.filter(
      (item) => item.idBoard === props.boardId
    )
  }
)
