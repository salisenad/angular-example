import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myDate = Date.now();


  title = 'Project Example 2019';
  description = 'Angular7 example';

  itemValue = '';
  items: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
  }

  onSubmit() {
    this.db.list('items').push({ content: this.itemValue });
    this.itemValue = '';
  }

}
