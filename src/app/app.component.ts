import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBoard } from './models/board';
import { IPhoto } from './models/photo';
import { BoardCreateAction } from './store/actions/board.actions';
import { PhotoCreateAction } from './store/actions/photo.actions';
import { BoardState } from './store/reducers/board.reducer';
import { boardListSelector } from './store/selectors/board.selectors';
import { photoListSelector } from './store/selectors/photo.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

idBoard: number;
private id = 1;

boardList$: Observable<IBoard[]> = this.store$.pipe(select(boardListSelector));
photoList$: Observable<IPhoto[]> = this.store$.pipe(select(photoListSelector));
constructor(
  private store$: Store<BoardState>
  ) {}

  onAddBorder(board: IBoard): void {
    this.store$.dispatch(new BoardCreateAction(board));
  }

  onAddPhoto(photoUrl: string): void {
    this.id = ++this.id;
    const photo: IPhoto = {
      id: this.id,
      imgUrl: photoUrl,
      idBoard: this.idBoard
    }
    this.store$.dispatch(new PhotoCreateAction({photo}));
  }

  onSelectedBoard(id: number): void {
    console.log('board id', this.idBoard);
    this.idBoard = id;

  }
}
