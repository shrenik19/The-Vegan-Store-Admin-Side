export class billdetail_class{
    constructor(
    public fk_bill_id:number,
    public fk_p_id:number,
    public price:number[]=[],
    public qty:number[]=[],
    public fk_email_id:string,
    public o_date:Date,
    public bill_id?:number
    ){

    }
}