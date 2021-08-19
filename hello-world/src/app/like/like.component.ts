import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent {
  @Input('likesCount') likesCount: number;
  @Input('isActive') isLiked: boolean;

  onClick() {
    this.isLiked ? (this.likesCount -= 1) : (this.likesCount += 1);
    this.isLiked = !this.isLiked;
  }
}
