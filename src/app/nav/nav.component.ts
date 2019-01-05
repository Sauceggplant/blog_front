import { Component, OnInit } from '@angular/core';

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
  }
}
