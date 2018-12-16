import {Account} from '../account/account';

/**
 * 登陆信息
 * @author zhaozixing
 * @date 2018-12-16
 * @version V1.0.0
 */
export class LoginData {
  /**
   * 返回结果
   */
  public result: boolean;

  /**
   * 错误信息
   */
  public info: string;

  /**
   * 用户名
   */
  public account: Account;
}