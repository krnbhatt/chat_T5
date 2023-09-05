import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent {
  @Output() chatSelected = new EventEmitter<any>();

  chatList = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' }, // Add more chat conversations here
  ];

  selectChat(chat: any) {
    this.chatSelected.emit(chat);
  }
}
