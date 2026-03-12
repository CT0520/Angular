import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  @Input() name: string = '';
  @Output() nameChnage = new EventEmitter<string>();
  constructor() { }

  nameChange() {
    this.nameChnage.emit("Ajay");
  }
}
