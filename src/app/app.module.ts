import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ImageUploadModule } from 'angular2-image-upload';
import { LocalStorage } from "angular2-localstorage/WebStorage";
import { LocalStorageModule } from 'angular-2-local-storage'; 
import { AppComponent } from './app.component';
import { AddNewPizzaComponent } from './add-new-pizza/add-new-pizza.component';
// import { AdminPizzaService} from './admin-pizza.service';

const appRoutes: Routes = [
  { path: 'add-new-pizza', component: AddNewPizzaComponent }
]; 

@NgModule({
  declarations: [
    AppComponent,
    AddNewPizzaComponent
  ],

  imports: [
    LocalStorageModule.withConfig({
      prefix: 'app-root',
      storageType: 'localStorage'
    }),

    RouterModule.forRoot(appRoutes),
    ImageUploadModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],

  // providers: [AdminPizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
