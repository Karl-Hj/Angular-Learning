import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  calculate = output<InvestmentInput>();

  enteredInitialValue = signal('0');
  enteredAnnualValue = signal('0');
  enteredReturnValue = signal('0');
  enteredDurationValue = signal('0');

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialValue(),
      duration: +this.enteredDurationValue(),
      expectedReturn: +this.enteredReturnValue(),
      annualInvestment: +this.enteredAnnualValue(),
    });
    this.enteredInitialValue.set('0');
    this.enteredAnnualValue.set('0');
    this.enteredReturnValue.set('0');
    this.enteredDurationValue.set('0');
  }
}
