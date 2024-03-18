// product.model.ts
export class Product {
    private _id: number;
    private _name: string;
    private _description: string;
    private _quantity: number;
    private _price: number;
    private _img: string; // Ajout de la variable img

    constructor(id: number, name: string, description: string, quantity: number, price: number,img: string) {
      this._id = id;
      this._name = name;
      this._description = description;
      this._quantity = quantity;
      this._price = price;
      this._img = img; // Initialisation de la variable img
  }

  // Getters et Setters pour img
  get img(): string {
    return this._img;
  }
  set img(img: string) {
    this._img = img;
  }
    // Getter and Setter for id
    get id(): number {
      return this._id;
    }
    set id(id: number) {
      this._id = id;
    }
  
    // Getter and Setter for name
    get name(): string {
      return this._name;
    }
    set name(name: string) {
      this._name = name;
    }
  
    // Getter and Setter for description
    get description(): string {
      return this._description;
    }
    set description(description: string) {
      this._description = description;
    }
  
    // Getter and Setter for quantity
    get quantity(): number {
      return this._quantity;
    }
    set quantity(quantity: number) {
      this._quantity = quantity;
    }
  
    // Getter and Setter for price
    get price(): number {
      return this._price;
    }
    set price(price: number) {
      this._price = price;
    }
  }
  