import { Inject, Injectable } from '@angular/core';
import { User } from './models';
import { ApiUrl } from 'src/app/config/url.token';
import { ApiUrlConfig } from 'src/app/config/url.token';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    @Inject(ApiUrl)
    private url: ApiUrlConfig
  ) {
    console.log('LA URL INYECTADA ES :', url);
  }

  getUsers(): User[] {
    return [
      {
        id: 1,
        name: 'Mateo',
        lastName: 'López',
        email: 'malo@rumbo.com',
        language: 'inglés',
      },
      {
        id: 2,
        name: 'Camila',
        lastName: 'Sánchez',
        email: 'casa@rumbo.com',
        language: 'francés',
      },
      {
        id: 3,
        name: 'Pedro',
        lastName: 'Rodríguez',
        email: 'pero@rumbo.com',
        language: 'alemán',
      },
    ];
  }
}
