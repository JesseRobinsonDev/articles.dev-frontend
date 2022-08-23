import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/api/user/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.sass'],
})
export class UserPageComponent implements OnInit {
  userArticles: any[] = [];
  userComments: any[] = [];
  userArticleCount: number;
  userCommentCount: number;
  userArticlePage: number = 1;
  userCommentPage: number = 1;
  username: string;
  dateJoined: string;
  userID: string;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const userID = this.route.snapshot.paramMap.get('id');

    if (userID == null) {
      window.location.assign(`${environment.siteUrl}`);
      return;
    }

    this.userService.getUser(userID).subscribe(
      (res: any) => {
        this.dateJoined = this.createDateText(res.dateJoined);
        this.userID = res.userID;
        this.username = res.username;
        this.userArticleCount = res.userArticleCount;
        this.userCommentCount = res.userCommentCount;
        console.log(res);
      },
      (error) => {}
    );

    this.userService
      .searchUserArticles(userID, 10, (this.userArticlePage - 1) * 10)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.userArticles = res;
        },
        (error) => {}
      );

    this.userService
      .searchUserComments(userID, 10, (this.userCommentPage - 1) * 10)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.userComments = res;
        },
        (error) => {}
      );
  }

  createDateText(dateStr: string) {
    const date = new Date(dateStr);
    return `${this.getMonthString(
      date.getMonth()
    )} ${date.getDate()}, ${date.getFullYear()}`;
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

  getUserArticles(event: { preventDefault: () => void }, page: number) {
    event.preventDefault();
    this.userArticlePage = page;
    this.userService
      .searchUserArticles(this.userID, 10, (page - 1) * 10)
      .subscribe(
        (res: any) => {
          this.userArticles = res;
        },
        (error) => {}
      );
  }

  getUserComments(event: { preventDefault: () => void }, page: number) {
    event.preventDefault();
    this.userCommentPage = page;
    this.userService
      .searchUserComments(this.userID, 10, (page - 1) * 10)
      .subscribe(
        (res: any) => {
          this.userComments = res;
        },
        (error) => {}
      );
  }
}
