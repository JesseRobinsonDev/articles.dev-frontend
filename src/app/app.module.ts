import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { NgxEditorModule } from 'ngx-editor';

import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './pages/article/article-page/article-page.component';

import { ArticleCardComponent } from './components/article/article-card/article-card.component';

import { HeaderComponent } from './components/layout/header/header.component';

import { LoginFormComponent } from './components/form/login-form/login-form.component';
import { RegisterFormComponent } from './components/form/register-form/register-form.component';
import { PostArticlePageComponent } from './pages/article/post-article-page/post-article-page.component';
import { UserPageComponent } from './pages/user/user-page/user-page.component';
import { CommentCardComponent } from './components/comment/comment-card/comment-card.component';
import { ArticleBodyComponent } from './components/article/article-body/article-body.component';
import { ArticleListComponent } from './components/article/article-list/article-list.component';
import { CommentListComponent } from './components/comment/comment-list/comment-list.component';
import { TagListComponent } from './components/tag/tag-list/tag-list.component';
import { TagObjectComponent } from './components/tag/tag-object/tag-object.component';
import { EditArticlePageComponent } from './pages/article/edit-article-page/edit-article-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ArticlePageComponent,
    ArticleCardComponent,
    LoginFormComponent,
    RegisterFormComponent,
    HeaderComponent,
    PostArticlePageComponent,
    UserPageComponent,
    CommentCardComponent,
    ArticleBodyComponent,
    ArticleListComponent,
    CommentListComponent,
    TagListComponent,
    TagObjectComponent,
    EditArticlePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxEditorModule.forRoot({
      locals: {
        // menu
        bold: 'Bold',
        italic: 'Italic',
        code: 'Code',
        blockquote: 'Blockquote',
        underline: 'Underline',
        strike: 'Strike',
        bullet_list: 'Bullet List',
        ordered_list: 'Ordered List',
        heading: 'Heading',
        h1: 'Header 1',
        h2: 'Header 2',
        h3: 'Header 3',
        h4: 'Header 4',
        h5: 'Header 5',
        h6: 'Header 6',
        align_left: 'Left Align',
        align_center: 'Center Align',
        align_right: 'Right Align',
        align_justify: 'Justify',
        text_color: 'Text Color',
        background_color: 'Background Color',

        // popups, forms, others...
        url: 'URL',
        text: 'Text',
        openInNewTab: 'Open in new tab',
        insert: 'Insert',
        altText: 'Alt Text',
        title: 'Title',
        remove: 'Remove',
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
