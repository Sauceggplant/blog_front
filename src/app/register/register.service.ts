import {Injectable} from '@angular/core';
import swal from 'sweetalert2';
import {Account} from '../account/account';

/**
 * 注册服务
 * @author zhaozixing
 * @date 2018-12-15
 * @version V1.0.0
 */
@Injectable()
export class RegisterService {

  /**
   * 注册的账户信息
   */
  private static registerAccount: Account = {
    id: '',
    username: '',
    password: '',
  };

  /**
   * 注册服务实现
   * @param username
   * @param password
   * @param repassword
   */
  public register(username, password, repassword) {
    if (password == repassword) {
      RegisterService.registerAccount.username = username;
      RegisterService.registerAccount.password = password;
      console.log('####register():' + JSON.stringify(RegisterService.registerAccount) + '\n{"username":"' + username + ',"password":"' + password + ',"repassword":"' + repassword + '"}');
      if (username == 'zhangsan') {
        swal({
          type: 'error',
          title: '温馨提示',
          text: '该用户已存在'
        });
        return false;
      } else if (password.length < 6) {
        swal({
          type: 'error',
          title: '温馨提示',
          text: '密码长度不能小于6位'
        });
        return false;
      } else {
        swal({
          type: 'info',
          title: '注册成功',
          text: JSON.stringify(RegisterService.registerAccount)
        });
        return true;
      }
    } else {
      swal({
        type: 'error',
        title: '温馨提示',
        text: '您两次输入的密码不一致'
      });
      console.log('####register():' + JSON.stringify(RegisterService.registerAccount) + '\n{"username":"' + username + ',"password":"' + password + ',"repassword":"' + repassword + '"}');
      return false;
    }
  }

  /**
   * 获取注册信息
   */
  public getAccount() {
    return RegisterService.registerAccount;
  }

  /**
   * 设置注册信息
   * @param account 注册信息
   */
  public setAccount(account: Account) {
    RegisterService.registerAccount = account;
  }
}
