export type Servers = ReadonlyMap<string, Server>

export interface Server {
  name:       string;
  map:        string;
  password:   boolean;
  raw:        ServerRaw;
  maxplayers: number;
  players:    Player[];
  bots:       any[];
  connect:    string;
  ping:       number;
}

export interface Player {
  name: string;
  raw:  PlayerRaw;
}

export interface PlayerRaw {
  guid:   string;
  team:   number;
  squad:  number;
  kills:  number;
  deaths: number;
  score:  number;
  rank:   number;
  ping:   number;
}

export interface ServerRaw {
  numplayers:        number;
  gametype:          string;
  roundsplayed:      number;
  roundstotal:       number;
  teams:             Team[];
  targetscore:       number;
  status:            string;
  ranked:            boolean;
  punkbuster:        boolean;
  uptime:            number;
  roundtime:         number;
  ip:                string;
  punkbusterversion: string;
  joinqueue:         boolean;
  region:            string;
  pingsite:          string;
  country:           string;
  quickmatch:        boolean;
  version:           string;
}

export interface Team {
  tickets: number;
}
