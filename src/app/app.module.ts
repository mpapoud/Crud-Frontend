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
const appRoutes:Routes=[
  {path:'',component:ListEquipementComponent},
  {path:'op',component:FormEquipementComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ListEquipementComponent,
    FormEquipementComponent
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
