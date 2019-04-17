import { Component, OnInit } from '@angular/core';
import { ID } from '@datorama/akita';
import { Observable } from 'rxjs';

import { Todo } from '../state/todo.model';
import { TodosQuery } from '../state/todos.query';
import { TodosService } from '../state/todos.service';
import { VISIBILITY_FILTER, initialFilters } from 'src/app/filters/filter.model';

@Component({
    selector: 'app-todos-page',
    templateUrl: './todos-page.component.html'
})
export class TodosPageComponent implements OnInit {
    todos$: Observable<Todo[]>;
    activeFilter$: Observable<VISIBILITY_FILTER>;
    filters = initialFilters;

    constructor(private todosQuery: TodosQuery,
        private todosService: TodosService) {
    }

    ngOnInit() {
        this.todos$ = this.todosQuery.selectVisibleTodos$;
        this.activeFilter$ = this.todosQuery.selectVisibilityFilter$;
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
