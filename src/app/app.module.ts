import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ShareComponent } from './share/share.component';
import { DiaryComponent } from './diary/diary.component';
import { MessageComponent } from './message/message.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { LearnComponent } from './learn/learn.component';
import { HomeComponent } from './home/home.component';
import { PreloadSelectedModuledsList } from './app-routing.preload.strategy';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ShareComponent,
    DiaryComponent,
    MessageComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    LearnComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PreloadSelectedModuledsList],
  bootstrap: [AppComponent]
})
export class AppModule { }
