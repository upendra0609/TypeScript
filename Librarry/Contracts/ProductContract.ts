export interface IProduct{
    Name:string;
    Price:number;
    QTY:number;
    Total():number;
    Print():void;
}