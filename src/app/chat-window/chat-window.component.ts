import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css'],
})
export class ChatWindowComponent {
  @Input() selectedChat: any;
  messages: string[] = [];
  messages2: string[] = [];

  constructor() {
    // Initialize with some dummy messages
    this.messages = [
      "Hello!",
      "How are you?",
      "I'm doing great, thanks!",
    ];

    this.messages2 = [
      "Hey!",
      "I'm Fine",
      "What have you been up to?",
    ];
  }

  // Function to handle new messages
  addMessage(message: string) {
    this.messages.push(message);
  }
  value:string='';
  blankText(){
    this.value = '';
  };
}