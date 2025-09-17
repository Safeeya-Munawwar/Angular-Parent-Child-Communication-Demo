import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message',
  standalone: true,  // ✅ Mark as standalone
  imports: [FormsModule], // Needed for ngModel in child
  templateUrl: './message.html',
  styleUrls: ['./message.scss']
})
export class MessageComponent {
  @Input() parentMessage: string = '';
  @Output() messageEvent = new EventEmitter<string>();

  @Output() colorChange = new EventEmitter<void>();

  @Input() sharedText: string = '';
  @Output() sharedTextChange = new EventEmitter<string>();

  @Input() taskList: string[] = [];
  @Input() status: string = '';

  sendMessageToParent() {
    this.messageEvent.emit('Hi Parent! Message received from Child!');
  }

  changeParentColorFromChild() {
    this.colorChange.emit();
  }

  updateSharedText(newValue: string) {
    this.sharedText = newValue;
    this.sharedTextChange.emit(newValue);
  }

  // Task: add child color toggle for own background
  childColor: string = 'lightyellow';
  toggleChildColor() {
    this.childColor = this.childColor === 'lightyellow' ? 'lightcoral' : 'lightyellow';
  }
}
