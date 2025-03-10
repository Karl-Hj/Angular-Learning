import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //Collection of things of directives etc to make Anuglar applications to work.
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { CardComponent } from './shared/card/card.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { SharedModule } from './shared/card/shared.module';
import { TasksModule } from './tasks/task/tasks.module';

@NgModule({
  // declarations: [AppComponent], //Tells Angular all components used in the application.
  // bootstrap: [AppComponent], //Root component, so Angular knows the starting component.
  // imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent], // Imports can be used to add standalone components.

  //Migration of all components to modules.
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    // CardComponent, //Moved to its on module
    // TasksComponent, //Moved to its on module
    // TaskComponent, //Moved to its on module
    // NewTaskComponent, //Moved to its on module
  ], //CardComponent needs to be added as UserCompnents use it as standalone import. Same with Tasks and NewTask.
  bootstrap: [AppComponent], //Root component, so Angular knows the starting component.
  imports: [BrowserModule, SharedModule, TasksModule], //DatePipe is included in BrwoserModules and therefore does not have to be importet.
})
export class AppMoudle {}
