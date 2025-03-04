import { Component } from '@angular/core';
import { AdvancedIfDirective } from '../../derectives/advanced-if.directive'

@Component({
  selector: 'app-third-task',
  imports: [AdvancedIfDirective],
  templateUrl: './third-task.component.html',
  styleUrl: './third-task.component.scss'
})
export class ThirdTaskComponent {
  isVisible: boolean = true;
}
