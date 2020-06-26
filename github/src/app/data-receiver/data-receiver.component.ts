import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local-service/local.service';

@Component({
  selector: 'app-data-receiver',
  templateUrl: './data-receiver.component.html',
  styleUrls: ['./data-receiver.component.css']
})
export class DataReceiverComponent implements OnInit {

  constructor(private localService:LocalService) { }

  ngOnInit() {
    this.localService.getUsers()
    .subscribe(data => {
      console.log(data)
    });
    
  }

}
