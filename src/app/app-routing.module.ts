import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './pages/article/article-page/article-page.component';
import { PostArticlePageComponent } from './pages/article/post-article-page/post-article-page.component';
import { UserPageComponent } from './pages/user/user-page/user-page.component';
import { EditArticlePageComponent } from './pages/article/edit-article-page/edit-article-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'article/:id', component: ArticlePageComponent },
  { path: 'me/post', component: PostArticlePageComponent },
  { path: 'user/:id', component: UserPageComponent },
  { path: 'me/edit/:id', component: EditArticlePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
