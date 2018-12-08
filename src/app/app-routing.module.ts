import {NgModule, Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';

import {FriendComponent} from './friend/friend.component';
import {MenuComponent} from './menu/menu.component';
import {TagComponent} from './tag/tag.component';
import {ForumComponent} from './forum/forum.component';
import {ArticleComponent} from './article/article.component';
import {CategoriesComponent} from './categories/categories.component';

const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component: AppComponent},
  {path: 'friend', component: FriendComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'tag', component: TagComponent},
  {path: 'forum', component: ForumComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'categories', component: CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
