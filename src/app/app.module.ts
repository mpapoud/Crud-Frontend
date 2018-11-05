import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEquipementComponent } from './components/list-equipement/list-equipement.component';
import { FormEquipementComponent } from './components/form-equipement/form-equipement.component';
import {EquipementService} from './shared_service/equipement.service';
import {FormsModule} from '@angular/forms';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { IndexComponent } from './components/index/index.component';
const appRoutes:Routes=[
  {path:'',component:ListEquipementComponent},
  {path:'op',component:FormEquipementComponent},
  {path:'enregistrer',component:RegisterUserComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ListEquipementComponent,
    FormEquipementComponent,
    RegisterUserComponent,
    LoginUserComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EquipementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
