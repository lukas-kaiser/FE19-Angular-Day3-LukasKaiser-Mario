import { Component} from '@angular/core';
import { IPets } from '../IPets';
import { pets } from '../pets';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  pets : IPets[] = pets
}
