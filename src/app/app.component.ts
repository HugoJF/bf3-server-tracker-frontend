import {Component, OnInit} from '@angular/core';
import {ServerQueryService} from "./services/server-query.service";
import {Server} from "../types";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";

const SERVERS: Record<string, string> = {
  '68.232.174.155:25200': 'https://battlelog.battlefield.com/bf3/servers/show/pc/f11676dd-89fc-4795-97a2-44d7c727037c/BEER-RUSH-24-7-CLASSIC-MAPS-Noobs-Pros/',
  '192.223.26.100:25200': 'https://battlelog.battlefield.com/bf3/servers/show/pc/595db209-f43d-4673-8128-44f5f16e4e23/METRO-NO-LAG-ALL-WEAPONS-TBGCLAN-COM/',
  '189.1.172.33:25210': 'https://battlelog.battlefield.com/bf3/servers/show/pc/7cdd6fb2-b58c-4366-8ec2-9e2610649464/BF3ZAO-SEM-MIMIMI-TODOS-OS-MAPAS/',
  '189.1.172.36:25200': 'https://battlelog.battlefield.com/bf3/servers/show/pc/23b75f36-733c-46ba-9239-98104c2a89c0/INFANTARIA-BRASIL-TDM-e-OP-Metro-Explosives-Limited/',
  '189.1.172.35:25200': 'https://battlelog.battlefield.com/bf3/servers/show/pc/6968e632-140e-4a9e-b46a-766f1ae506c6/BIENVENIDOS-A-CAHOS-GAMING-ARGENTINA-METRO-BAZAR-SENA/',
  '189.1.172.36:25210': 'https://battlelog.battlefield.com/bf3/servers/show/pc/ca00886b-991a-4586-ab71-e3817d28bf3e/JRGAMESX-AO-VIVO-AS-8-30-COROLHO-ARMADO/',
  // '185.50.104.68:25502': 'https://battlelog.battlefield.com/bf3/servers/show/pc/47029fcf-563f-4aa3-91da-d5910c7f7cd8/TODOS-OS-MAPAS-Battlefield-da-Depressao-i3D-net/',
  '189.1.172.117:25200': 'https://battlelog.battlefield.com/bf3/servers/show/pc/7ee2e8c8-0e51-41b8-96c3-380d312d4db3/TDM-NOSHAHR-CANALS-1000-TICKETS-64P/',
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
