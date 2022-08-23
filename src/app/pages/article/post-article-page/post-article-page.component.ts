import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';
import { ArticleService } from 'src/app/api/article/article.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post-article-page',
  templateUrl: './post-article-page.component.html',
  styleUrls: ['./post-article-page.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class PostArticlePageComponent implements OnInit, OnDestroy {
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

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    if (localStorage.getItem('userID') == null) {
      window.location.assign(`${environment.siteUrl}`);
    }
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

  postArticle() {
    const userID = localStorage.getItem('userID');

    if (userID == null) {
      return;
    }

    this.articleService
      .postArticle(userID, this.title, this.html, this.tags)
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
