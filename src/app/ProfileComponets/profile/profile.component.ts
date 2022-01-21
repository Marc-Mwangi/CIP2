import { Component, OnInit, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

import { GhServiceService } from 'src/app/gitApi/gh-service.service';
import { RepoService } from 'src/app/repoService/repo.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  me:undefined;
  pic:undefined;
  intro:string;
  port:string;
  portfolio:string;
  constructor(private repo:RepoService,public ghservice:GhServiceService,) {}
  Profile(){
    this.ghservice.getData().subscribe((data)=>{
     
     this.me = data.login;
     this.pic= data.avatar_url;
     this.intro='Welcome to my profile. Creating a website to suite your purpose may seem difficult or even expensive. I am a fullstack delveloper competent in HTML, CSS, JavaScript, jQuery, typescript, Nodejs, Python, Angular and the list keeps going on. And with these tools I am certain i can satisfy all your frontend and backend requirements. Buildin you a robust website to both ease your business operations and be designed customly to express your business and its uniqueness';
     this.port='Marc-Mwangi';
     this.portfolio='Previous Projects';

    })
  }
  project1:string[];
  project2:string[];
  project3:string[];

  Repo(){
    this.repo.getRepo().subscribe((data)=>{
    this.project1 = data[0].name;
    this.project2 = data[1].name;
    this.project3 = data[2].name;
    console.log(this.project1)
    })
  }

 

  ngOnInit() {
    }
  
  

}
