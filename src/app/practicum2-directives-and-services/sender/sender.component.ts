import { Component } from '@angular/core';
import { DataExchangeService } from '../../core/services/data-exchange.service';
import { FormsModule, NgModel } from '@angular/forms';

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
