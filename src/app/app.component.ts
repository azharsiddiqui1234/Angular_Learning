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
      Address: [
        {
          Perment_Address: 'Fulambri Aurangabad',
          Residential_Address: 'Pune Cmp Mg Road',
        },
      ],
    },
    {
      Name: 'Shoaib Hasham Kahatri',
      Age: 20,
      ContactNo: 9458978900,
      Address: [
        {
          Perment_Address: ' Gurwaarpeth ',
          Residential_Address: 'Pune Cmp Mg Road',
        },
      ],
    },
  ];
  
}
