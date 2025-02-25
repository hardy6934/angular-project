import { Component } from '@angular/core';
import { UserInfoComponent } from './user-info/user-info.component';
import { MoreInfoButtonComponent } from './more-info-button/more-info-button.component';
import { CalculatorGeneralComponent } from './calculator/calculator-general/calculator-general.component';
import { DynamicContainerComponent } from './refs-and-child-derectives/first-task/dynamic-container/dynamic-container.component';
import { ParentContainerComponent } from './refs-and-child-derectives/second-task/parent-container/parent-container.component';

@Component({
  selector: 'app-root',
  imports: [UserInfoComponent, MoreInfoButtonComponent, CalculatorGeneralComponent, DynamicContainerComponent, ParentContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  
  
}
