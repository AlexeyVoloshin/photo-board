import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBoard } from './models/board';
import { IPhoto } from './models/photo';
import { BoardCreateAction } from './store/actions/board.actions';
import { PhotoCreateAction, PhotoDeleteAction } from './store/actions/photo.actions';
import { BoardState } from './store/reducers/board.reducer';
import { boardListSelector } from './store/selectors/board.selectors';
import { photoListSelector, selectPhotoByBoard } from './store/selectors/photo.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

boardId: number = 0;

boardList$: Observable<IBoard[]> = this.storeBoard$.pipe(select(boardListSelector));

photoList$: Observable<IPhoto[]> = this.storePhoto$.pipe(select(selectPhotoByBoard, { boardId: this.boardId }));

constructor(
  private storeBoard$: Store<BoardState>,
  private storePhoto$: Store<BoardState>
  ) {}

  onAddBorder(board: IBoard): void {
    this.storeBoard$.dispatch(new BoardCreateAction(board));
  }

  onAddPhoto(photo: IPhoto): void {
    // this.id = ++this.id;

    this.storePhoto$.dispatch(new PhotoCreateAction({photo}));
  }

  onSelectedBoard(id: number): void {
    this.boardId = id;
    console.log('id-------------', id);

  }
  onDeletePhoto(): void {
    this.storePhoto$.dispatch(new PhotoDeleteAction());
  }
}
