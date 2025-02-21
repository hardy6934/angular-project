import { Component } from '@angular/core';  
import { NgClass, NgFor } from '@angular/common';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';
import { CalculatorOutputComponent } from '../calculator-output/calculator-output.component';
import {evaluate} from 'mathjs';

interface OperationObject {
  operation: string;
  displayValue: string;
  handleClick: () => void;
}


@Component({
  selector: 'app-calculator-general',
  imports: [CalculatorButtonComponent, CalculatorOutputComponent, NgFor, NgClass],
  templateUrl: './calculator-general.component.html',
  styleUrl: './calculator-general.component.scss'
})
export class CalculatorGeneralComponent {


  valueForOutput = "0";

  buttons: OperationObject[] = [ 
    {operation: '7', displayValue: '7', handleClick:()=>{ 
      if(this.valueForOutput == "0"){
        this.valueForOutput = "7";
      }else
      {
        this.valueForOutput += "7";
      }
    }},
    {operation: '8', displayValue: '8', handleClick:()=>{
      if(this.valueForOutput == "0"){
        this.valueForOutput = "8";
      }else
      {
        this.valueForOutput += "8";
      }
    }},
    {operation: '9', displayValue: '9', handleClick:()=>{
      if(this.valueForOutput == "0"){
        this.valueForOutput = "9";
      }else
      {
        this.valueForOutput += "9";
      }
  }},
    {operation: '+', displayValue: '+', handleClick:()=>{
      if(!this.valueForOutput.endsWith('/') && !this.valueForOutput.endsWith('+') && !this.valueForOutput.endsWith('-') && !this.valueForOutput.endsWith('*') && !this.valueForOutput.endsWith('.')) 
        this.valueForOutput += '+' 
    }},
    {operation: '4', displayValue: '4', handleClick:()=>{
      if(this.valueForOutput == "0"){
        this.valueForOutput = "4";
      }else
      {
        this.valueForOutput += "4";
      }
    }},
    {operation: '5', displayValue: '5', handleClick:()=>{
      if(this.valueForOutput == "0"){
        this.valueForOutput = "5";
      }else
      {
        this.valueForOutput += "5";
      }
    }},
    {operation: '6', displayValue: '6', handleClick:()=>{
      if(this.valueForOutput == "0"){
        this.valueForOutput = "6";
      }else
      {
        this.valueForOutput += "6";
      }
    }},
    {operation: '*', displayValue: '*', handleClick:()=>{
      if(!this.valueForOutput.endsWith('/') && !this.valueForOutput.endsWith('+') && !this.valueForOutput.endsWith('-') && !this.valueForOutput.endsWith('*') && !this.valueForOutput.endsWith('.')) 
        this.valueForOutput += '*' 
    }},
    {operation: '1', displayValue: '1', handleClick:()=>{
      if(this.valueForOutput == "0"){
        this.valueForOutput = "1";
      }else
      {
        this.valueForOutput += "1";
      }
    }},
    {operation: '2', displayValue: '2', handleClick:()=>{
      if(this.valueForOutput == "0"){
        this.valueForOutput = "2";
      }else
      {
        this.valueForOutput += "2";
      }
    }},
    {operation: '3', displayValue: '3', handleClick:()=>{
      if(this.valueForOutput == "0"){
        this.valueForOutput = "3";
      }else
      {
        this.valueForOutput += "3";
      }
    }},
    {operation: '-', displayValue: '-', handleClick:()=>{
      debugger;
      if(!this.valueForOutput.endsWith('/') && !this.valueForOutput.endsWith('+') && !this.valueForOutput.endsWith('-') && !this.valueForOutput.endsWith('*') && !this.valueForOutput.endsWith('.')) 
        this.valueForOutput += '-' 
    }},
    {operation: '0', displayValue: '0', handleClick:()=>{ if(this.valueForOutput!= "0")this.valueForOutput += 0}},
    {operation: '.', displayValue: '.', handleClick:()=>{
      if(!this.valueForOutput.endsWith('/') && !this.valueForOutput.endsWith('+') && !this.valueForOutput.endsWith('-') && !this.valueForOutput.endsWith('*') && !this.valueForOutput.endsWith('.'))
      {
        this.valueForOutput += '.'
      }
    }}, 
    {operation: '/', displayValue: '/', handleClick:()=>{ 
      if(!this.valueForOutput.endsWith('/') && !this.valueForOutput.endsWith('+') && !this.valueForOutput.endsWith('-') && !this.valueForOutput.endsWith('*') && !this.valueForOutput.endsWith('.')) 
        this.valueForOutput += '/' 
    }},
    {operation: '<-', displayValue: '<-', handleClick:()=>{
      if(this.valueForOutput.length > 1){
        this.valueForOutput = this.valueForOutput.slice(0, -1)
      }else if(this.valueForOutput.length == 1)
      {
        this.valueForOutput = "0"
      }
    }}, 
  ]

  receiveMessage()
  {
    debugger;
    let result: number = evaluate(this.valueForOutput);
    this.valueForOutput = result.toString();
  }
 
}
