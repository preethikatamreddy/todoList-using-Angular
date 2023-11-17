import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-app',
  templateUrl: './simple-app.component.html',
  styleUrls: ['./simple-app.component.css']
})
export class SimpleAppComponent {
  todo: string[]=[];
  newTask='';
  editMode: boolean = false;
  editIndex: number = -1;

  onAdd(){
    if (this.newTask.trim() !== '') {
      if (this.editMode) {
        // Update existing todo
        this.todo[this.editIndex] = this.newTask.trim();
        this.editMode = false;
      }else {
        // Add new todo
        this.todo.push(this.newTask.trim());
      }
      this.newTask = '';
    }
  }

  editTodo(index: number) {
    this.editMode = true;
    this.editIndex = index;
    this.newTask = this.todo[index];
  }
 
  removeTodo(index: number) {
    this.todo.splice(index, 1);
  }
}
