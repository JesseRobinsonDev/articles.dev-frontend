import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  loginModal = false;
  registerModal = false;
  userID: any = null;

  searchInput: string;

  siteUrl: string;

  constructor() {}

  ngOnInit(): void {
    this.userID = localStorage.getItem('userID');
    this.siteUrl = environment.siteUrl;
  }

  searchArticle() {
    if (this.searchInput == undefined || this.searchInput == '') {
      return;
    }
    window.location.assign(`${environment.siteUrl}/?query=${this.searchInput}`);
  }

  toggleLoginModal(event: { preventDefault: () => void }) {
    event.preventDefault();
    this.loginModal = !this.loginModal;
  }

  toggleRegisterModal(event: { preventDefault: () => void }) {
    event.preventDefault();
    this.registerModal = !this.registerModal;
  }

  toggleModals(event: { preventDefault: () => void }) {
    this.loginModal = !this.loginModal;
    this.registerModal = !this.registerModal;
  }

  closeModals(event: { preventDefault: () => void }) {
    this.loginModal = false;
    this.registerModal = false;
  }

  logout(event: { preventDefault: () => void }) {
    localStorage.removeItem('userID');
    window.location.reload();
  }
}
