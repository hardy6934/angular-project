import { Component } from '@angular/core';  
import { NgFor } from '@angular/common';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';
import { CalculatorOutputComponent } from '../calculator-output/calculator-output.component';

@Component({
  selector: 'app-calculator-general',
  imports: [CalculatorButtonComponent, CalculatorOutputComponent, NgFor],
  templateUrl: './calculator-general.component.html',
  styleUrl: './calculator-general.component.scss'
})
export class CalculatorGeneralComponent {

  displayValue = "0";

  buttons = [
    {operation: '1', displayValue: '1', handleClick:()=>{}},
    {operation: '2', displayValue: '2', handleClick:()=>{}},
    {operation: '3', displayValue: '3', handleClick:()=>{}},
    {operation: '4', displayValue: '4', handleClick:()=>{}},
    {operation: '5', displayValue: '5', handleClick:()=>{}}
  ]

}
