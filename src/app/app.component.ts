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
import { selectPhotoByBoard } from './store/selectors/photo.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

public boardId: number;
public toggle = false;

public boardList$: Observable<IBoard[]> = this.storeBoard$.pipe(select(boardListSelector));

public photoList$: Observable<IPhoto[]> = this.storePhoto$.pipe(select(selectPhotoByBoard, { boardId: 1 }));

constructor(
  private storeBoard$: Store<BoardState>,
  private storePhoto$: Store<BoardState>,
  private storageService: StorageService,
  ) {}

  ngOnInit(): void {
    this.storageService.loadFormStorage();
  }

  public onAddBorder(board: IBoard): void {
    if (!board) {
      this.toggle = false;
      return;
    }
    this.storeBoard$.dispatch(new BoardCreateAction(board));
    this.toggle = false;
  }

  public onAddPhoto(photo: IPhoto): void {
    this.storePhoto$.dispatch(new PhotoCreateAction({photo}));
  }

  public onSelectedBoard(id?: number): void {
    this.boardId = id;
    this.photoList$ = this.storePhoto$.pipe(select(selectPhotoByBoard, { boardId: id }));
  }

  public onDeletePhoto(): void {
    this.storePhoto$.dispatch(new PhotoDeleteAction({ boardId: this.boardId }));
  }

  public onSaveBoard(): void {
    this.storageService.save();
  }

  public eventHandlerCreateBoard(): void {
    this.toggle = !this.toggle;
  }
}
