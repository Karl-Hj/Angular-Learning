import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { SharedModule } from '../shared/card/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  exports: [TasksComponent], //Only Tasks need to be exported as its the only component the used by App component
  imports: [CommonModule, FormsModule, SharedModule], //Needs to imported as all modules should work on their own. It does not get the imported modules from parents.
})
export class TasksModule {}
