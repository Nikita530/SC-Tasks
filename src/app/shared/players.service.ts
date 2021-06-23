import { Injectable } from '@angular/core';

interface user {
  username: string;
  email: string;
  a: () => string;
}

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  players: user[] = [];

  constructor() {}
}
