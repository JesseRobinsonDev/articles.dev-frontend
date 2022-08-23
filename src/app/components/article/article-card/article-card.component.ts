import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.sass'],
})
export class ArticleCardComponent implements OnInit {
  @Input() props: {
    authorID: string;
    authorUser: string;
    title: string;
    tags: string[];
    date: string;
    commentCount: number;
    id: string;
    body: string;
  };

  deleteModal = false;
  viewerID: string | null;

  siteUrl: string;

  @Output() deleteArticleEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.viewerID = localStorage.getItem('userID');
    this.siteUrl = environment.siteUrl;
  }

  getMonthString(month: number): string {
    switch (month) {
      case 1:
        return 'Jan';
      case 2:
        return 'Feb';
      case 3:
        return 'Mar';
      case 4:
        return 'Apr';
      case 5:
        return 'May';
      case 6:
        return 'Jun';
      case 7:
        return 'Jul';
      case 8:
        return 'Aug';
      case 9:
        return 'Sep';
      case 10:
        return 'Oct';
      case 11:
        return 'Nov';
      case 12:
        return 'Dec';
      default:
        return 'Jan';
    }
  }

  createDateText(dateStr: string) {
    const date = new Date(dateStr);
    return `${this.getMonthString(
      date.getMonth()
    )} ${date.getDate()}, ${date.getFullYear()}`;
  }

  htmlReplacer(str: string) {
    var tempDivElement = document.createElement('div');
    tempDivElement.innerHTML = str;
    return tempDivElement.textContent || tempDivElement.innerText || '';
  }

  toggleDeleteModal(event: { preventDefault: () => void }) {
    event.preventDefault();
    this.deleteModal = !this.deleteModal;
  }

  deleteArticle(event: { preventDefault: () => void }) {
    event.preventDefault();
    this.deleteArticleEvent.emit(this.props.id);
  }
}
