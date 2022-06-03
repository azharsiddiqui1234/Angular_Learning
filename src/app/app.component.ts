import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blog'; // Application Name
  user = [
    {
      Name: 'Azhar Aminoddin Sayyed',
      Age: 20,
      ContactNo: 9088997998,
    },
    {
      Name: 'Shoaib Hasham Khatri',
      Age: 20,
      ContactNo: 8977677887,
    },
    {
      Name: 'Azhar Aminoddin Sayyed',
      Age: 20,
      ContactNo: 7538569797,
    },
  ];
}
