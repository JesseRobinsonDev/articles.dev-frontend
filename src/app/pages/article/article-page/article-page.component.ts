import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/api/article/article.service';
import { CommentService } from 'src/app/api/comment/comment.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.sass'],
})
export class ArticlePageComponent implements OnInit {
  articleID = '';
  articleTitle = '';
  articleBody: any;
  articleTags: string[] = [];
  authorUsername = '';
  authorID = '';
  dateText = '';

  articleCommentCount: number;
  articleCommentPage = 1;

  sidebarStyling = 'hidden-sidebar';
  sidebarToggle: boolean | null = false;

  commentBody: '';
  articleComments: any[] = [];

  siteUrl: string;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.siteUrl = environment.siteUrl;
    const articleID = this.route.snapshot.paramMap.get('id');

    if (articleID == null) {
      window.location.assign(`${environment.siteUrl}`);
      return;
    }

    this.articleService.getArticle(articleID).subscribe(
      (res: any) => {
        const date = new Date(res.dateCreated);
        console.log(res);
        this.articleTitle = res.articleTitle;
        this.articleBody = res.articleBody;
        this.articleTags = res.articleTags;
        this.authorUsername = res.authorUsername;
        this.authorID = res.authorID;
        this.articleID = res.articleID;
        this.articleCommentCount = res.articleCommentCount;
        this.dateText = `${this.getMonthString(
          date.getMonth()
        )} ${date.getDate()}, ${date.getFullYear()}`;
      },
      (error) => {}
    );

    this.articleService.searchArticleComments(articleID, 10, 0).subscribe(
      (res: any) => {
        console.log(res);
        this.articleComments.push(...res);
      },
      (error) => {}
    );
  }

  getArticleComments(event: { preventDefault: () => void }, page: number) {
    event.preventDefault();
    this.articleCommentPage = page;
    this.articleService
      .searchArticleComments(this.articleID, 10, (page - 1) * 10)
      .subscribe(
        (res: any) => {
          this.articleComments = res;
        },
        (error) => {}
      );
  }

  getMonthString(month: number): string {
    switch (month) {
      case 1:
        return 'Jan';
      case 2:
        return 'Feb';
      case 3:
        return 'Mar';
      case 4:
        return 'Apr';
      case 5:
        return 'May';
      case 6:
        return 'Jun';
      case 7:
        return 'Jul';
      case 8:
        return 'Aug';
      case 9:
        return 'Sep';
      case 10:
        return 'Oct';
      case 11:
        return 'Nov';
      case 12:
        return 'Dec';
      default:
        return 'Jan';
    }
  }

  createDateText(dateStr: string) {
    const date = new Date(dateStr);
    return `${this.getMonthString(
      date.getMonth()
    )} ${date.getDate()}, ${date.getFullYear()}`;
  }

  async toggleSidebar(event: { preventDefault: () => void }) {
    event.preventDefault();

    if (this.sidebarToggle == null) {
      return;
    }

    if (this.sidebarToggle) {
      this.sidebarStyling = 'hide-sidebar';
      this.sidebarToggle = null;
      await new Promise((f) => setTimeout(f, 1000));
      this.sidebarToggle = false;
      this.sidebarStyling = 'hidden-sidebar';
    } else {
      this.sidebarStyling = 'expand-sidebar';
      this.sidebarToggle = null;
      await new Promise((f) => setTimeout(f, 1000));
      this.sidebarToggle = true;
      this.sidebarStyling = '';
    }
  }

  commentOnArticle() {
    const userID = localStorage.getItem('userID');

    if (userID == null) {
      return;
    }

    this.articleService
      .commentArticle(this.articleID, userID, this.commentBody)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.articleComments.unshift(res);
        },
        (error) => {}
      );
  }

  deleteComment(event: { preventDefault: () => void }, commentID: string) {
    event.preventDefault();
    const indexOfObject = this.articleComments.findIndex((object) => {
      return object.commentID === commentID;
    });
    this.articleComments.splice(indexOfObject, 1);
    this.commentService.deleteComment(commentID).subscribe(
      (res: any) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
