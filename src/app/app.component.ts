import { Component } from '@angular/core';
import { GHService } from './services/gh.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: String[]=[];

  constructor(private ghService:GHService){

  }

  getUser(){

    this.ghService.getData().subscribe((data) => {
      console.log(data)
    })

  }


}
