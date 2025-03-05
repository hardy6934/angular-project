import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from '../../../core/services/auth-service/auth.service';

@Directive({
  selector: '[appLoginState]'
})
export class LoginStateDirective implements OnInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private authService: AuthService
  ) {  }


  ngOnInit(): void {

    console.log('log');
    
    if (this.authService.getLoginStatus()) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'green');
      this.renderer.setProperty(this.el.nativeElement, 'innerText', 'Logged In');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
      this.renderer.setProperty(this.el.nativeElement, 'innerText', 'Logged Out');
    }
  } 
 
 
}
