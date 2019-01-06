import { Component, OnInit } from '@angular/core';

import swal from 'sweetalert2';

import { Nav } from './nav';
import { NAVS } from './nav.data';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  title: string;
  home: string;
  navitems: Array<Nav>;

  constructor() { }

  ngOnInit() {
    this.title = '个人博客';
    this.home = '首页';
    this.navitems = NAVS;
    this.setLogin(false);
  }

  setLogin(login: boolean) {
    this.navitems.forEach(nav => {
      if (nav.id === 'login') {
        if (login) {
          nav.show = false;
        } else {
          nav.show = true;
        }
        console.log(nav.name);
      } else if (nav.id === 'register') {
        if (login) {
          nav.show = false;
        } else {
          nav.show = true;
        }
        console.log(nav.name);
      } else if (nav.id === 'exit') {
        if (login) {
          nav.show = true;
        } else {
          nav.show = false;
        }
        console.log(nav.name);
      }
    });
  }

  clickNavItem(nav: Nav) {
    if (nav.id === 'login') {
      console.log(nav.name);
      this.login();
    } else if (nav.id === 'register') {
      console.log(nav.name);
      this.register();
    } else if (nav.id === 'exit') {
      console.log(nav.name);
      this.exit();
    } else {
      console.log(nav.name);
    }
  }

  login() {
    swal({
      type: 'success',
      title: '登陆成功',
      text: '登陆成功'
    });
    console.log('####login clicked');
    this.setLogin(true);
  }

  register() {
    swal({
      type: 'success',
      title: '注册成功',
      text: '注册成功'
    });
    console.log('####register clicked');
    this.setLogin(true);
  }

  exit() {
    console.log('####exit clicked');
    this.setLogin(false);
  }
}
