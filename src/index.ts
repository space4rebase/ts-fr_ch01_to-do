import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos = [
  new TodoItem(1, "Buy flowers"),
  new TodoItem(2, "Get schoes"),
  new TodoItem(3, "Collect tickets"),
  new TodoItem(4, "Call Joe", true)
];

let collection = new TodoCollection("Adam", todos);

console.clear();
console.log(`${collection.userName}'s Todo List`);

let newId = collection.addTodo("Go for run");
let todoItem = collection.getTodoById(newId);

console.log(JSON.stringify(todoItem));

