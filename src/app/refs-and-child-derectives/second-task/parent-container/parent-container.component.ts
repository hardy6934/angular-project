import { AfterViewInit, Component, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { ChildContainerComponent } from '../child-container/child-container.component';

@Component({
  selector: 'app-parent-container',
  imports: [ChildContainerComponent],
  templateUrl: './parent-container.component.html',
  styleUrl: './parent-container.component.scss'
})
export class ParentContainerComponent implements AfterViewInit{
  @ViewChild('child') child!: ChildContainerComponent;
  // @ContentChild('contentRef', {static: true}) content!: ElementRef;

  ngAfterViewInit (): void { 
    console.log('Дочерний компонент', this.child);
    console.log('Переданный компонент', this.child.с.nativeElement.innerText);
  }

  logChildContent() { 
    console.log('Динамически вызванный контент:', this.child.с.nativeElement.innerText);
    }

}
