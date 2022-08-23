import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.sass'],
})
export class CommentListComponent implements OnInit {
  @Input() comments: any[];
  @Input() page: string;

  constructor() {}

  ngOnInit(): void {}
}
