import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { AboutComponent } from './Components/about/about.component';

import { HeadermenuComponent } from './Components/header-menu/header-menu.component';
import { ProductComponent } from './Components/product/product.component';
import { UsersListComponent } from './Components/users-list/users-list.component';
import { AuthGuard, RoleGuard, LoginGuard } from './shared/auth.guard';
import { ToastrModule } from 'ngx-toastr';
import { ShoppingListComponent } from './Components/shopping-list/shopping-list.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { CheckoutnewComponent } from './Components/checkoutnew/checkoutnew.component';

const routes: Routes = [
{path:'', component:LoginComponent, canActivate:[LoginGuard]},   
{path:"login", component: LoginComponent, canActivate:[LoginGuard]},
{path:"header", component: HeadermenuComponent, canActivate:[AuthGuard]},
{path:"shopping", component: ShoppingListComponent, canActivate:[AuthGuard]},
{path:"user", component: UsersListComponent, canActivate:[AuthGuard, RoleGuard]},
{path:"reg", component: RegistrationComponent},
{path:"forgotpassword", component: ForgotpasswordComponent},

{path:"cart", component: ShoppingCartComponent},
{path:"checkout", component: CheckoutComponent},
{path:"checkoutnew", component: CheckoutnewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), ToastrModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
