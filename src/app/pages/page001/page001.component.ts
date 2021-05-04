import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page001',
  templateUrl: './page001.component.html',
  styleUrls: ['./page001.component.scss'],
})
export class Page001Component implements OnInit {
  currentCount = 0;
  maxCount = 5;

  constructor() {}

  ngOnInit(): void {}

  onIncrement() {
    this.currentCount++;

    if (this.currentCount > this.maxCount) {
      this.currentCount = this.maxCount;
    }
  }

  onDecrement() {
    this.currentCount--;

    if (this.currentCount < 0) {
      this.currentCount = 0;
    }
  }
}
