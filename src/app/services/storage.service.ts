import { Injectable } from "@angular/core";
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { BoardLoadStateAction } from '../store/actions/board.actions';
import { PhotoLoadStateAction } from '../store/actions/photo.actions';
import { BoardState, BOARD_REDUCER_NODE } from '../store/reducers/board.reducer';
import { PhotoState } from '../store/reducers/photo.reducer';
import { boardFeatureSelector } from '../store/selectors/board.selectors';
import { photoFeatureSelector } from '../store/selectors/photo.selector';

export const BOARD_LOCALSTORAGE_KEY = 'board';
export const PHOTO_LOCALSTORAGE_KEY = 'photo';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private isInit = false;
  constructor(
    private storeBoard$: Store<BoardState>,
    private storePhoto$: Store<PhotoState>
    ) {}

  public save(): void {
    if (this.isInit) {
      return;
    }
    this.isInit = true;

    this.storeBoard$.pipe(select(boardFeatureSelector),
      filter(state => !!state)
    ).subscribe(state => {
      localStorage.setItem(BOARD_LOCALSTORAGE_KEY, JSON.stringify(state));
    });

    this.storePhoto$.pipe(select(photoFeatureSelector),
      filter(state => !!state)
    ).subscribe(state => {
      localStorage.setItem(PHOTO_LOCALSTORAGE_KEY, JSON.stringify(state));
    });
  }
  public loadFormStorage(): void {
    const storageBoardState = localStorage.getItem(BOARD_LOCALSTORAGE_KEY);
    const storagePhotoState = localStorage.getItem(PHOTO_LOCALSTORAGE_KEY);

    if (storageBoardState) {
      this.storeBoard$.dispatch(new BoardLoadStateAction({
        state: JSON.parse(storageBoardState)
      }));
    }
    if (storagePhotoState) {
      this.storePhoto$.dispatch(new PhotoLoadStateAction({
        state: JSON.parse(storagePhotoState)
      }));
    }
  }
}
