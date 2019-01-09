export class supplier_class{
    constructor(public s_name:string,
        public fk_p_id:number,
        public s_mno:number,
        public s_address:string,
        public s_id?:number,
        public p_name?:string,
        public p_price?:number,
        public p_qty?:number,
        public fk_cat_id?:number,
        public p_mfg?:string,
        public p_img?:string,
        public buffer_stock?:number,
        public fk_s_id?:number,
    public  p_id?:number,
    public cat_id?:number,
    public cat_name?:string
    ){}
  }
  