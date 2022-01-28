import {Component, OnInit} from '@angular/core';
import {ServerQueryService} from "./services/server-query.service";
import {Server} from "../types";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";

const SERVERS: Record<string, string> = {
  // '177.54.148.55:25210': 'https://battlelog.battlefield.com/bf3/servers/show/pc/ca70bac8-a86e-46fa-9b73-79a5828b9366/Le-Helicopterinho-Players-28-1000-Tickets-em-TDM/',
  '185.50.104.71:25505': 'https://battlelog.battlefield.com/bf3/servers/show/pc/d135b5a4-3a94-48b9-9069-979e16bbb8fa/TOP-BRAZIL-CONQUEST-TDM-1500-TICKETS/',
  '185.50.104.68:25507': 'https://battlelog.battlefield.com/bf3/servers/show/pc/47029fcf-563f-4aa3-91da-d5910c7f7cd8/TODOS-OS-MAPAS-Battlefield-da-Depressao-i3D-net/',
  '68.232.174.155:25200': 'https://battlelog.battlefield.com/bf3/servers/show/pc/f11676dd-89fc-4795-97a2-44d7c727037c/BEER-RUSH-24-7-CLASSIC-MAPS-Noobs-Pros/',
  '192.223.26.100:25200': 'https://battlelog.battlefield.com/bf3/servers/show/pc/f11676dd-89fc-4795-97a2-44d7c727037c/BEER-RUSH-24-7-CLASSIC-MAPS-Noobs-Pros/',
  // '189.1.172.34:25200': 'https://battlelog.battlefield.com/bf3/servers/show/pc/b5b455d3-8edb-42ec-9c1a-0974b83cf385/ELTD-EliTE-DangerouS/',
  // '185.50.104.70:25515': 'https://battlelog.battlefield.com/bf3/servers/show/pc/b5e38f09-c81c-44af-b782-92a2030f0ab5/TOP-BRAZIL-CONQUEST-1500-TICKETS/',
  // '185.50.104.68:25515': 'https://battlelog.battlefield.com/bf3/servers/show/pc/34d426bf-d297-44c7-ae80-1c16c46d64c0/BF3ZAO-SEM-MIMIMI-TODOS-OS-MAPAS/',
};

const headers = [
  '💯choro',
  'Top massa do BF3',
  'Tem metro?',
  'Sem metro né?',
  '"Só tem Nosharn Canals"',
  '"Beer tá morto"',
  '"Beer tá cheio"',
  '"Hora do SpeedRunners?"',
  'Falta de criatividade pra frases novas',
  'VVVV o servidor vazio 😂 VVVV',
  'Bolsonaro é corno',
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'bf3-server-monitor';
  loading = true;
  servers = SERVERS;
  servers$?: Observable<{ ip: string, data: Server}[]>;
  header!: string;

  constructor(private query: ServerQueryService) {
    this.header = headers[Math.floor(headers.length * Math.random())];
  }

  ngOnInit(): void {
    this.servers$ = this
      .query
      .query(Object.keys(SERVERS))
      .pipe(
        map(data => Object.entries(data)),
        map((data) => (data.map(([ip, data]) => ({ip, data})))),
        tap(() => this.loading = false),
      )
  }
}
