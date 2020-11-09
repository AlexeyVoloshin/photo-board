import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgSelectConfig } from '@ng-select/ng-select';
import { IBoard } from '../models/board';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {
  @Input() boardList: IBoard[] = [];

  @Output() onSelectedBoard: EventEmitter<number> = new EventEmitter<number>()

  selectedBoard: number;

  constructor(private config: NgSelectConfig) {
    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
   }

  ngOnInit(): void {

  }
  selectChange(event): void {
    this.onSelectedBoard.emit(this.selectedBoard)
  }
}
