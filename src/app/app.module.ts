//browser
import { BrowserModule } from '@angular/platform-browser';
//core
import { NgModule } from '@angular/core';
//routing
import { AppRoutingModule } from './app-routing.module';
//app
import { AppComponent } from './app.component';

import { ArticleComponent } from './article/article.component';
import { MenuComponent } from './menu/menu.component';
import { TagComponent } from './tag/tag.component';
import { ForumComponent } from './forum/forum.component';
import { FriendComponent } from './friend/friend.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    //app
    AppComponent,
    FriendComponent,
    TagComponent,
    ForumComponent,
    CategoriesComponent,
    MenuComponent,
    ArticleComponent
  ],
  imports: [
    //browser
    BrowserModule,
    //routing
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
