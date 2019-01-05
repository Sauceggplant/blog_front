import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn.component';
import { DiaryComponent } from './diary/diary.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
import { RegisterComponent } from './register/register.component';
import { ShareComponent } from './share/share.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadSelectedModuledsList } from './app-routing.preload.strategy';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'diary', component: DiaryComponent },
  {path: 'learn', component: LearnComponent },
  {path: 'login', component: LoginComponent },
  {path: 'message', component: MessageComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'share', component: ShareComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {
    preloadingStrategy: PreloadSelectedModuledsList,
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
