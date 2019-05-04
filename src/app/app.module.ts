import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectService } from './services/project.service';
import { SelectedProjectPipe } from './pipes/selected-project.pipe';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';

@NgModule({
    declarations: [
        AppComponent,
        ProjectListComponent,
        ProjectDetailsComponent,
        SelectedProjectPipe,
        HeaderComponent,
        AboutComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule
    ],
    providers: [ProjectService],
    bootstrap: [AppComponent]
})
export class AppModule { }
