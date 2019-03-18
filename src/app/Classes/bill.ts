export class bill_class{
    constructor(
    public bill_amt:number,
    public fk_email_id:string,
    public fk_address:string,
    public o_mode:string,
    public date?:Date,
    public bill_id?:number
    ){

    }
}