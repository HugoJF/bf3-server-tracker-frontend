import {Component, Input, OnInit} from '@angular/core';
import {Server} from "../../types";

@Component({
  selector: 'app-server-card[server]',
  templateUrl: './server-card.component.html',
  host: {class: 'contents'}
})
export class ServerCardComponent implements OnInit {
  @Input() server!: Server;

  constructor() {
  }

  ngOnInit(): void {
  }

  gametype() {
    const type = this.server.raw.gametype;
    const types: {[id: string]: string} = {
      ConquestLarge0: 'Conquest Large',
      TeamDeathMatch0: 'Team Deathmatch',
      RushLarge0: 'Rush',
    };

    if (type in types) {
      return types[type];
    }

    return type;
  }

  map() {
    const map = this.server.map;
    const maps: {[id: string]: string} = {
      MP_012: 'Operation Firestorm',
      MP_017: 'Noshahr Canals',
      MP_001: 'Grand Bazaar',
      MP_Subway: 'Operation Metro',
    };

    if (map in maps) {
      return maps[map];
    }

    return this.server.map;
  }

  players() {
    return this.server.raw.numplayers;
  }

  maxPlayers() {
    return this.server.maxplayers;
  }

  duration() {
    let duration = Math.ceil(this.server.raw.roundtime / 60);

    if (duration < 120) {
      return `${duration} min`;
    }

    duration = Math.ceil(duration / 60);

    return `${duration} hours`
  }
}
