import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ID } from '@datorama/akita';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { Todo } from './state/todo.model';

@Component({
    selector: 'app-todo',
    template: `
    <div class="flex align-center sb">
     <div class="flex">
      <label>
        <input type="checkbox" [formControl]="control"/>
        <span></span>
      </label>
      {{todo.title}}
    </div>
    <a class="btn waves-effect waves-light red btn-small btn-floating">
      <i class="mdi mdi-delete mdi-18px" (click)="delete.emit(todo.id)"></i>
    </a>
   </div>
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
