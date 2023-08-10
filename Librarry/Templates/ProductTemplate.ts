import { IProduct } from "../Contracts/ProductContract";

export abstract class ProductTemplate implements IProduct{
   public Name: string ='';
   public Price: number = 0;
   public QTY: number =1;
   public Total(): number {
        return this.QTY * this.Price;
    }
    public abstract Print(): void;
    
}