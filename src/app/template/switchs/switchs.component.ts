import { Component } from '@angular/core';

@Component({
  selector: 'app-switchs',
  templateUrl: './switchs.component.html',
  styleUrls: ['./switchs.component.css'],
})
export class SwitchsComponent {
  person = {
    genre: 'F',
    notifications: true,
  };

  terms: boolean = true;
}
