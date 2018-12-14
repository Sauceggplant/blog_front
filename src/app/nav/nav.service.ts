import {Injectable} from '@angular/core';

/**
 * 导航服务
 * @author zhaozixing
 * @date 2018-12-15
 * @version V1.0.0
 */
@Injectable()
export class NavService {

  /**
   * 注册的账户信息
   */
  private static showLogin: boolean = true;

  private static showRegister: boolean = true;

  private static showQuit: boolean = false;

  /**
   * 获取标题
   */
  public getTitle() {
    return '个人博客';
  }

  public showLogin() {
    return NavService.showLogin;
  }

  public setShowLogin(show) {
    NavService.showLogin = show;
  }

  public showRegister() {
    return NavService.showRegister;
  }

  public setShowRegister(show) {
    NavService.showRegister = show;
  }

  public showQuit() {
    return NavService.showQuit;
  }

  public setShowQuit(show) {
    NavService.showQuit = show;
  }
}
