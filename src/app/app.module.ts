import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './category/category.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { HttpModule,Http } from '@angular/http';
import { Router } from '@angular/router';
import { routing } from './app.routing';
import { MatInputModule,MatButtonModule,MatIconModule,MatTableModule,MatFormFieldModule,MatFormFieldControl,MatPaginatorModule,MatProgressSpinnerModule,MatCheckboxModule,MatSortModule,MatCardModule, MatToolbarModule, MatSidenavModule, MatListModule,MatSelectModule,MatExpansionPanelDescription,MatExpansionModule,MatExpansionPanel,MatAccordion,MatExpansionPanelTitle,MatGridListModule,MatMenuModule} from '@angular/material';
import { ChartsModule } from 'ng2-charts';

import { ProductComponent } from './product/product.component';
import { UpdateCatComponent } from './update-cat/update-cat.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AddproComponent } from './addpro/addpro.component';
import { UpdateProComponent } from './update-pro/update-pro.component';
import { TotalbillComponent } from './totalbill/totalbill.component';
import { LoginComponent } from './login/login.component';
import { BilldetailComponent } from './billdetail/billdetail.component';
import { OrderComponent } from './order/order.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { SupplierComponent } from './supplier/supplier.component';
import { UpdateSupplierComponent } from './update-supplier/update-supplier.component';
import { ProductreminderComponent } from './productreminder/productreminder.component';
import { AddsupplierComponent } from './addsupplier/addsupplier.component';
import { ChartpageComponent } from './chartpage/chartpage.component';
import { CharttableComponent } from './charttable/charttable.component';
import { ChartpieComponent } from './chartpie/chartpie.component';
import { ChartdouComponent } from './chartdou/chartdou.component';
import { PiechartComponent } from './piechart/piechart.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    UpdateCatComponent,
    MenuComponent,
    AddproComponent,
    UpdateProComponent,
    TotalbillComponent,
    LoginComponent,
    BilldetailComponent,
    OrderComponent,
    OrderdetailComponent,
    ForgetpasswordComponent,
    DashboardComponent,
    SignupComponent,
    ProfileComponent,
    UpdateProfileComponent,
    UpdatePasswordComponent,
    SupplierComponent,
    UpdateSupplierComponent,
    ProductreminderComponent,
    AddsupplierComponent,
    ChartpageComponent,
    CharttableComponent,
    ChartpieComponent,
    ChartdouComponent,
    PiechartComponent,
    NotfoundComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,MatPaginatorModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatExpansionModule,
    MatExpansionModule,
    MatGridListModule,
    MatMenuModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
