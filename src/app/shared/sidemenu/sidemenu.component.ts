import { Component, OnInit } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent {
  itemsTemplate: MenuItem[] = [
    {
      title: 'Basics',
      route: './template/basics',
    },
    {
      title: 'Dinamics',
      route: './template/dinamics',
    },
    {
      title: 'Switchs',
      route: './template/switchs',
    },
  ];

  itemsReactive: MenuItem[] = [
    {
      title: 'Basics',
      route: './reactive/basics',
    },
    {
      title: 'Dinamics',
      route: './reactive/dinamics',
    },
    {
      title: 'Switchs',
      route: './reactive/switchs',
    },
  ];

  itemsAuth: MenuItem[] = [
    {
      title: 'Sign-In',
      route: './auth/signin',
    },
    {
      title: 'Sign-Up',
      route: './auth/signup',
    },
  ];
}
