import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideRigthComponent } from './components/aside-rigth/aside-rigth.component';
import { AsideLeftComponent } from './components/aside-left/aside-left.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideRigthComponent,
    AsideLeftComponent,
    ProjectCardComponent,
    SkillCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
