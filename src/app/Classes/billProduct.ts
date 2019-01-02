export class billProduct_class{
    constructor(public billdetail_id:number,
        public fk_bill_id:number,
        public fk_p_id:number,
        public price:number,
        public qty:number,
        public p_name:string,
        public p_price:number,
        public p_qty:number,
        public fk_cat_id:number,
        public p_mfg:string,
        public p_img:string,
        public buffer_stock:number,
        public fk_s_id:number,
    public  p_id?:number
    ){}
}