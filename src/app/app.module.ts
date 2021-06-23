import { PlayersService } from './shared/players.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { StartGameComponent } from './start-game/start-game.component';

@NgModule({
  declarations: [AppComponent, AddPlayerComponent, StartGameComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  providers: [PlayersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
