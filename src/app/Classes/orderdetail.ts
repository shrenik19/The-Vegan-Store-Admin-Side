export class orderdetail_class{
    constructor(
    public fk_o_id:number,
    public fk_p_id:number,
    public qty:number,
    public price:number,
    public sub_o_id?:number
    ){
    }
}