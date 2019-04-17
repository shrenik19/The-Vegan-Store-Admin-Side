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
import { AddsupplierComponent } from './addsupplier/addsupplier.component';
import { ChartpageComponent } from './chartpage/chartpage.component';
import { CharttableComponent } from './charttable/charttable.component';
import { ChartpieComponent } from './chartpie/chartpie.component';
import { ChartdouComponent } from './chartdou/chartdou.component';
import { AdminAuthguardService } from './services/admin-authguard.service';
import { NotfoundComponent } from './notfound/notfound.component';
const arr:Routes=[
                {path:'not-found',component:NotfoundComponent},
                {path:'',component:LoginComponent},
                {path:'menu',component:MenuComponent,children:[
                    {path:'dashboard',component:DashboardComponent,canActivate:[AdminAuthguardService]},
                    {path:'category',component:CategoryComponent,canActivate:[AdminAuthguardService]},
                    {path:'product',component:ProductComponent,canActivate:[AdminAuthguardService]},
                    {path:'totalbill',component:TotalbillComponent,canActivate:[AdminAuthguardService]},
                    {path:'totalorder',component:OrderComponent,canActivate:[AdminAuthguardService]},
                    {path:'update-cat/:cat_id',component:UpdateCatComponent,canActivate:[AdminAuthguardService]},
                    {path:'update-pro/:p_id',component:UpdateProComponent},
                    {path:'update-profile/:email_id',component:UpdateProfileComponent},
                    {path:'update-password/:email_id',component:UpdatePasswordComponent},
                    {path:'addpro',component:AddproComponent},
                    {path:'addsupplier',component:AddsupplierComponent},
                    {path:'billdetail/:bill_id',component:BilldetailComponent},    
                    {path:'profile',component:ProfileComponent},    
                    {path:'supplier',component:SupplierComponent},
                    {path:'productreminder',component:ProductreminderComponent},
                    {path:'update-supplier/:s_id',component:UpdateSupplierComponent},
                    {path:'chartpage',component:ChartpageComponent},
                    {path:'charttable',component:CharttableComponent},
                    {path:'chartpie',component:ChartpieComponent},
                    {path:'chartdou',component:ChartdouComponent},
                ]},
                {path:'forget',component:ForgetpasswordComponent},     
                {path:'**',redirectTo:'/not-found',pathMatch:'full'}
];    
export const routing=RouterModule.forRoot(arr);
