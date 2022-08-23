import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Editor, Toolbar } from 'ngx-editor';
import { ArticleService } from 'src/app/api/article/article.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-article-page',
  templateUrl: './edit-article-page.component.html',
  styleUrls: ['./edit-article-page.component.sass'],
})
export class EditArticlePageComponent implements OnInit, OnDestroy {
  html = '';
  editor: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
  ];

  title = '';
  tagInput = '';
  tags: string[] = [];

  articleID: string;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('userID') == null) {
      window.location.assign(`${environment.siteUrl}`);
    }

    const articleID = this.route.snapshot.paramMap.get('id');

    if (articleID == null) {
      window.location.assign(`${environment.siteUrl}`);
      return;
    }

    this.articleService.getArticle(articleID).subscribe(
      (res: any) => {
        const date = new Date(res.dateCreated);
        console.log(res);
        this.title = res.articleTitle;
        this.html = res.articleBody;
        this.tags = res.articleTags;
        this.articleID = res.articleID;
      },
      (error) => {}
    );

    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  addTag(event: { preventDefault: () => void }) {
    event.preventDefault();

    if (
      this.tagInput == '' ||
      this.tagInput.length > 16 ||
      this.tagInput.length == 0 ||
      this.tagInput == null ||
      this.tagInput == undefined
    ) {
      return;
    }

    if (this.tags.indexOf(this.tagInput) != -1) {
      return;
    }

    this.tags.push(this.tagInput);
  }

  removeTag(event: { preventDefault: () => void }, tag: string) {
    event.preventDefault();

    this.tags.splice(this.tags.indexOf(tag), 1);
  }

  saveArticle() {
    const userID = localStorage.getItem('userID');

    if (userID == null) {
      return;
    }

    this.articleService
      .updateArticle(this.articleID, this.title, this.html, this.tags)
      .subscribe(
        (res: any) => {
          console.log(res);
          window.location.assign(`${environment.siteUrl}/article/${res._id}`);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
