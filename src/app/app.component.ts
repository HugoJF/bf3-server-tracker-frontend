import {Component, OnInit} from '@angular/core';
import {ServerQueryService} from "./services/server-query.service";
import {Server} from "../types";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";

const SERVERS = [
  '177.54.148.55:25210',  // https://battlelog.battlefield.com/bf3/servers/show/pc/ca70bac8-a86e-46fa-9b73-79a5828b9366/Le-Helicopterinho-Players-28-1000-Tickets-em-TDM/
  '185.50.104.68:25507',  // https://battlelog.battlefield.com/bf3/servers/show/pc/47029fcf-563f-4aa3-91da-d5910c7f7cd8/TODOS-OS-MAPAS-Battlefield-da-Depressao-i3D-net/
  '189.1.172.34:25200',   // https://battlelog.battlefield.com/bf3/servers/show/pc/b5b455d3-8edb-42ec-9c1a-0974b83cf385/ELTD-EliTE-DangerouS/
  '185.50.104.70:25515',  // https://battlelog.battlefield.com/bf3/servers/show/pc/b5e38f09-c81c-44af-b782-92a2030f0ab5/TOP-BRAZIL-CONQUEST-1500-TICKETS/
  '185.50.104.68:25515',  // https://battlelog.battlefield.com/bf3/servers/show/pc/34d426bf-d297-44c7-ae80-1c16c46d64c0/BF3ZAO-SEM-MIMIMI-TODOS-OS-MAPAS/
  '68.232.174.155:25200', // BEER & RUSH 24/7 | CLASSIC MAPS | Noobs & Pros!
];

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
  servers$?: Observable<Server[]>;
  header!: string;

  constructor(private query: ServerQueryService) {
    this.header = headers[Math.floor(headers.length * Math.random())];
  }

  ngOnInit(): void {
    this.servers$ = this
      .query
      .query(SERVERS)
      .pipe(
        map(server => Object.values(server) as Server[]),
        map(server => server.filter(server => server.name)),
        tap(() => this.loading = false),
      )
  }
}
