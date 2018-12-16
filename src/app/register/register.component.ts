import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Account} from '../account/account';
import {RegisterData} from './register.data';
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

  /**
   * 登陆操作传值
   */
  @Output('doRegister') doRegister = new EventEmitter<any>();

  /**
   * 注册的账户信息
   */
  registerAccount: Account = {
    id: '',
    username: '',
    password: '',
  };

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
  register(username:string, password:string, repassword:string) {
    var registerData:RegisterData = this.RegisterService.register(username, password, repassword);
    this.registerAccount = registerData.account;
    console.log('####register():'+registerData.result+":"+registerData.info);
    this.doRegister.emit(registerData);
  }
}
