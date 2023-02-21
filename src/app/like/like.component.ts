import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent {
  @Input() likesCount: number = 0;
  @Input() isActive: boolean = false;

  @Output() change = new EventEmitter();
  onClick() {
    this.likesCount = this.isActive ? 1 : 0;
    this.isActive = !this.isActive;
    this.change.emit();
  }
}
