import {Component, OnInit} from '@angular/core';
import {Account} from './account/account';
import swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '个人博客';
  loginAccount: Account = {
    id: '',
    username: '',
    password: '',
  };
  registerAccount: Account = {
    id: '',
    username: '',
    password: '',
  };

  constructor() {
  }

  ngOnInit() {
  }

  login(username, password) {
    this.loginAccount.username = username;
    this.loginAccount.password = password;
    swal({
      type: 'info',
      title: 'Debug',
      text: JSON.stringify(this.loginAccount)
    });
    console.log(JSON.stringify(this.loginAccount));
  }

  register(username, password, repassword) {
    if (password == repassword) {
      this.registerAccount.username = username;
      this.registerAccount.password = password;
      swal({
        type: 'info',
        title: 'Debug',
        text: JSON.stringify(this.registerAccount)
      });
      console.log(JSON.stringify(this.registerAccount) + '\n{"username":"' + username + ',"password":"' + password + ',"repassword":"' + repassword + '"}');
    } else {
      swal({
        type: 'error',
        title: '温馨提示',
        text: '您两次输入的密码不一致'
      });
      console.log(JSON.stringify(this.registerAccount) + '\n{"username":"' + username + ',"password":"' + password + ',"repassword":"' + repassword + '"}');
    }
  }
}
