import {Injectable} from '@angular/core';
import swal from 'sweetalert2';
import {Account} from '../account/account';
import {RegisterData} from './register.data';

/**
 * 注册服务
 * @author zhaozixing
 * @date 2018-12-15
 * @version V1.0.0
 */
@Injectable()
export class RegisterService {

  /**
   * 注册服务实现
   * @param username 用户名
   * @param password 密码
   * @param repassword 重复输入密码
   */
  public register(username: string, password: string, repassword: string) {
    var account: Account = {
      id: '',
      username: '',
      password: '',
    };
    var registerData: RegisterData = {
      result: false,
      info: '',
      account: account
    };
    if (password == repassword) {
      account.username = username;
      account.password = password;
      if (this.accountIsExist(username)) {
        swal({
          type: 'error',
          title: '温馨提示',
          text: '该用户已存在'
        });
        registerData.result = false;
        registerData.info = '该用户已存在';
      } else if (username.length < 6) {
        swal({
          type: 'error',
          title: '温馨提示',
          text: '用户名长度不能小于6位'
        });
        registerData.result = false;
        registerData.info = '用户名长度不能小于6位';
      } else if (username.length > 64) {
        swal({
          type: 'error',
          title: '温馨提示',
          text: '用户名长度不能大于64位'
        });
        registerData.result = false;
        registerData.info = '用户名长度不能大于64位';
      } else if (password.length < 6) {
        swal({
          type: 'error',
          title: '温馨提示',
          text: '密码长度不能小于6位'
        });
        registerData.result = false;
        registerData.info = '密码长度不能小于6位';
      } else {
        swal({
          type: 'info',
          title: '温馨提示',
          text: '注册成功'
        });
        registerData.result = true;
        registerData.info = '注册成功';
      }
    } else {
      swal({
        type: 'error',
        title: '温馨提示',
        text: '您两次输入的密码不一致'
      });
      registerData.result = false;
      registerData.info = '您两次输入的密码不一致';
    }
    //console.log(JSON.stringify(account));
    return registerData;
  }

    /**
   * 账户是否存在
   * @param username 用户名
   */
  accountIsExist(username:string) {
    return username=='zhangsan';
  }
}
