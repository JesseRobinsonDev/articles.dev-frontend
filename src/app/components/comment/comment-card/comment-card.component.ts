import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from 'src/app/api/comment/comment.service';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.sass'],
})
export class CommentCardComponent implements OnInit {
  @Input() props: {
    authorID: string;
    authorUser: string;
    articleTitle: string;
    articleID: string;
    date: string;
    id: string;
    body: string;
    page: string;
  };

  editCommentBody: string;
  editingComment = false;

  viewerID: string | null;

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.viewerID = localStorage.getItem('userID');
  }

  deleteComment(event: { preventDefault: () => void }, commentID: string) {
    event.preventDefault();
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

  editComment(event: { preventDefault: () => void }) {
    event.preventDefault();
    this.commentService
      .updateComment(this.props.id, this.editCommentBody)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.props.body = this.editCommentBody;
          this.editingComment = false;
        },
        (error) => {}
      );
  }

  toggleEditComment(event: { preventDefault: () => void }) {
    event.preventDefault();
    this.editCommentBody = this.props.body;
    this.editingComment = !this.editingComment;
  }
}
