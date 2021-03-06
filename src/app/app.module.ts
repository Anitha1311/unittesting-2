import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api'; 
import {CheckboxModule} from 'primeng/checkbox';     
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import { LoginComponent } from './login/login.component';
import { HoverfocusDirective } from './hoverfocus.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HoverfocusDirective,
   
   
  ],
  imports: [
    BrowserModule,
    CheckboxModule,
    AccordionModule,
    FormsModule,
    ButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 
 }
