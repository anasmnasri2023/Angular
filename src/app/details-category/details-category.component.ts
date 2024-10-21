import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/Models/Categorie'; 

@Component({
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.css']
})
export class DetailsCategoryComponent implements OnInit {
  category: Categorie | undefined; 
  categories: Categorie[] = [
    { id: 1, title: 'Grand électroménager', image: 'assets/images/categorie_electromenager.jpg', description: 'Large home appliances', available: true },
    { id: 2, title: 'Petit électroménager', image: 'assets/images/categorie_petit_electromenager.jpg', description: 'Small home appliances', available: true },
    { id: 3, title: 'Produits informatiques', image: 'assets/images/categorie_produits_informatiques.jpg', description: 'IT products', available: true },
    { id: 4, title: 'Smart Phones', image: 'assets/images/categorie_smartPhone.jpg', description: 'Smart phones', available: true },
    { id: 5, title: 'TV, images et son', image: 'assets/images/categorie_tv_image_son.jpg', description: 'TV and sound systems', available: true },
    { id: 6, title: 'Produits voiture', image: 'assets/images/produits_nettoyages.jpg', description: 'Car products', available: false }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.category = this.categories.find(c => c.id === id);
  }
}
