import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { IBoard } from '../models/board';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {
  @Input() boardList: IBoard[] = [];

  @Output() onSelectedBoard: EventEmitter<number> = new EventEmitter<number>();
  @Output() onEventHandler: EventEmitter<any> = new EventEmitter<any>();

  public selectedBoard: number;
  public boardForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private config: NgSelectConfig
    ) {
    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
   }

  public ngOnInit(): void {
    this.boardForm = this.fb.group({
      boardControl: ['test']
    });
  }

  public selectChange(event): void {
    this.onSelectedBoard.emit(this.selectedBoard);
  }

  public createBoard(): void {
    this.onEventHandler.emit();
  }
}
