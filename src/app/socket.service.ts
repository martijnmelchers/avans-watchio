import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as io from 'socket.io-client';
import Socket = SocketIOClient.Socket;

@Injectable({
  providedIn: 'root'
})
export class SocketService {
    private _socket: SocketIOClient.Socket;

    constructor() {
      this._socket =  io.connect(`${environment.endpoints.api}`);
    }

    GetSocket(): Socket{
        return this._socket;
    }
}