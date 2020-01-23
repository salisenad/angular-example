import {AngularFirestore} from '@angular/fire/firestore';
import {Employee} from './../../shared/employee.model';
import {Component, OnInit} from '@angular/core';
import {EmployeeService} from 'src/app/shared/employee.service';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

    list: Employee[];

    constructor(private service: EmployeeService,
                private firestore: AngularFirestore,
                private toastr: ToastrService) {
    }

    searchText = '';

    ngOnInit() {
        this.service.getEmployees().subscribe(actionArray => {
            this.list = actionArray.map(item => {
                return {
                    id: item.payload.doc.id,
                    ...item.payload.doc.data()
                } as Employee;
            });
        });
    }

    onEdit(emp: Employee) {
        this.service.formData = Object.assign({}, emp);
    }

    onDelete(id: string) {
        if (confirm('Are you sure to delete this employer?')) {
            this.firestore.doc('employees/' + id).delete();
            this.toastr.warning('Deleted successfully', '');
        }
    }

    filterCondition(emp) {
        return emp.firstName.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1;
    }

}
