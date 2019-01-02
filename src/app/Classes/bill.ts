export class bill_class{
    constructor(
    public bill_amt:number,
    public fk_email_id:string,
    public date?:Date,
    public bill_id?:number
    ){

    }
}