import { Routes,RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { UpdateCatComponent } from './update-cat/update-cat.component';
import { UpdateProComponent } from './update-pro/update-pro.component';
import { AddproComponent } from './addpro/addpro.component';
import { TotalbillComponent } from './totalbill/totalbill.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { BilldetailComponent } from './billdetail/billdetail.component';
import { OrderComponent } from './order/order.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
const arr:Routes=[
            
             {path:'',component:LoginComponent},
             
             {path:'menu',component:MenuComponent,children:[
                {path:'category',component:CategoryComponent}, 
                {path:'product',component:ProductComponent},
                {path:'totalbill',component:TotalbillComponent},
                {path:'totalorder',component:OrderComponent},
                {path:'update-cat/:cat_id',component:UpdateCatComponent},
                {path:'update-pro/:p_id',component:UpdateProComponent},
                {path:'addpro',component:AddproComponent},
                {path:'billdetail/:bill_id',component:BilldetailComponent},    
                
             ]},
             {path:'forget',component:ForgetpasswordComponent},     
             
            
];    

export const routing=RouterModule.forRoot(arr);