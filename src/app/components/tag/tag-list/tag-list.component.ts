import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.sass'],
})
export class TagListComponent implements OnInit {
  @Input() tags: string[];

  constructor() {}

  ngOnInit(): void {}
}
