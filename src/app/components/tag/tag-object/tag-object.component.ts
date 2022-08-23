import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-object',
  templateUrl: './tag-object.component.html',
  styleUrls: ['./tag-object.component.sass'],
})
export class TagObjectComponent implements OnInit {
  @Input() tag: string;

  constructor() {}

  ngOnInit(): void {}
}
