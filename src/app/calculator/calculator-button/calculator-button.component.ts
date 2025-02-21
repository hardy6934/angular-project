import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calculator-button',
  imports: [],
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator-button.component.scss'
})
export class CalculatorButtonComponent {

  @Output() calculateChild = new EventEmitter<void>();
 
  CalculateResult(){
    this.calculateChild.emit();
  }
  
}
