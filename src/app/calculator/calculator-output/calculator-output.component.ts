import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculator-output',
  imports: [],
  templateUrl: './calculator-output.component.html',
  styleUrl: './calculator-output.component.scss'
})
export class CalculatorOutputComponent {

  @Input() displayedValue: string = ""

}
