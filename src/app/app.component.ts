import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBoard } from './models/board';
import { IPhoto } from './models/photo';
import { StorageService } from './services/storage.service';
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
toggle = false;

boardList$: Observable<IBoard[]> = this.storeBoard$.pipe(select(boardListSelector));

photoList$: Observable<IPhoto[]> = this.storePhoto$.pipe(select(selectPhotoByBoard, { boardId: 1 }));

constructor(
  private storeBoard$: Store<BoardState>,
  private storePhoto$: Store<BoardState>,
  private storageService: StorageService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    // this.storageService.init();
    this.storageService.loadFormStorage();
  }

  onAddBorder(board: IBoard): void {
    this.storeBoard$.dispatch(new BoardCreateAction(board));
    this.toggle = false;
  }

  onAddPhoto(photo: IPhoto): void {

    this.storePhoto$.dispatch(new PhotoCreateAction({photo}));

  }

  onSelectedBoard(id?: number): void {
    this.boardId = id;
    this.photoList$ = this.storePhoto$.pipe(select(selectPhotoByBoard, { boardId: id }));
  }

  onDeletePhoto(): void {
    this.storePhoto$.dispatch(new PhotoDeleteAction({ boardId: this.boardId }));
  }

  onSaveBoard() {
    this.storageService.save();
  }
  createBoard() {
    this.toggle = !this.toggle;
  }
}
