import {Employee} from './shared/employee.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {EmployeeService} from './shared/employee.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';


import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ToastrModule} from 'ngx-toastr';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeesComponent} from './employees/employees.component';
import {EmployeeComponent} from './employees/employee/employee.component';
import {EmployeeListComponent} from './employees/employee-list/employee-list.component';
import {HeaderComponent} from './employees/header/header.component';
import {SidebarComponent} from './employees/sidebar/sidebar.component';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {NgxPaginationModule} from 'ngx-pagination';
import {DashboardComponent} from './employees/dashboard/dashboard.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

@NgModule({
    declarations: [
        AppComponent,
        EmployeesComponent,
        EmployeeComponent,
        EmployeeListComponent,
        HeaderComponent,
        SidebarComponent,
        DashboardComponent
    ],
    imports: [
        ReactiveFormsModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        PaginationModule.forRoot(),
        NgxPaginationModule,
        BsDatepickerModule.forRoot(),
    ],
    providers: [EmployeeService, AngularFirestore],
    bootstrap: [AppComponent]
})
export class AppModule {
}
