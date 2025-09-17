import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message/message';

@Component({
  selector: 'app-root',
  standalone: true,  // ✅ Mark as standalone
  imports: [FormsModule, MessageComponent], // Import child & FormsModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  parentMessage: string = 'Hello from Parent!';
  childReply: string = '';

  parentColor: string = 'lightblue';
  resetMessage: string = '';

  sharedValue: string = '';
  showChildExtra: boolean = true;

  taskList: string[] = ['Task A', 'Task B', 'Task C'];
  status: string = 'success';

  ngOnInit(): void {
    this.resetMessage = 'Welcome! ngOnInit initialized';
  }

  receiveChildMessage(msg: string) {
    this.childReply = msg;
  }

  changeParentColor() {
    this.parentColor = this.parentColor === 'lightblue' ? 'lightgreen' : 'lightblue';
  }

  resetAll() {
    this.parentMessage = 'Hello from Parent!';
    this.childReply = '';
    this.parentColor = 'lightblue';
    this.sharedValue = '';
    this.showChildExtra = true;
    this.taskList = ['Task A', 'Task B', 'Task C'];
    this.status = 'success';
    this.resetMessage = 'Reset done!';
  }

  addTask() {
    this.taskList.push('New Task ' + (this.taskList.length + 1));
  }
}
