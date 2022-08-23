import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/api/user/user.service';
import { User } from '../../../models/user/user.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass'],
})
export class LoginFormComponent implements OnInit {
  user = new User('', '');

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.userService
      .loginUser(this.user.username, this.user.password)
      .subscribe(
        (res: any) => {
          console.log(res);
          localStorage.setItem('userID', res.userID);
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
