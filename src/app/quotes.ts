export class Quote {
    showDetails:boolean;
    upvotes:number;
    downvotes:number;
    constructor(public id:number,public name:string,public author:string,public submittedBy:string,public datecreation:Date){
        this.showDetails=false;
        this.upvotes=0;
        this.downvotes=0;
    }
}
