import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { NzNotificationService } from 'ng-zorro-antd';
import { Member } from 'src/app/models/member';
import { Team } from 'src/app/models/team';
import { CrudService } from 'src/app/services/crud-service/crud.service';

import { moveIn } from '../../router.animations';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
  animations: [moveIn()],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@moveIn]': '' }
})
export class SkillComponent implements OnInit {
  id: string;
  skills: Team;
  sortName = null;
  sortValue = null;
  listOfSearchName = [];
  searchAddress: string;
  data = [];
  list = [];
  displayData = [];
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
      tag: [null, [Validators.required]],
    });
  }

  getItems(): void {
    this.crudService
      .getCollection('skills')
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
        this.displayData = [...this.list];
      });
  }

  deleteEntry(id: string) {
    this.crudService.deleteDocument('skills', id);
  }


  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.createEntry();
  }

  createEntry(): void {
    if (this.validateForm.valid) {
      const skill = new Skill();
      skill.name = this.validateForm.controls.name.value;
      skill.tag = this.validateForm.controls.tag.value;

      this.crudService.createDocument('skills', skill);
      this.createNotification('success', 'Update', 'Skill added');
    }
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
    const filterFunc = item => (this.searchAddress ? item.address.indexOf(this.searchAddress) !== -1 : true)
      && (this.listOfSearchName.length ? this.listOfSearchName.some(name => item.name.indexOf(name) !== -1) : true);
    const data = this.list.filter(item => filterFunc(item.data));
    /** sort data **/
    if (this.sortName && this.sortValue) {
      this.displayData = data
        .sort((a, b) => (this.sortValue === 'ascend') ?
          (a[this.sortName] > b[this.sortName] ? 1 : -1)
          : (b[this.sortName] > a[this.sortName] ? 1 : -1));
    } else {
      this.displayData = data;
    }
  }
  // 'success', 'danger', 'info', 'Error'
  createNotification(type: string, title: string, text: string): void {
    this.notification.create(type, title, text);
  }
}
