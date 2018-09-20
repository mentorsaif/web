import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

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
import { SimpleHttpClientComponent } from './simple-http-client/simple-http-client.component';
import { IuserComponent } from './iuser/iuser.component';
import { IthreadComponent } from './ithread/ithread.component';
import { ImessageComponent } from './imessage/imessage.component';
import { SpotifyServiceComponent } from './spotify-service/spotify-service.component';

const childRoutes: Routes = []
const LoggedInGuard: Routes = []

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ProductsListComponent},
  { path: 'about', component: DemoFormSkuComponent },
  { path: 'contact', component: SimpleHttpClientComponent },
  { path: 'contactus', redirectTo: 'contact'},

  { path: 'login', component: IbtidaComponent },
  {
    path: 'protected',
    component: SimpleHttpClientComponent,
    canActivate: [ LoggedInGuard ]
  },

  {
    path: 'products',
    component: ProductsListComponent,
    children: childRoutes
  }
];



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
    SimpleHttpClientComponent,
    IuserComponent,
    IthreadComponent,
    ImessageComponent,
    SpotifyServiceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  exports: [BsDropdownModule,TooltipModule,ModalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
