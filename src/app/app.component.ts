import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'angular_tut';
  data = 10;
  updateData(){
    // this.data = this.data+1;
    this.data++
  }

}
