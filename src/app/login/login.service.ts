import {Injectable} from '@angular/core';
import swal from 'sweetalert2';
import {Account} from '../account/account';
import {LoginData} from './login.data';

/**
 * 登陆服务
 * @author zhaozixing
 * @date 2018-12-15
 * @version V1.0.0
 */
@Injectable()
export class LoginService {

  /**
   * 登陆服务实现
   * @param username 用户名
   * @param password 密码
   */
  public login(username: string, password: string) {
    var account: Account = {
      id: '',
      username: '',
      password: '',
    };
    var loginData: LoginData = {
      result: false,
      info: '',
      account: account
    };
    account.username = username;
    account.password = password;
    if (!this.accountIsExist(username)) {
      swal({
        type: 'info',
        title: '账户信息不存在',
        text: JSON.stringify(account)
      });
      loginData.result = true;
      loginData.info = '登陆成功';
    } else if (this.passwordIsRight(username, password)) {
      // swal({
      //   type: 'info',
      //   title: '登陆成功',
      //   text: JSON.stringify(account)
      // });
      loginData.result = true;
      loginData.info = '登陆成功';
    } else {
      swal({
        type: 'error',
        title: '温馨提示',
        text: '登陆失败,您输入的密码错误'
      });
      loginData.result = false;
      loginData.info = '登陆失败,您输入的密码错误';
    }
    //console.log(JSON.stringify(account));
    return loginData;
  }

  /**
   * 账户是否存在
   * @param username 用户名
   */
  accountIsExist(username: string) {
    return username == 'zhangsan';
  }

  /**
   * 用户密码是否正确
   * @param username 用户名
   * @param passowrd 密码
   */
  passwordIsRight(username: string, passowrd: string) {
    return username == 'zhangsan' && passowrd == '111111';
  }
}
