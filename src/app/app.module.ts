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
import { HttpClientModule} from '@angular/common/http';
import { MatDialogModule,  } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainInfoContactDialogComponent } from './componentes/main-info/main-info-contact-dialog/main-info-contact-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginDialogComponent } from './componentes/login-dialog/login-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardTitleComponent } from './componentes/util/card-title/card-title.component';
import { EditMainInfoDialogComponent } from './componentes/util/edit-main-info-dialog/edit-main-info-dialog.component';
import { EditAboutDialogComponent } from './componentes/util/edit-about-dialog/edit-about-dialog.component';
import { EditProjectsDialogComponent } from './componentes/util/edit-projects-dialog/edit-projects-dialog.component';
import { EditProjectsDialogItemComponent } from './componentes/util/edit-projects-dialog/edit-projects-dialog-item/edit-projects-dialog-item.component';
import { CreateProjectDialogComponent } from './componentes/util/create-project-dialog/create-project-dialog.component';
import { EditProjectDialogItemDialogComponent } from './componentes/util/edit-projects-dialog/edit-projects-dialog-item/edit-project-dialog-item-dialog/edit-project-dialog-item-dialog.component';
import { EditKnowledgeDialogComponent } from './componentes/util/edit-knowledge-dialog/edit-knowledge-dialog.component';
import { CreateKnowledgeDialogComponent } from './componentes/util/create-knowledge-dialog/create-knowledge-dialog.component';
import { EditExperiencieDialogComponent } from './componentes/util/edit-experiencie-dialog/edit-experiencie-dialog.component';
import { EditExperienceDialogItemComponent } from './componentes/util/edit-experiencie-dialog/edit-experience-dialog-item/edit-experience-dialog-item.component';
import { EditExperienceDialogItemDialogComponent } from './componentes/util/edit-experiencie-dialog/edit-experience-dialog-item/edit-experience-dialog-item-dialog/edit-experience-dialog-item-dialog.component';
import { CreateExperienceDialogComponent } from './componentes/util/create-experience-dialog/create-experience-dialog.component';
import { EditEducationDialogComponent } from './componentes/util/edit-education-dialog/edit-education-dialog.component';
import { CreateEducationDialogComponent } from './componentes/util/create-education-dialog/create-education-dialog.component';
import { EditEducationDialogItemComponent } from './componentes/util/edit-education-dialog/edit-education-dialog-item/edit-education-dialog-item.component';
import { EditEducationDialogItemDialogComponent } from './componentes/util/edit-education-dialog/edit-education-dialog-item/edit-education-dialog-item-dialog/edit-education-dialog-item-dialog.component';

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
    MainContainerComponent,
    MainInfoContactDialogComponent,
    LoginDialogComponent,
    CardTitleComponent,
    EditMainInfoDialogComponent,
    EditAboutDialogComponent,
    EditProjectsDialogComponent,
    EditProjectsDialogItemComponent,
    CreateProjectDialogComponent,
    EditProjectDialogItemDialogComponent,
    EditKnowledgeDialogComponent,
    CreateKnowledgeDialogComponent,
    EditExperiencieDialogComponent,
    EditExperienceDialogItemComponent,
    EditExperienceDialogItemDialogComponent,
    CreateExperienceDialogComponent,
    EditEducationDialogComponent,
    CreateEducationDialogComponent,
    EditEducationDialogItemComponent,
    EditEducationDialogItemDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
