import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { IBoard } from '../models/board';

@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html',
  styleUrls: ['./board-form.component.scss']
})
export class BoardFormComponent implements OnInit {
  public name: string;
  private id = 1;

  @Output() onAddBorder = new EventEmitter<IBoard>()

  constructor() { }

  ngOnInit(): void {
  }

  public addBoard(): void {
    if (this.name) {
      const newBoard = {
        id: this.id,
        name: this.name
      };
      this.onAddBorder.emit(newBoard);
    }
  }

  public cancel(): void {
    this.onAddBorder.emit();
  }

}
