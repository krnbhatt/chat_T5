import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedChat: any;

  selectChat(chat: any) {
    this.selectedChat = chat;
  }
}
