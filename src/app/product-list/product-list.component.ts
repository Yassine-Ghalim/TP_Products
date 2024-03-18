import { Component } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { Product } from '../Product';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductDetailsComponent,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] | undefined;
 
  constructor( private ps : ProductService ){}
  
  ngOnInit(): void {
  // Initialisez ici vos produits (par exemple, en les récupérant depuis un service)
 // Exemple d'initialisation manuelle :
 this.products = [
  new Product(1, 'UMIDIGI A15', "Le téléphone portable Cell Phones est un smartphone Android de dernière génération doté de performances exceptionnelles. Avec sa capacité de stockage généreuse de 256 Go, vous disposez de tout l espace nécessaire pour stocker vos photos, vidéos, applications et bien plus encore. Son processeur Octa Core garantit une expérience fluide et réactive, même lors de l exécution de plusieurs applications simultanément Capturez chaque moment avec une qualité exceptionnelle grâce à la caméra principale de 64 MP, qui vous permet de prendre des photos nettes et détaillées, même dans des conditions de faible luminosité. Profitez d une immersion totale dans vos contenus grâce à l écran HD+ Full-View de 6.7 pouces avec encoche en forme de goutte d eau, offrant des couleurs vives et des détails nets", 10, 20.99, this.getImagePath(1)),
  new Product(2, 'SAMSUNG Galaxy A14', 'Le smartphone 4G LTE est un choix idéal pour ceux qui recherchent des performances et une connectivité de pointe. Doté d une capacité de stockage généreuse de 128 Go, vous disposez de suffisamment d espace pour stocker vos applications, photos, vidéos et autres fichiers multimédias. Avec une mémoire RAM de 4 Go, ce téléphone offre une expérience fluide et réactive, permettant une utilisation multitâche sans problème. Capturez des moments inoubliables avec la caméra principale de 50 MP et bénéficiez de détails nets et de couleurs éclatantes. De plus, avec le triple appareil photo, comprenant une variété de lentilles pour des perspectives différentes, vous pouvez explorer votre créativité photographique et capturer des images époustouflantes dans toutes les situations.', 15, 15.49, this.getImagePath(2)),
  new Product(3, 'A15 Pro Max', "Le téléphone portable Cell Phone est un choix parfait pour ceux qui recherchent des performances haut de gamme et une expérience utilisateur exceptionnelle. Doté d'une mémoire impressionnante de 8 Go de RAM et de 512 Go de stockage interne, ce téléphone offre une grande capacité pour stocker vos applications, photos, vidéos et autres fichiers multimédias, ainsi qu'une fluidité exceptionnelle dans l'exécution de multiples tâches et applications gourmandes en ressources. Profitez d'une expérience visuelle immersive grâce à l'écran AMOLED FHD de 6,82 pouces, qui offre des couleurs vives, des contrastes élevés et des angles de vision larges. Que vous regardiez des vidéos, jouiez à des jeux ou naviguiez sur le Web, cet écran de qualité supérieure vous offre une expérience visuelle exceptionnelle.", 8, 30.00, this.getImagePath(3))
];
// Filtrer les produits dont la quantité est supérieure à zéro
this.products = this.products.filter(product => product.quantity > 0);
}
  
  getImagePath(productId: number): string {
    // Supposons que les images sont stockées dans un dossier "assets/images" avec le format nommé comme "product_id.jpg"
    return this.ps.getImagePath(productId);
  }
  isLowQuantity(quantity: number): boolean {
    return this.ps.isLowQuantity(quantity);
  }
  purchase1(product: Product): void {
   this.ps.purchase3(product);
}


}
