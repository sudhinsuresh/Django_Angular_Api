import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component'
import { AddbookComponent } from './addbook/addbook.component'
import { RegisterComponent} from './register/register.component'
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
import { DetailsComponent } from './details/details.component'

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'viewbooks', component:ViewComponent },
  {path: 'addbooks', component:AddbookComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'detail/:id',component:DetailsComponent},
  {path: 'edit/:id',component:AddbookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
