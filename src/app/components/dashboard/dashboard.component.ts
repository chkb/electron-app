import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { NzNotificationService } from 'ng-zorro-antd';
import { CrudService } from 'src/app/services/crud-service/crud.service';

import { moveIn } from '../../router.animations';
import { createComponentFactory } from '@angular/core/src/view';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [moveIn()],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@moveIn]': '' }
})
export class DashboardComponent implements OnInit {
  nameList = [
    { text: 'Joe', value: 'Joe' },
    { text: 'Jim', value: 'Jim' }
  ];
  addressList = [
    { text: 'London', value: 'London' },
    { text: 'Sidney', value: 'Sidney' }
  ];
  sortName = null;
  sortValue = null;
  listOfSearchName = [];
  searchAddress: string;
  data = [];
  displayData = [];
  list = [];
  validateForm: FormGroup;

  constructor(
    private notification: NzNotificationService,
    private crudService: CrudService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.getItems();
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      amount: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.createEntry();
  }

  createEntry(): void {
    if (this.validateForm.valid) {
      const object = {
        name: this.validateForm.controls.name.value,
        amount: this.validateForm.controls.amount.value,
        date: moment()
      }
      this.crudService.createDocument('list', object);
    }
  }

  genderChange(value: string): void {
    this.validateForm.get('note').setValue(value === 'male' ? 'Hi, man!' : 'Hi, lady!');
  }

  getItems(): void {
    this.crudService
      .getCollection('list')
      .subscribe(res => {
        this.list = [];
        this.data = [];
        this.displayData = [];
        res.forEach(element => {
          const item = {
            id: element.payload.doc.id,
            data: element.payload.doc.data()
          };
          this.data.push(element.payload.doc.data());
          this.list.push(item);
        });
        this.displayData = [...this.data];
      });
  }



  deleteItem(id: string): void {
    this.crudService.deleteDocument('list', id);
    this.getItems();
  }


  sort(sort: { key: string, value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.search();
  }

  filter(listOfSearchName: string[], searchAddress: string): void {
    this.listOfSearchName = listOfSearchName;
    this.searchAddress = searchAddress;
    this.search();
  }

  search(): void {
    /** filter data **/
    const filterFunc = item => (this.searchAddress ? item.address.indexOf(this.searchAddress) !== -1 : true) && (this.listOfSearchName.length ? this.listOfSearchName.some(name => item.name.indexOf(name) !== -1) : true);
    const data = this.data.filter(item => filterFunc(item));
    /** sort data **/
    if (this.sortName && this.sortValue) {
      this.displayData = data.sort((a, b) => (this.sortValue === 'ascend') ? (a[this.sortName] > b[this.sortName] ? 1 : -1) : (b[this.sortName] > a[this.sortName] ? 1 : -1));
    } else {
      this.displayData = data;
    }
  }

  createNotification(type: string): void {
    this.notification.create(type, 'Notification Title',
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.');
  }
}
