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
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { SupplierComponent } from './supplier/supplier.component'
import { UpdateSupplierComponent } from './update-supplier/update-supplier.component';
import { ProductreminderComponent } from './productreminder/productreminder.component';
const arr:Routes=[
                {path:'',component:LoginComponent},
                {path:'menu',component:MenuComponent,children:[
                    {path:'',component:DashboardComponent},
                    {path:'category',component:CategoryComponent},
                    {path:'product',component:ProductComponent},
                    {path:'totalbill',component:TotalbillComponent},
                    {path:'totalorder',component:OrderComponent},
                    {path:'update-cat/:cat_id',component:UpdateCatComponent},
                    {path:'update-pro/:p_id',component:UpdateProComponent},
                    {path:'update-profile/:email_id',component:UpdateProfileComponent},
                    {path:'update-password/:email_id',component:UpdatePasswordComponent},
                    {path:'addpro',component:AddproComponent},
                    {path:'billdetail/:bill_id',component:BilldetailComponent},    
                    {path:'profile',component:ProfileComponent},    
                    {path:'supplier',component:SupplierComponent},
                    {path:'productreminder',component:ProductreminderComponent},
                    {path:'update-supplier/:s_id',component:UpdateSupplierComponent},
                ]},
                {path:'forget',component:ForgetpasswordComponent},     
];    
export const routing=RouterModule.forRoot(arr);
