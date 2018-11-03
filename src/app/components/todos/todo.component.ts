import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ID } from '@datorama/akita';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { Todo } from './state/todo.model';

@Component({
  selector: 'app-todo',
  template: `
  <nz-card style="width:300px;" [nzActions]="[actionSetting, actionEllipsis]">
  <div class="flex align-center sb">
     <div class="flex">
      <label>
        <span></span>
      </label>
      {{todo.title}}
    </div>
   </div>
</nz-card>

<ng-template #actionSetting>
  <input type="checkbox" [formControl]="control"/>
</ng-template>

<ng-template #actionEllipsis>
  <i nz-icon type="delete" (click)="delete.emit(todo.id)"></i>
</ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit, OnDestroy {
  @Input() todo: Todo;
  @Output() complete = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<ID>();

  control: FormControl;

  ngOnInit() {
    this.control = new FormControl(this.todo.completed);

    this.control.valueChanges.pipe(untilDestroyed(this)).subscribe((completed: boolean) => {
      this.complete.emit({ ...this.todo, completed });
    });
  }

  ngOnDestroy(): void { }
}
