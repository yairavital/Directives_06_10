import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  display: string = 'Display';
  count: number = 0;
  isDisplay: boolean = true;
  array: string[] = [];
  onClick() {
    const current = new Date();
    const timestamp = current.toLocaleTimeString();
    this.count % 2 == 0
      ? ((this.display = 'Undisplay'), (this.isDisplay = false))
      : ((this.display = 'Display'), (this.isDisplay = true));
    this.array.push(timestamp);
    this.count++;
  }
}
