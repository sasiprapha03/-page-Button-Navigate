import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {

  constructor( public route : NavController) { }

  ngOnInit() {
  }
gohome() {
  this.route.navigateForward('/home')
}
}
