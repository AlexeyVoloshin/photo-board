import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.scss']
})
export class ImageFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addImage(event): void {
    event.preventDefault();
    console.log(event);

  }
}
