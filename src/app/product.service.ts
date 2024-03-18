import { Injectable, OnInit } from '@angular/core';
import { Product } from './Product';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  constructor( private router : Router) {
 
   }
 
   products: Product[] = []; // Tableau de produits

  getImagePath(productId: number): string {
    // Supposons que les images sont stockées dans un dossier "assets/images" avec le format nommé comme "product_id.jpg"
    return `assets/images/image${productId}.jpg`;
  }

  isLowQuantity(quantity: number): boolean {
    return quantity < 5;
  }
  purchase3(product: Product): void {
    if (product.quantity > 0) {
      product.quantity--; // Décrémenter la quantité
      if (product.quantity < 5) {
        alert("Quantité restante inférieure à 5 !"); // Alerte lorsque la quantité est inférieure à 5
      }
    } else {
      alert("Produit épuisé !");
    }
    
}

}


