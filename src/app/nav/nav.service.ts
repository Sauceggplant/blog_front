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
   * 获取标题
   */
  public getTitle() {
    return '个人博客';
  }
}
