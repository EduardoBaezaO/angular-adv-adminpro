import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthModule } from './auth.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class AuthRoutingModule {}