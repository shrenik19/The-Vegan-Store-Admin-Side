import { Routes,RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { UpdateCatComponent } from './update-cat/update-cat.component';
import { UpdateProComponent } from './update-pro/update-pro.component';
import { AddproComponent } from './addpro/addpro.component';
const arr:Routes=[
    
            {path:'',component:CategoryComponent},
             {path:'update-cat/:cat_id',component:UpdateCatComponent},
             {path:'update-pro/:p_id',component:UpdateProComponent},
             {path:'product',component:ProductComponent},
             {path:'addpro',component:AddproComponent},
            
];    

export const routing=RouterModule.forRoot(arr);