import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { EmployeeListComponent } from './employee.component';
import {EmployeeService} from './services/employee.service';


@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent,EmployeeListComponent],
    providers:[EmployeeService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }