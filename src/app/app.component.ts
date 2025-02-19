import { Component } from '@angular/core';
import { UserInfoComponent } from './user-info/user-info.component';
import { MoreInfoButtonComponent } from './more-info-button/more-info-button.component';
import { CalculatorGeneralComponent } from './calculator/calculator-general/calculator-general.component';

@Component({
  selector: 'app-root',
  imports: [UserInfoComponent, MoreInfoButtonComponent, CalculatorGeneralComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  
  
}
