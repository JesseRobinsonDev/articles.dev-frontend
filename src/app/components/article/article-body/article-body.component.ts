import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-article-body',
  templateUrl: './article-body.component.html',
  styleUrls: ['./article-body.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class ArticleBodyComponent implements OnInit {
  @Input() html: string;

  constructor() {}

  ngOnInit(): void {}
}
