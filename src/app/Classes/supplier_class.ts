export class SUPPLIER_class{
    constructor(public s_name:string,
        public s_mno:number,
        public s_address:string,
        public fk_cat_id?:number,
        public s_id?:number,
        public fk_p_id?:number
    ){}
  }
  