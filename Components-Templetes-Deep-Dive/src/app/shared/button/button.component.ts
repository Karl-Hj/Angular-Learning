import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton], a[appButton]', //button[appButton] effects buttons with appButton attribute, same with a[appButton]
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {}
