export class catpro_class{
    constructor(public cat_name:string,
        public cat_id:number,
        public p_id:number,
        public p_name:string,
        public p_price:number,
        public p_qty:number,
        public fk_cat_id:number,
        public p_mfg:string,
        public p_img:string,
        public buffer_stcok:number,
        public fk_s_id:number
    ){}
}
