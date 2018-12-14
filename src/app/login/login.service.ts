import {Injectable} from '@angular/core';
import swal from 'sweetalert2';
import {Account} from '../account/account';

/**
 * 登陆服务
 * @author zhaozixing
 * @date 2018-12-15
 * @version V1.0.0
 */
@Injectable()
export class LoginService {
  /**
   * 登陆的账户信息
   */
  private static loginAccount: Account = {
    id: '',
    username: '',
    password: '',
  };

  /**
   * 登陆服务实现
   * @param username 用户名
   * @param password 密码
   */
  public login(username, password) {
    LoginService.loginAccount.username = username;
    LoginService.loginAccount.password = password;
    console.log('####login():' + JSON.stringify(LoginService.loginAccount));
    if (password == '111111') {
      swal({
        type: 'info',
        title: '登陆成功',
        text: JSON.stringify(LoginService.loginAccount)
      });
      return true;
    } else {
      swal({
        type: 'error',
        title: '温馨提示',
        text: '登陆失败,您输入的密码错误'
      });
      return false;
    }
  }

  /**
   * 获取登陆信息
   */
  public getAccount() {
    return LoginService.loginAccount;
  }

  public setAccount(account: Account) {
    LoginService.loginAccount = account;
  }
}
