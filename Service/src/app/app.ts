import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService, Data } from '../service/data-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  data: Data[] = [];

  // constructor injection
  constructor(private service: DataService) { }
  
  getData() {
    this.service.getData().subscribe({
      next: (data: Data[]) => {
        this.data = data;
        console.log("data fetched successfully", data);
      },
      error: (error) => {
        console.error("Error fetching data:", error);
      }
    })
  }
}
