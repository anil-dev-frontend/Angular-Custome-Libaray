import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { InputDemo } from '../app/components/input-demo/input-demo';
import { Sidebar } from './components/layout/sidebar/sidebar';
import { Header } from './components/layout/header/header';
import { CommonModule } from '@angular/common';
import { SwireThemeServiceService } from './components/layout/swire-theme-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputDemo,Sidebar,Header,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  //protected readonly title = signal('Angular-Libarary');
  title = 'design-demo';
  tabActiveClass = 'components';
  sideMenuBar: any;
  foundationMenuList: any = [
    '/swire-colour',
    '/icon',
    '/swire-sadow',
    '/swire-typography'
  ]; //All foundation link for tab active
  devMenuList: any = [
    '/development/angular',
    '/development/react'
  ]; //All foundation link for tab active

  constructor(
    private _swireTheme: SwireThemeServiceService,
    private _router: Router
  ) {
    this._swireTheme.setLightTheme();
    setTimeout(() => {
      this._swireTheme.setDarkTheme();
    }, 5000);
  }
  ngOnInit() {
    this._router.events.subscribe((e: any) => {
      if (e?.url) {
        if (this.foundationMenuList.includes(e?.url)) {
          this.tabActiveClass = 'foundation';
        } else if (this.devMenuList.includes(e?.url)) {
          this.tabActiveClass = 'development';
        } else {
          this.tabActiveClass = 'components';
        }
        this.typeFoundtion(this.tabActiveClass, false);
      }
    });
  }
  typeFoundtion(type: string, isNavigateToUrl: boolean = true) {
    this.tabActiveClass = type;
    if (type === 'components') {
      this.sideMenuBar = [
        { name: 'Input', route: '/input' },
        { name: 'Button', route: '/button' },
        { name: 'Chips', route: '/chips' },

        {
          name: 'Breadcrumbs',
          route: '/breadcrumbs',
          child: [
            { name: 'CMS', route: '/breadcrumbs/cms' },
            { name: 'Dashboard', route: '/breadcrumbs/dashboard' },
          ],
        },
        {
          name: 'Checkbox',
          route: '/swire-checkbox',
          child: [
            { name: 'Indeterminate', route: '/swire-checkbox/indeterminate' },
            { name: 'Regular', route: 'swire-checkbox/regular' },
          ],
        },
        {
          name: 'Dropdown',
          route: '/swire-dropdown',
          child: [
            { name: 'Input Box', route: '/swire-dropdown' },
            { name: 'Prefix', route: '/swire-input/prefix-dropdown' },
            { name: 'Suffix', route: '/swire-input/suffix-dropdown' },
            { name: 'Action', route: '/action-dropdown' },
            { name: 'Dropdown', route: '/swire-select' },
          ],
        },
        {
          name: 'Date & Time Picker',
          route: '/rangedatepicker',
          child: [
            { name: 'Date Picker', route: '/rangedatepicker' },
            { name: 'Time Picker', route: '/timepicker' },
          ],
        },
        {
          name: 'Filter',
          route: '/filter',
          child: [
            { name: 'Single Selection', route: '/filter/regular' },
            { name: 'Multiple Selection', route: '/filter/checkbox' },
          ],
        },
        {
          name: 'Input Box',
          route: '/swire-input/text',
          
        },
        {
          name: 'Input Box Special',
          route: '/special/otp-input',
          child: [
            { name: 'OTP', route: '/special/otp-input' },
            { name: 'Password', route: '/special/password-input' },
            { name: 'Phone Number', route: '/special/mobile-number' },
            { name: 'Origin-Destination', route: '/special/org-dest-autofill' },
          ]
        },
        {
          name: 'Loader',
          route: '/swire-loader',
          child: [
            { name: 'Swire Shipping', route: '/swire-loader/swire-shipping' },
            { name: 'Internal Apps', route: '/swire-loader/internal-apps' },
            { name: 'Progress Tracker', route: '/swire-loader/progress-tracker' },
          ],
        },
        { name: 'Modal', route: '/modal' },
        {
          name: 'Notification',
          route: '/notifications',
          child: [
            { name: 'Toast Message', route: '/notifications/toster' },
            { name: 'Alert Message', route: '/notifications/alert' },
            { name: 'Popup Message', route: '/notifications/popup' },
          ],
        },
        { name: 'Progress Bar', route: '/progressBar' },
        { name: 'Pagination', route: '/pagination' },
        { name: 'Radio Button', route: '/radio-button' },
        // {name:'Range Date Picker', route:'/rangedatepicker'},
        { name: 'Sort', route: '/sort' },
        { name: 'Scroll', route: '/swire-scroll-bar' },
        {
          name: 'Slider Button',
          route: '/slider',
          child: [
            { name: 'Square', route: '/slider/square-button' },
            { name: 'Round', route: '/slider/round-button' },
          ],
        },
        // {
        //   name: 'Toggle',
        //   route: '/toggle',
        //   child: [
        //     { name: 'Simple', route: '/toggle/simple' },
        //     { name: 'Two way', route: '/toggle/two-way' },
        //     { name: 'Three way', route: '/toggle/three-way' },
        //     { name: 'Tab', route: '/toggle/tab-toggle' },
        //     { name: 'Selector', route: '/toggle/toggle-selector' },
        //   ],
        // },
        // { name: 'Tags', route: '/swire-tags' },
        // {
        //   name: 'Tab',
        //   route: '/swire-tabs',
        //   child: [
        //     { name: 'Primary', route: '/swire-tabs/primary' },
        //     { name: 'Secondary', route: '/swire-tabs/secondary' },
        //     { name: 'Tertiary', route: '/swire-tabs/tertiary' },
        //   ],
        // },
        // {
        //   name: 'Tab V2',
        //   route: '/swire-tabs-v2',
        //   child: [
        //     { name: 'Primary', route: '/swire-tabs-v2/primary' },
        //     { name: 'Secondary', route: '/swire-tabs-v2/secondary' },
        //     { name: 'Tertiary', route: '/swire-tabs-v2/tertiary' },
        //   ],
        // },
        // { name: 'Template', route: '/template' },
        // { name: 'Tooltip', route: '/swire-tooltip' },
        // { name: 'Table V2', route: '/table' },
        // {
        //   name: 'Tables',
        //   route: '/swire-table/static',
        //   child: [
        //     { name: 'Static', route: '/swire-table/static' },
        //     { name: 'Dynamic', route: '/swire-table/dynamic' },
        //     // { name: 'Editable', route: '/swire-table/editable' },
        //   ],
        // },        
        // { name: 'File Uploader', route: '/uploadfile' },
      ];
      if (isNavigateToUrl) {
        this._router.navigateByUrl('/accordian');
      }
    } else if (type === 'foundation') {
      this.sideMenuBar = [
        { name: 'Colours', route: '/swire-colour' },
        { name: 'Icons', route: '/icon' },
        { name: 'Shadows', route: '/swire-sadow' },
        { name: 'Typography', route: '/swire-typography' },
      ];
      if (isNavigateToUrl) {
        this._router.navigateByUrl('/swire-colour');
      }
    } else if (type === 'development') {
      this.sideMenuBar = [
        { name: 'Angular', route: '/development/angular' },
        { name: 'React', route: '/development/react' },
      ];
      if (isNavigateToUrl) {
        this._router.navigateByUrl('/development/angular');
      }
    }
  }
}


