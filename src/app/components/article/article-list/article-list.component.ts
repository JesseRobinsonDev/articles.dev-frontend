import { Component, Input, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/api/article/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.sass'],
})
export class ArticleListComponent implements OnInit {
  @Input() articles: any[];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {}

  deleteArticle(event: any) {
    console.log(event);
    const indexOfObject = this.articles.findIndex((object) => {
      return object.articleID === event;
    });
    this.articles.splice(indexOfObject, 1);
    this.articleService.deleteArticle(event).subscribe(
      (res: any) => {
        console.log(res);
      },
      (error) => {}
    );
  }
}
