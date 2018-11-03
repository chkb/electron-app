import { Component, OnInit } from '@angular/core';

import { moveIn } from '../../../router.animations';
import { Observable } from 'rxjs';
import { Todo } from '../state/todo.model';
import { VISIBILITY_FILTER, initialFilters } from '../filter/filter.model';
import { TodosQuery } from '../state/todos.query';
import { TodosService } from '../state/todo.service';
import { ID } from '@datorama/akita';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [moveIn()],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@moveIn]': '' }
})
export class TodosPageComponent implements OnInit {
  todos$: Observable<Todo[]>;
  activeFilter$: Observable<VISIBILITY_FILTER>;
  selectAllDone$: Observable<boolean>;
  filters = initialFilters;

  constructor(private todosQuery: TodosQuery,
    private todosService: TodosService) {
  }

  ngOnInit() {
    this.todos$ = this.todosQuery.selectVisibleTodos$;
    this.activeFilter$ = this.todosQuery.selectVisibilityFilter$;
    this.selectAllDone$ = this.todosQuery.selectAllDone$;
  }


  add(input: HTMLInputElement) {
    this.todosService.add(input.value);
    input.value = '';
  }

  complete(todo: Todo) {
    this.todosService.complete(todo);
  }

  delete(id: ID) {
    this.todosService.delete(id);
  }

  changeFilter(filter: VISIBILITY_FILTER) {
    this.todosService.updateFilter(filter);
  }
}
