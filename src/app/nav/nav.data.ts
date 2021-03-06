import { Nav } from './nav';

export const NAVS: Nav[] = [
  { id: 'index', icon: 'fa fa-home', href: 'index', name: '首页', show: true },
  { id: 'share', icon: 'fa fa-share', href: 'share', name: '分享', show: true },
  { id: 'learn', icon: 'fa fa-book', href: 'learn', name: '学习', show: true },
  { id: 'diary', icon: 'fa fa-sticky-note', href: 'diary', name: '个人日记', show: true },
  { id: 'about', icon: 'fa fa-user', href: 'about', name: '关于我', show: true },
  { id: 'message', icon: 'fa fa-envelope', href: 'message', name: '留言板', show: true },
  { id: 'login', icon: 'fa fa-sign-in', href: '', name: '登陆', show: false },
  { id: 'register', icon: 'fa fa-user-plus', href: '', name: '注册', show: false },
  { id: 'exit', icon: 'fa fa-sign-out', href: '', name: '退出', show: false }
];
