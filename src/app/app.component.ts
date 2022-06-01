import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'blog'; // Application Name 
  displayVal:any='';
  getData(value:any){
    console.log(value);
    this.displayVal=value
  }
}
