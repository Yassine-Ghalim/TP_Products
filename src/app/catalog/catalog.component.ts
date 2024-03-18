import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule,ProductDetailsComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {
  products: Product[] = []; // Tableau de produits
  

  constructor() { }

  ngOnInit(): void {
    // Initialisez ici vos produits (par exemple, en les récupérant depuis un service)
    // Exemple d'initialisation manuelle :
    
  }
  

  }



