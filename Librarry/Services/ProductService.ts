import { ProductTemplate } from "../Templates/ProductTemplate";

export class Product extends ProductTemplate{
    Name:string ="";
    Price:number=0;
    QTY:number =0;
    Total():number{
        return this.QTY * this.Price;
    }
    Print():void;
    public Print(): void {
        console.log(`Name=${this.Name}\nQty=${this.QTY}\ntotal = ${this.Total()}`);
    }
}