import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartPageComponent} from './start-page/start-page.component';
import {DataComponent} from './data/data.component';
import {LoginComponent} from './login/login.component';
import {AccountComponent} from './account/account.component';
import {AdminComponent} from './admin/admin.component';
import {AfterlogoutComponent} from './afterlogout/afterlogout.component';

const appRoutes: Routes = [
  {path: 'main', component: StartPageComponent, pathMatch: 'full' },
  {path: 'reserve', component: DataComponent },
  {path: 'login', component: LoginComponent },
  {path: 'signup', component: AccountComponent },
  {path: 'admin-panel', component: AdminComponent },
  {path: 'see-you', component: AfterlogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
