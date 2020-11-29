import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPhoto } from '../models/photo';

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.scss']
})
export class ImageFormComponent implements OnInit {

  public name: string;

  @Output() onAddPhoto: EventEmitter<IPhoto> = new EventEmitter<IPhoto>();

  @Input() boardId: number;


  constructor() { }

  ngOnInit(): void {
  }

  public addPhoto(): void {
    const newPhoto: IPhoto = {
      idBoard: this.boardId,
      imgUrl: this.name
    };
    this.onAddPhoto.emit(newPhoto);

  }
}
