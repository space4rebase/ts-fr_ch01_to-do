export class TodoItem { 
  public constructor (public id: number, public task: string, public complete: boolean = false) { // public here is for the compiler
    // no statements required
  }

  printDetails(): void { 
    console.log(`${this.id}\t${this.task} ${this.complete ? "\t(complete)" : ""}`);
  }
}

// To empasize the similarity TS vs C#. Just for an example

export class TodoItemLong { 
  public id: number;
  public task: string;
  public complete: boolean = false;

  public constructor(id: number, task: string, complete: boolean = false) { 
    this.id = id;
    this.task = task;
    this.complete = complete;
  }

  public printDetails(): void { 
    console.log(`${this.id}\t${this.task} ${this.complete ? "\t(complete)" : ""}`);
  }
}
