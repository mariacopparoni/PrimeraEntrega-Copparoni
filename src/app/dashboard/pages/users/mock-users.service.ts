import { Injectable } from '@angular/core';
import { User } from './models';

@Injectable({
  providedIn: 'root',
})
export class MockUsersService {
  constructor() {}

  getUsers(): User[] {
    console.log('Retornando data mock');
    return [
      {
        id: 1,
        name: 'Luis',
        lastName: 'Jofré',
        email: 'lujo@rumbo.com',
        language: 'inglés',
      },
      {
        id: 2,
        name: 'Julieta',
        lastName: 'González',
        email: 'jugo@rumbo.com',
        language: 'francés',
      },
    ];
  }
}
