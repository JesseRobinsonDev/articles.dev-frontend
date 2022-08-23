import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/api/user/user.service';
import { User } from '../../../models/user/user.model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass'],
})
export class RegisterFormComponent implements OnInit {
  user = new User('', '');

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.userService
      .registerUser(this.user.username, this.user.password)
      .subscribe(
        (res: any) => {
          localStorage.setItem('userID', res.userID);
          window.location.reload();
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
