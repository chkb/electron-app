import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { NzNotificationService } from 'ng-zorro-antd';
import { Member } from 'src/app/models/member';
import { Team } from 'src/app/models/team';
import { CrudService } from 'src/app/services/crud-service/crud.service';

import { moveIn } from '../../router.animations';
import { MemberSkill } from 'src/app/models/member-skill';
import { SkillValue } from 'src/app/models/skill-enum';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  animations: [moveIn()],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@moveIn]': '' }
})
export class TeamComponent implements OnInit {
  teamId: string;
  team: Team;
  sortName = null;
  sortValue = null;
  listOfSearchName = [];
  searchAddress: string;
  data = [];
  members = [];
  skills = [];
  displayData = [];
  list = [];
  validateForm: FormGroup;
  selectedMember: Member;
  showSelectedMember = false;

  constructor(
    private notification: NzNotificationService,
    private crudService: CrudService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.getSkills();
    this.route.params.subscribe(params => {
      this.teamId = params['teamId'];
      this.crudService.getDocument('team', this.teamId).subscribe(team => {
        this.team = team;
      });
    });

    this.getMembers();

    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
    });
  }

  getSkills(): void {
    this.crudService
      .getCollection('skills')
      .subscribe(res => {
        this.displayData = [];
        res.forEach(element => {
          this.skills.push(element.payload.doc.data());
        });
      });
  }

  getMembers(): void {
    this.crudService
      .getCollection(`team/${this.teamId}/members`)
      .subscribe(res => {
        this.displayData = [];
        const list = [];
        res.forEach(element => {
          this.members.push(element.payload.doc.data());
          const item = {
            id: element.payload.doc.id,
            data: element.payload.doc.data()
          };
          list.push(item);
          this.list = list;
          this.displayData = [...this.list];
        });
      });
  }

  deleteMember(id: string) {
    this.crudService.deleteDocument(`team/${this.teamId}/members`, id);
  }

  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.createEntry();
  }

  getSkillOverview(tag: string): any {
    let count = 0;
    let value = 0;
    this.list.forEach(item => {
      item.data.skills.forEach(skills => {
        if (skills.skill.tag === tag) {
          count++;
          value = value + skills.value;
        }
      });
    });
    const result = ((value / 5) / count) * 100;

    return Math.round(result);
  }

  createEntry(): void {
    if (this.validateForm.valid) {
      const member = new Member();
      member.createdDate = moment().toISOString();
      member.name = this.validateForm.controls.name.value;
      member.email = this.validateForm.controls.email.value;
      member.skills = [];
      this.crudService.createSubDocument(`team`, this.teamId, 'members', member);
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
    const data = this.list.filter(item => filterFunc(item));
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

  createNotification(type: string): void {
    this.notification.create(type, 'Notification Title',
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.');
  }
}
