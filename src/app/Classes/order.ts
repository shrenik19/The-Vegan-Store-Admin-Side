export class order_class{
    constructor(
    public o_price:number,
    public o_date:Date,
    public fk_email_id:string,
    public fk_address:string,
    public status:string,
    public o_mode:string,
    public o_id?:number

    ){
    }
}
