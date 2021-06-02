import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransfererncia: any[];

  constructor() {
    this.listaTransfererncia = [];
  }

  get Transferencias() {
    return this.listaTransfererncia;
  }

  adicionar(transferencia: any) {
    this.hidratar(transferencia);

    this.listaTransfererncia.push(transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }

}
