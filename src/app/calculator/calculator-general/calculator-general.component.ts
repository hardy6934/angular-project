import { Component } from '@angular/core';  
import { NgClass, NgFor } from '@angular/common';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';
import { CalculatorOutputComponent } from '../calculator-output/calculator-output.component';

@Component({
  selector: 'app-calculator-general',
  imports: [CalculatorButtonComponent, CalculatorOutputComponent, NgFor, NgClass],
  templateUrl: './calculator-general.component.html',
  styleUrl: './calculator-general.component.scss'
})
export class CalculatorGeneralComponent {

  valueForOutput = "0";

  buttons = [ 
    {operation: '7', displayValue: '7', handleClick:()=>{}},
    {operation: '8', displayValue: '8', handleClick:()=>{}},
    {operation: '9', displayValue: '9', handleClick:()=>{}},
    {operation: '*', displayValue: '*', handleClick:()=>{}},
    {operation: '4', displayValue: '4', handleClick:()=>{}},
    {operation: '5', displayValue: '5', handleClick:()=>{}},
    {operation: '6', displayValue: '6', handleClick:()=>{}},
    {operation: '-', displayValue: '-', handleClick:()=>{}},
    {operation: '1', displayValue: '1', handleClick:()=>{}},
    {operation: '2', displayValue: '2', handleClick:()=>{}},
    {operation: '3', displayValue: '3', handleClick:()=>{}},
    {operation: '+', displayValue: '+', handleClick:()=>{}},
    {operation: '0', displayValue: '0', handleClick:()=>{}},
    {operation: ',', displayValue: ',', handleClick:()=>{}} 
  ]

}
