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
  intro:string;
  constructor(public ghservice:GhServiceService,) {}
  Profile(){
    this.ghservice.getData().subscribe((data)=>{
     console.log(data);
     this.me = data.login;
     this.pic= data.avatar_url;
     this.intro='Welcome to my profile. Creating a website to suite your purpose may seem difficult or even expensive. I am a fullstack delveloper competent in HTML, CSS, JavaScript, jQuery, typescript, Nodejs, Python, Angular and the list keeps going on. And with these tools I am certain i can satisfy all your frontend and backend requirements. Buildin you a robust website to both ease your business operations and be designed customly to express your business and its uniqueness'
   })
   
    
    
    
  }

  ngOnInit() {
    }
  
  

}
