export class order_class{
    constructor(
    public o_price:number,
    public o_date:Date,
    public fk_email_id:string,
    public status?:string,
    public o_id?:number

    ){
    }
}
