import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child-container',
  imports: [],
  templateUrl: './child-container.component.html',
  styleUrl: './child-container.component.scss'
})
export class ChildContainerComponent {
  @ContentChild('contentRef', {static: true}) с!: ElementRef;
}
