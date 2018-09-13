import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { TooltipModule } from 'ngx-bootstrap/tooltip'
import { ModalModule } from 'ngx-bootstrap/modal'

import { AppComponent } from './app.component';
import { IbtidaComponent } from './ibtida/ibtida.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { ArticleComponent } from './article/article.component';
import { fromEventPattern } from 'rxjs';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { PriceDisplayComponent } from './price-display/price-display.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';

@NgModule({
  declarations: [
    AppComponent,
    IbtidaComponent,
    UserComponent,
    UserListComponent,
    ArticleComponent,
    ProductsListComponent,
    ProductComponent,
    ProductRowComponent,
    ProductImageComponent,
    PriceDisplayComponent,
    ProductDepartmentComponent,
    DemoFormSkuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
  ],
  exports: [BsDropdownModule,TooltipModule,ModalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
