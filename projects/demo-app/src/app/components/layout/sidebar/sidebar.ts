import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule,RouterLinkActive,RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar implements OnInit {

@Input() sideMenuBar: any = [];
  allInputUrl = ['/swire-input/textarea', '/swire-input/icon', '/swire-input/number', '/swire-input/tags', '/swire-input/prefix',
    '/swire-input/prefix-dropdown', '/swire-input/suffix', '/swire-input/suffix-dropdown',
    '/swire-input/stepper', '/swire-input/multiline', '/swire-input/autocomplete', '/swire-input/text'];
  constructor(
    public _route: Router,
  ) { }

  ngOnInit(): void {
  }

  gotoRoute(route: any) {
    this._route.navigate([route]);
  }

  // checkActive(param: any) {
  //   this.allInputUrl.forEach((element: any) => {
  //     if (element == this._route.url) {
  //       return true;
  //     } else {
  //       return false
  //     }
  //   });
  // }
}