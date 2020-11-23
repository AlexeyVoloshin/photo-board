import { Action } from '@ngrx/store';
import { IPhoto } from 'src/app/models/photo';
import { PhotoState } from '../reducers/photo.reducer';

export enum photoActionsType {
  create = '[PHOTO] create photo item',
  delete = '[PHOTO] delete last item',
  load = '[PHOTO] load photo state'

}

export class PhotoLoadStateAction implements Action {
  readonly type = photoActionsType.load;
  constructor(public payload: { state: PhotoState}) {}
}

export class PhotoCreateAction implements Action {
  readonly type = photoActionsType.create;
  constructor(public payload: { photo: IPhoto }) {}
}

export class PhotoDeleteAction implements Action {
  readonly type = photoActionsType.delete;
  constructor(public payload: { boardId }) {}
}

export type PhotoActions = PhotoCreateAction
| PhotoDeleteAction
| PhotoLoadStateAction;
