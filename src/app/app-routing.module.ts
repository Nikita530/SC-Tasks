import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerComponent } from './add-player/add-player.component';
import { StartGameComponent } from './start-game/start-game.component';

const routes: Routes = [
  {path: '', redirectTo: '/start-game', pathMatch: 'full' },
  {path: 'start-game', component: StartGameComponent},
  {path: 'add-player', component: AddPlayerComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
