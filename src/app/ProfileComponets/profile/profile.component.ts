import { Component, OnInit } from '@angular/core';

import { GhServiceService } from 'src/app/gitApi/gh-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  me:undefined;
  pic:undefined;
  constructor(public ghservice:GhServiceService,) {}
  Profile(){
    this.ghservice.getData().subscribe((data)=>{
     console.log(data);
     this.me = data.login;
     this.pic= data.avatar_url;
     
   })
   
    
    
    
  }

  ngOnInit() {
    }
  
  

}
