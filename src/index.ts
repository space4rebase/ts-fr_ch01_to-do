import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos: TodoItem[] = [
  new TodoItem(1, "Buy flowers"),
  new TodoItem(2, "Get schoes"),
  new TodoItem(3, "Collect tickets"),
  new TodoItem(4, "Call Joe", true) // completed task
];

let collection: TodoCollection = new TodoCollection("Adam", todos);

console.clear();
console.log(`${collection.userName}'s Todo List`);

collection.removeComplete();
collection.getTodoItems(true).forEach(item => item.printDetails());

//let newId: number = collection.addTodo("Go for run");
//let todoItem: TodoItem = collection.getTodoById(newId);
//console.log(JSON.stringify(todoItem));

//todoItem.printDetails();

// it will give an error:

//collection.addTodo(todoItem);
