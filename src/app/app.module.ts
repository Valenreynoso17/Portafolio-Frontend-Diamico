import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { MainInfoComponent } from './componentes/main-info/main-info.component';
import { AboutComponent } from './componentes/about/about.component';
import { ExperienceEducationComponent } from './componentes/experience-education/experience-education.component';
import { KnowledgeComponent } from './componentes/knowledge/knowledge.component';
import { ProjectsComponent } from './componentes/projects/projects.component';
import { KnowledgeItemComponent } from './componentes/knowledge/knowledge-item/knowledge-item.component';
import { ExpEduItemComponent } from './componentes/experience-education/exp-edu-item/exp-edu-item.component';
import { ProjectsItemComponent } from './componentes/projects/projects-item/projects-item.component';
import { MainContainerComponent } from './componentes/main-container/main-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainInfoComponent,
    AboutComponent,
    ExperienceEducationComponent,
    KnowledgeComponent,
    ProjectsComponent,
    KnowledgeItemComponent,
    ExpEduItemComponent,
    ProjectsItemComponent,
    MainContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
