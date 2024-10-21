import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Define the isAdmin property within the class
  isAdmin: boolean = true;

  // You can also add methods or additional properties as needed
}
