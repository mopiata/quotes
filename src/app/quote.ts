export class Quote {

  public showDetails:boolean;

  constructor(public quoteBody:string, public author:string, public submitter:string, 
    public date:Date, public upVote:number, public downVote:number,){
    this.date=new Date();
    this.upVote=0;
    this.downVote=0;
    this.showDetails=false;
  }
}
