import { TodoItem } from "./todoItem";

// The class "TodoCollection" collects together the to-do items

export class TodoCollection { 
  private nextId: number = 1; // we preserve the next ID info
  private itemMap = new Map<number, TodoItem>();

  constructor(public userName: string, todoItems: TodoItem[] = []) { 
    todoItems.forEach(item => this.itemMap.set(item.id, item));
  }

  addTodo(task: string): number { 
    while (this.getTodoById(this.nextId)) { 
      this.nextId++;
    }
    this.itemMap.set(this.nextId, new TodoItem(this.nextId, task)); // adds new Item to the collection

    return this.nextId; // // returns new todo ID
  }

  getTodoById(id: number): TodoItem { 
    return this.itemMap.get(id);
  }

  markComplete(id: number, complete: boolean) { 
    const todoItem = this.getTodoById(id);

    if (todoItem) { 
      todoItem.complete = complete;
    }
  }
}


