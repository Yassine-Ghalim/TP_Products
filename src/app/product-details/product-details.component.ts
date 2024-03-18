import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Product } from '../Product';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})


export class ProductDetailsComponent {
  constructor( private ps : ProductService) { }
  @Input() product!: Product ; 
  @Output() ach =new EventEmitter();


  
  purchase2() {
    return this.ach.emit(this.product);
    }
   
   
    showDetails: boolean = false;
  
 

    toggleDetails() {
      this.showDetails = !this.showDetails;
    }
  

}
