import { Action } from '@ngrx/store';
import { IPhoto } from 'src/app/models/photo';

export enum photoActionsType {
  create = '[PHOTO] create photo item',
  delete = '[PHOTO] delete last item'
}

export class PhotoCreateAction implements Action {
  readonly type = photoActionsType.create;
  constructor(public payload: { photo: IPhoto }) {}
}

export class PhotoDeleteAction implements Action {
  readonly type = photoActionsType.delete;
  // constructor(public payload: {}) {}
}

export type PhotoActions = PhotoCreateAction | PhotoDeleteAction;
