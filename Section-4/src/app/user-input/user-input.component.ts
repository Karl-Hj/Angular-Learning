import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredInitialValue = '0';
  enteredAnnualValue = '0';
  enteredReturnValue = '0';
  enteredDurationValue = '0';

  onSubmit() {
    console.log('Submitted');
  }
}
