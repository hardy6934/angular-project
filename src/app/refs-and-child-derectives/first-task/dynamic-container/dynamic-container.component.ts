import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-container',
  imports: [],
  templateUrl: './dynamic-container.component.html',
  styleUrl: './dynamic-container.component.scss'
})
export class DynamicContainerComponent {
  @ViewChild('tpl', {read: TemplateRef}) tpl!: TemplateRef<any>;

  @ViewChild('container', { read: ViewContainerRef }) ngContainer!: ViewContainerRef; // Привязываем контейнер 

  constructor(private viewContainer: ViewContainerRef){}

  addTemplate(name: string){
    this.viewContainer.createEmbeddedView(this.tpl, { name });  
    this.ngContainer.createEmbeddedView(this.tpl, { name });  
  }

  clearTemplates(){
    this.viewContainer.clear();
    this.ngContainer.clear();
  }

}
