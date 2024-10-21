import { Pipe, PipeTransform } from '@angular/core';
import { Categorie } from 'src/app/Models/Categorie';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(categories: Categorie[], searchTerm: string): Categorie[] {
    if (!categories || !searchTerm) {
      return categories;
    }

    return categories.filter(category =>
      category.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
