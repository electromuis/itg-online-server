import {
  LobbyCode,
  LobbyInfo,
  TemporaryLobbyInfo,
  Machine,
  Player,
  PlayerId,
  SongInfo,
  Spectator,
} from '../types/models.types';

export type EventType =
  | 'createLobby'
  | 'joinLobby'
  | 'joinTemporaryLobby'
  | 'lobbyJoined'
  | 'updateMachine'
  | 'machineUpdated'
  | 'leaveLobby'
  | 'lobbyLeft'
  | 'spectateLobby'
  | 'lobbySpectated'
  | 'searchLobby'
  | 'lobbySearched'
  | 'temporaryLobbiesUpdate'
  | 'clientDisconnected'
  | 'readyUp'
  | 'readyUpResult'
  | 'lobbyState'
  | 'selectSong'
  | 'responseStatus'
  | 'startSong';

export type EventData =
  | CreateLobbyData
  | JoinLobbyPayload
  | JoinTemporaryLobbyPayload
  | LobbyJoinedPayload
  | UpdateMachinePayload
  | LeaveLobbyPayload
  | LobbyLeftPayload
  | SearchLobbyPayload
  | LobbySearchedPayload
  | ClientDisconnectedPayload
  | ReadyUpPayload
  | ReadyUpResultPayload
  | LobbyStatePayload
  | SelectSongPayload
  | StartSongPayload;

export interface EventMessage<T = EventData> {
  event: EventType;
  data: T;
}

export interface CreateLobbyData {
  machine: Omit<Machine, 'socketId'>;
  password: string;
}

export interface JoinLobbyPayload {
  machine: Omit<Machine, 'socketId'>;
  code: LobbyCode;
  password?: string;
}

export interface JoinTemporaryLobbyPayload {
  machine: Omit<Machine, 'socketId'>;
  songInfo: SongInfo;
}

export interface LobbyJoinedPayload {
  joined: boolean;
  message?: string;
}

export interface UpdateMachinePayload {
  machine: Omit<Machine, 'socketId'>;
}

export interface ResponseStatusPayload {
  event: EventType;
  success: boolean;
  message?: string;
}

export interface SelectSongPayload {
  songInfo: SongInfo;
}

export interface SpectateLobbyPayload {
  spectator: Spectator;
  code: LobbyCode;
  password: string;
}

export interface LobbySpectatedPayload {
  spectators: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SearchLobbyPayload {
  temporary?: boolean;
}

export interface LobbySearchedPayload {
  lobbies: LobbyInfo[];
}

export interface TemporaryLobbiesUpdatePayload {
  lobbies: TemporaryLobbyInfo[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LeaveLobbyPayload {}

export interface LobbyLeftPayload {
  left: boolean;
}

export interface ReadyUpPayload {
  playerId: PlayerId;
}

export interface ReadyUpResultPayload {
  ready: boolean;
}

export interface ClientDisconnectedPayload {
  reason: string;
}

export interface LobbyStatePayload {
  players: Array<Player>;
  code: LobbyCode;
  songInfo?: SongInfo;
  temporary: boolean;
}

export interface StartSongPayload {
  phase: 
    | 'ScreenGameplayWaiting' // Loading song
    | 'ScreenGameplay' // Done loading
}
