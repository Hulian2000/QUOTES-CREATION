export class Quotes {
    ShowDetails:boolean;
    upvotes:number;
    downvotes:number;
    constructor(public id:number,public name:string,public author:string,public submittedBy:string,public datecreation:Date){
        this.ShowDetails=false;
        this.upvotes=0;
        this.downvotes=0;
    }
}
