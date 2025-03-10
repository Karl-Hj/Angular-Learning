import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent], //All shared modules would be added.In this case only CardComponent
  exports: [CardComponent], //Exports all modules that all other modules that use CardComponent.  In this case only CardComponent. In app component Angular would merge all components in exports behind the scene.
})
export class SharedModule {}
