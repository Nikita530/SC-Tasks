import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../shared/player.service';


@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent implements OnInit {
  public players: any;

  constructor() {
   }

  ngOnInit(): void {
    
  }

}
