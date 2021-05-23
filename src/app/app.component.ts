import { Component } from '@angular/core';
import { Person } from './models/person';

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco… laboris nisi ut aliquip ex ea commodo consequat… ';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly persons: Person[] = [
    {
      avatar: '/assets/avatar.svg',
      name: 'Jane',
      lastName: 'Doe',
      tags: ['javascript', 'angular', 'rxjs'],
      description,
      promoted: true,
    },
    {
      avatar: '/assets/avatar.svg',
      name: 'John',
      lastName: 'Doe',
      tags: ['typescript', 'nodejs'],
      description,
    },
    {
      avatar: '/assets/avatar.svg',
      name: 'Jane',
      lastName: 'Doe',
      tags: ['aws', 'docker'],
      description,
    },
    {
      avatar: '/assets/avatar.svg',
      name: 'John',
      lastName: 'Doe',
      tags: ['UX', 'UI'],
      description,
    },
  ];
}
