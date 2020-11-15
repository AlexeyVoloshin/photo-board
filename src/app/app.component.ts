import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class AppComponent implements OnChanges, OnInit{

boardId: number;

boardList$: Observable<IBoard[]> = this.storeBoard$.pipe(select(boardListSelector));

photoList$: Observable<IPhoto[]> = this.storePhoto$.pipe(select(selectPhotoByBoard, { boardId: 1 }));

constructor(
  private storeBoard$: Store<BoardState>,
  private storePhoto$: Store<BoardState>
  ) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('================');
    // this.photoList$ = this.storePhoto$.pipe(select(selectPhotoByBoard, { boardId: this.boardId }));

  }
  ngOnInit(): void {

    // this.photoList$ = this.storePhoto$.pipe(select(selectPhotoByBoard, { boardId: this.boardId }));
    console.log(this.photoList$);
    console.log('================');
  }

  onAddBorder(board: IBoard): void {
    this.storeBoard$.dispatch(new BoardCreateAction(board));
  }

  onAddPhoto(photo: IPhoto): void {
    // this.id = ++this.id;

    this.storePhoto$.dispatch(new PhotoCreateAction({photo}));
    console.log('this.boardId-------------', this.boardId);

  }
  selectIdBoard(): number {
    console.log('this.boardId--select photo-----------', this.boardId);

    return this.boardId;

  }
  onSelectedBoard(id?: number): number {
    console.log('id-------------', id);
    this.boardId = id;
    return id
  }
  onDeletePhoto(): void {
    this.storePhoto$.dispatch(new PhotoDeleteAction());
  }
}
