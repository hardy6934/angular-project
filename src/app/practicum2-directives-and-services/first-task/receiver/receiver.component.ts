import { Component } from '@angular/core'; 
import { DataExchangeService } from '../../../core/services/data-exchange/data-exchange.service';

@Component({
  selector: 'app-receiver',
  imports: [],
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.scss'
})
export class ReceiverComponent {
  message: string = '';

  constructor(private dataService: DataExchangeService) {}

  ngOnInit(): void {
    this.message = this.dataService.getMessage();
  }

  receiveLastMessage(): void {
    this.message = this.dataService.getMessage();
  }

}
