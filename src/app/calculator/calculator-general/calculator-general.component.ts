import { AfterViewChecked, AfterViewInit, Component, ContentChildren, ElementRef, OnChanges, OnInit, QueryList, SimpleChanges, TemplateRef, viewChild, ViewChild, ViewChildren, viewChildren } from '@angular/core';  
import { NgClass, NgFor } from '@angular/common';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';
import { CalculatorOutputComponent } from '../calculator-output/calculator-output.component';
import {evaluate} from 'mathjs';

interface OperationObject {
  operation: string;
  displayValue: string;
  handleClick: (val: string) => string;
}


@Component({
  selector: 'app-calculator-general',
  imports: [CalculatorButtonComponent, CalculatorOutputComponent, NgFor, NgClass],
  templateUrl: './calculator-general.component.html',
  styleUrl: './calculator-general.component.scss'
})
export class CalculatorGeneralComponent implements OnInit, AfterViewInit {

  dependencyInjectionElementRef: ElementRef<HTMLElement> | undefined;
  constructor(public element: ElementRef<HTMLElement>){
    this.dependencyInjectionElementRef = element;
  }

  @ViewChild(CalculatorOutputComponent, {read: ElementRef, static: true}) outputComponentStatic: ElementRef<CalculatorOutputComponent>| undefined;
  @ViewChild(CalculatorButtonComponent, {read: ElementRef}) buttonComponent: ElementRef<CalculatorButtonComponent>| undefined;
  
  @ViewChildren(CalculatorButtonComponent, {read: ElementRef}) buttonComponents: QueryList<CalculatorButtonComponent>| undefined;

  ngOnInit(): void { 
    // console.log("ngOnChanges");
    // console.log(this.outputComponentStatic);
    // console.log(this.buttonComponent); 
    // console.log(this.buttonComponents);
    // console.log(this.dependencyInjectionElementRef); 
  }

  ngAfterViewInit(): void {
    // console.log("ngAfterViewInit"); 
    // console.log(this.outputComponentStatic); 
    // console.log(this.buttonComponent);
    // console.log(this.buttonComponents);
    // console.log(this.dependencyInjectionElementRef);
  }


  valueForOutput = "0";

  addNumber(currentValue: string, num: string): string {
    return currentValue === "0"? num : currentValue + num;
  }
  addOperator(currentValue: string, operator: string): string{
    if(!currentValue.endsWith('/') && !currentValue.endsWith('+') && !currentValue.endsWith('-') && !currentValue.endsWith('*') && !currentValue.endsWith('.')) 
      return currentValue + operator;
    else return currentValue;
  }
  deleteLastCharacter(currentValue: string): string {
    return currentValue.length > 1 ? currentValue.slice(0, -1) : "0";
  }

  buttons: OperationObject[] = [
    { operation: '7', displayValue: '7', handleClick: (val: string) => this.addNumber(val, '7') },
    { operation: '8', displayValue: '8', handleClick: (val: string) => this.addNumber(val, '8') },
    { operation: '9', displayValue: '9', handleClick: (val: string) => this.addNumber(val, '9') },
    { operation: '+', displayValue: '+', handleClick: (val: string) => this.addOperator(val, '+') },
    { operation: '4', displayValue: '4', handleClick: (val: string) => this.addNumber(val, '4') },
    { operation: '5', displayValue: '5', handleClick: (val: string) => this.addNumber(val, '5') },
    { operation: '6', displayValue: '6', handleClick: (val: string) => this.addNumber(val, '6') },
    { operation: '*', displayValue: '*', handleClick: (val: string) => this.addOperator(val, '*') },
    { operation: '1', displayValue: '1', handleClick: (val: string) => this.addNumber(val, '1') },
    { operation: '2', displayValue: '2', handleClick: (val: string) => this.addNumber(val, '2') },
    { operation: '3', displayValue: '3', handleClick: (val: string) => this.addNumber(val, '3') },
    { operation: '-', displayValue: '-', handleClick: (val: string) => this.addOperator(val, '-') },
    { operation: '0', displayValue: '0', handleClick: (val: string) => (val !== "0" ? val + '0' : val) },
    { operation: '.', displayValue: '.', handleClick: (val: string) => this.addOperator(val, '.') },
    { operation: '/', displayValue: '/', handleClick: (val: string) => this.addOperator(val, '/') },
    { operation: '<-', displayValue: '<-', handleClick: (val: string) => this.deleteLastCharacter(val) }
  ];

  onButtonClick(button: OperationObject): void {
    this.valueForOutput = button.handleClick(this.valueForOutput);
  }

  receiveMessage()
  {
    debugger;
    let result: number = evaluate(this.valueForOutput);
    this.valueForOutput = result.toString();
  }
 
}
