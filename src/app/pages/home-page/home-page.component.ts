import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/api/article/article.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
})
export class HomePageComponent implements OnInit {
  articles: any[] = [];

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let query: string | null = '';
    this.route.queryParams.subscribe((params) => {
      const queryParam = params['query'];
      console.log(queryParam);
      if (queryParam == undefined) {
        query = null;
      } else {
        query = queryParam;
      }
      this.articleService.searchArticles(10, 0, query).subscribe(
        (res: any) => {
          console.log(res);
          this.articles = res;
        },
        (error) => {}
      );
    });
  }

  getDateObj(date: string) {
    return new Date(date);
  }
}
