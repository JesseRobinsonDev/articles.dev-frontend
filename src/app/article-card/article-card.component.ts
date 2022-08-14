import { Component, Input, OnInit } from '@angular/core';

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
    date: Date;
    commentCount: number;
    id: string;
  };

  dateText: string;

  constructor() {}

  ngOnInit(): void {
    this.dateText = `${this.getMonthString(
      this.props.date.getMonth()
    )} ${this.props.date.getDate()}, ${this.props.date.getFullYear()}`;
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
}
