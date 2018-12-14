import {Component, OnInit} from '@angular/core';
import {RegisterService} from './register.service';

/**
 * 注册modal组件
 * @author zhaozixing
 * @date 2018-12-15
 * @version V1.0.0
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private RegisterService: RegisterService) {
  }

  ngOnInit() {
  }

  /**
   * 注册
   * @param username 用户名
   * @param password 密码
   * @param repassword 重复密码
   */
  private register(username, password, repassword) {
    if (this.RegisterService.register(username, password, repassword)) {
      console.log('####register():success');
    } else {
      console.log('####register():failed');
    }
  }
}
