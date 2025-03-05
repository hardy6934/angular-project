import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../../../core/services/auth-service/auth.service';

@Directive({
  selector: '[appLoginVisibility]'
})
export class LoginVisibilityDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) {  }


  ngOnInit(): void { 
    if(this.authService.getLoginStatus()){ 
      this.viewContainer.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainer.clear();
    }
  }

  
}
