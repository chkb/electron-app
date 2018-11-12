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
import { MemberSkill } from 'src/app/models/member-skill';
import { SkillValue } from 'src/app/models/skill-enum';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  animations: [moveIn()],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@moveIn]': '' }
})
export class MemberComponent implements OnInit {
  teamId: string;
  memberId: string;
  member: Member;
  validateForm: FormGroup;
  skills = [];
  shownSkills = [];
  listOfTagOptions = [];
  skillValue;

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
      this.memberId = params['memberId'];
      this.crudService
        .getDocument(`team/${this.teamId}/members`, this.memberId)
        .subscribe(member => {
          this.member = member;
          this.shownSkills = [];
          if (this.skills && this.member.skills.length) {
            const skillsList = this.skills;
            this.member.skills.forEach(memberSkill => {
              const idx = skillsList.findIndex((skill: Skill) => memberSkill.skill.name === skill.name);
              skillsList.splice(idx, 1);
            });
            this.shownSkills = skillsList;
          } else {
            const skillsList = this.skills;
            this.shownSkills = skillsList;
          }
        });
    });

    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
    });
  }

  getSkillOverview(tag: string): any {
    let count = 0;
    let value = 0;
    this.member.skills.forEach(skills => {
      if (skills.skill.tag === tag) {
        count++;
        value = value + skills.value;
      }
    });
    const result = ((value / 5) / count) * 100;

    return Math.round(result);
  }

  getSkills(): void {
    this.crudService
      .getCollection('skills')
      .subscribe(res => {
        res.forEach(element => {
          this.skills.push(element.payload.doc.data());
        });
      });
  }

  addSkills(): void {
    this.listOfTagOptions.forEach((skill: Skill) => {
      const memberSkill = new MemberSkill();
      memberSkill.skill = skill;
      memberSkill.value = this.skillValue;
      this.member.skills.push(memberSkill);
    });

    this.listOfTagOptions = [];
    this.skillValue = 0;
    this.updateMember();
    this.createNotification('success', 'Update', `Skill has been added to ${this.member.name}`);
  }

  removeSkill(memberSkill: MemberSkill): void {
    const idx = this.member.skills.findIndex(x => x.skill === memberSkill.skill);
    this.member.skills.splice(idx, 1);
    this.updateMember();
    this.createNotification('Info', 'Update', `${memberSkill.skill.name.toUpperCase()} skill has been deleted from ${this.member.name}`);
  }

  removeInPlace(array, item) {
    let foundIndex, fromIndex;

    // Look for the item (the item can have multiple indices)
    fromIndex = array.length - 1;
    foundIndex = array.lastIndexOf(item, fromIndex);

    while (foundIndex !== -1) {
      // Remove the item (in place)
      array.splice(foundIndex, 1);

      // Bookkeeping
      fromIndex = foundIndex - 1;
      foundIndex = array.lastIndexOf(item, fromIndex);
    }

    // Return the modified array
    return array;
  }

  updateMember(): void {
    this.crudService.updateDocument(`team/${this.teamId}/members`, this.memberId, this.member);
  }

  deleteMember() {
    this.crudService.deleteDocument(`team/${this.teamId}/members`, this.memberId);
  }

  // 'success', 'danger', 'info', 'Error'
  createNotification(type: string, title: string, text: string): void {
    this.notification.create(type, title, text);
  }
}
