import { Component, OnInit } from '@angular/core';
import { GUserService } from '../github-user/g-user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  Guser;

  constructor(private userservice:GUserService, private route:ActivatedRoute ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params =>{
      const username = params['username']
    
  
    this.userservice.getUser(username).subscribe(user => {
      this.Guser = user
    });

      
    });
  }

}
