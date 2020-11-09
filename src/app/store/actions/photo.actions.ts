import { Action } from '@ngrx/store';
import { IPhoto } from 'src/app/models/photo';

export enum photoActionsType {
  create = '[BOARD] create photo item'
}

export class PhotoCreateAction implements Action {
  readonly type = photoActionsType.create;
  constructor(public payload: { photo: IPhoto }) {}
}

export type PhotoActions = PhotoCreateAction;
