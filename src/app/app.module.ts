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
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginDialogComponent } from './componentes/login-dialog/login-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardTitleComponent } from './componentes/util/card-title/card-title.component';
import { EditDialogComponent } from './componentes/util/edit-dialog/edit-dialog.component';

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
    EditDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
