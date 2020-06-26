import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http:HttpClient) {

  }
  ngOnInit() {
    this.http.get('https://api.github.com/users')
    .subscribe(data => {
      console.log(data)
    });
  }

}
