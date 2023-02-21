import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'buyminton';
  getPath() {
    return window.location.href.split('/')[3];
  }
  isLoginPage() {
    return this.getPath() == 'login';
  }
}
