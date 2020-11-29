export class Place{
    public id: string;
    public title: string;
    public description: string;
    public imageUrl: string;
    public price: number;
    public offerFlag: string;

    constructor(id: string, title: string, description: string, imageUrl: string, price: number, offerFlag: string){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.price = price;
        this.offerFlag = offerFlag;
    }
}