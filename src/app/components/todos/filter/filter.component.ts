import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TodoFilter, VISIBILITY_FILTER } from './filter.model';
import { FormControl } from '@angular/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
    selector: 'app-todos-filters',
    template: `
    <div class="input-field col s12">
    <nz-select style="width: 120px;" [formControl]="control" nzAllowClear nzPlaceHolder="Choose">
        <nz-option *ngFor="let filter of filters;" [nzValue]="filter.value" [nzLabel]="filter.label"></nz-option>
    </nz-select>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosFiltersComponent implements OnInit, OnDestroy {
    @Input() active: VISIBILITY_FILTER;
    @Input() filters: TodoFilter[];
    @Output() update = new EventEmitter<VISIBILITY_FILTER>();

    control: FormControl;

    ngOnInit() {
        this.control = new FormControl(this.active);

        this.control.valueChanges.pipe(untilDestroyed(this)).subscribe(c => {
            this.update.emit(c);
        });
    }

    ngOnDestroy(): void { }
}
