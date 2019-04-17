import { ID, guid } from '@datorama/akita';

export interface Todo {
  id: ID;
  title: string;
  completed: boolean;
}

/**
 * A factory function that creates Todos
 */
export function createTodo({ title }: Partial<Todo>) {
  return {
    id: guid(),
    title,
    completed: false
  } as Todo;
}
