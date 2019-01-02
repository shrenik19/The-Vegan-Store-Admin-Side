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
import { MatInputModule,MatButtonModule,MatIconModule,MatTableModule,MatFormFieldModule,MatFormFieldControl,MatPaginatorModule
  ,MatProgressSpinnerModule,MatCheckboxModule,MatSortModule,MatCardModule, MatToolbarModule, MatSidenavModule, MatListModule,MatSelectModule,MatExpansionPanelDescription,MatExpansionModule,MatExpansionPanel,MatAccordion,MatExpansionPanelTitle} from '@angular/material';
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
    ForgetpasswordComponent
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
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
