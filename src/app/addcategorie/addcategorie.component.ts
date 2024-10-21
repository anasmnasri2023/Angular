import { Component } from '@angular/core';

@Component({
  selector: 'app-addcategorie',
  templateUrl: './addcategorie.component.html',
  styleUrls: ['./addcategorie.component.css']
})
export class AddcategorieComponent {
  name: string = '';
  password: string = '';
  isSubmitted: boolean = false;

  onSubmit() {
    this.isSubmitted = true;

    
    console.log('Nom:', this.name);
    console.log('Mot de passe:', this.password);
  }
}
