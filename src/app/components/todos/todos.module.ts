import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { TodosFiltersComponent } from './filter/filter.component';
import { TodoComponent } from './todo.component';
import { TodosPageComponent } from './todos-page/todo.component';
import { TodosComponent } from './todos.component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, NgZorroAntdModule],
    exports: [TodosComponent, TodosFiltersComponent],
    declarations: [TodoComponent, TodosComponent, TodosFiltersComponent, TodosPageComponent]
})
export class TodosModule { }
