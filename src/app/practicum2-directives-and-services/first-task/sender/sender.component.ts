import { Component } from '@angular/core'; 
import { FormsModule, NgModel } from '@angular/forms';
import { DataExchangeService } from '../../../core/services/data-exchange/data-exchange.service';

@Component({
  selector: 'app-sender',
  imports: [FormsModule],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.scss'
})
export class SenderComponent {
  newMessage: string = '';

  constructor(private dataService: DataExchangeService) {}

  sendMessage(): void {
    this.dataService.setMessage(this.newMessage);
  }

  
}
