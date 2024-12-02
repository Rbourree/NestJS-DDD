export class Task {
  constructor(
    private readonly id: string,
    private title: string,
    private description: string,
    private completed: boolean = false,
  ){}

  completeTask(){
    this.completed = true;
  }

  reopenTask(){
    this.completed = false;
  }

  updateTitle(title: string){
    this.title = title;
  }

  updateDescription(description: string){
    this.description = description;
  }

  getId(){
    return this.id;
  }

  getTitle(){
    return this.title;
  }

  getDescription(){
    return this.description;
  }

  isCompleted(){
    return this.completed;
  }
}