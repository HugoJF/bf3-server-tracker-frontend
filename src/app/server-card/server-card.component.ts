import {Component, Input, OnInit} from '@angular/core';
import {Server} from "../../types";

@Component({
  selector: 'app-server-card[server]',
  templateUrl: './server-card.component.html',
  host: {class: 'contents'}
})
export class ServerCardComponent implements OnInit {
  @Input() server!: Server;
  @Input() url!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  gametype() {
    const type = this.server.raw.gametype;
    const types: { [id: string]: string } = {
      ConquestSmall0: 'Conquest',
      ConquestLarge0: 'Conquest Large',
      ConquestSmall1: 'Conquest Assault',
      TeamDeathMatch0: 'Team Deathmatch',
      RushLarge0: 'Rush',
      SquadRush0: 'Squad Rush',
      SquadDeathMatch0: 'Squad Deathmatch',
    };

    if (type in types) {
      return types[type];
    }

    return type;
  }

  map() {
    const map = this.server.map;
    const maps: { [id: string]: string } = {
      MP_001: 'Grand Bazaar',
      MP_003: 'Tehran Highway',
      MP_007: 'Caspian Border',
      MP_011: 'Seine Crossing',
      MP_012: 'Operation Firestorm',
      MP_013: 'Damavand Peak',
      MP_017: 'Noshahr Canals',
      MP_018: 'Kharg Island',
      MP_Subway: 'Operation Metro',
      XP1_001: 'Strike at Karkand',
      XP1_002: 'Gulf of Oman',
      XP1_003: 'Sharqi Peninsula',
      XP1_004: 'Wake Island',
      XP2_Factory: 'Scrapmetal',
      XP2_Office: 'Operation 925',
      XP2_Palace: 'Donya Fortress',
      XP2_Skybar: 'Ziba Tower',
      XP3_Alborz: 'Alborz Mountains',
      XP3_Desert: 'Bandar Desert',
      XP3_Shield: 'Armored Shield',
      XP3_Valley: 'Death Valley',
      XP4_FD: 'Markaz Monolith',
      XP4_Quake: 'Epicenter',
      XP4_Rubble: 'Talah Market',
      XP4_Parl: 'Azadi Palace',
      XP5_001: 'Operation Riverside',
      XP5_002: 'Nebandan Flats',
      XP5_003: 'Kiasar Railroad',
      XP5_004: 'Sabalan Pipeline',
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
