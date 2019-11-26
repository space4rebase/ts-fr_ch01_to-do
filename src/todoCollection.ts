import { TodoItem } from "./todoItem";

// The class "TodoCollection" collects together the to-do items

export class TodoCollection { 
  private nextId: number = 1; // we preserve the next ID info

  constructor(public userName: string, public todoItems: TodoItem[] = []) { 
    // no statements required
  }

  addTodo(task: string): number { 
    while (this.getTodoById(this.nextId)) { 
      this.nextId++;
    }
    this.todoItems.push(new TodoItem(this.nextId, task)); // adds new Item to the collection

    return this.nextId; // // returns new todo ID
  }

  getTodoById(id: number): TodoItem { 
    return this.todoItems.find(item => item.id === id); // "Find" returns the 1st element that goes undo cond | undefined
  }

  markComplete(id: number, complete: boolean) { 
    const todoItem = this.getTodoById(id);

    if (todoItem) { 
      todoItem.complete = complete;
    }
  }
}


