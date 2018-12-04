import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ArticleComponent } from './article/article.component';
import { MenuComponent } from './menu/menu.component';
import { TagComponent } from './tag/tag.component';
import { ForumComponent } from './forum/forum.component';
import { FriendComponent } from './friend/friend.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ArticleComponent,
    MenuComponent,
    TagComponent,
    ForumComponent,
    FriendComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
