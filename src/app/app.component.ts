import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blog'; // Application Name
  color = 'red';
  bgColor = "cyan"

  changeColor() {
    let newColor = ['green', 'blue', 'red', 'yellow', 'red'];
    let randomNumber = Math.random() * newColor.length;
    let randomColor = newColor[Math.floor(randomNumber)];
    this.color = randomColor;


    
  }
}
