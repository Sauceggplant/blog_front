import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';

/**
 * 登陆modal组件
 * @author zhaozixing
 * @date 2018-12-15
 * @version V1.0.0
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private LoginService: LoginService) {
  }

  ngOnInit() {
  }

  /**
   * 登陆
   * @param username 用户名
   * @param password 密码
   */
  private login(username, password) {
    if (this.LoginService.login(username, password)) {
      console.log('####login():success');
    } else {
      console.log('####login():failed');
    }
  }
}
