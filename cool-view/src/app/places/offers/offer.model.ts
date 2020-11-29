export class Offer{
    public id: string;
    public name: string;
    public type: string;
    public place: string;
    public isActive: boolean;
    public imageUrl: string;

    constructor(id: string, name: string, type: string, place: string, isActive: boolean, imageUrl: string){
        this.id = id;
        this.name = name;
        this.type = type;
        this.place = place;
        this.isActive = isActive;
        this.imageUrl = imageUrl;
    }
}