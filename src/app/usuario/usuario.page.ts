import { Storage } from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';
export interface Viaje {
  id: number,
  hora: string,
  capacidad: number,
  destino: string,
  precio: number
}

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  viajes: Viaje[] = []

  constructor(private storage: Storage) { }

  async ngOnInit() {


  }

  async ionViewDidEnter() {
    this.viajes = await this.storage.get("viajes") || []
    setInterval(async () => {
      this.viajes = await this.storage.get("viajes") || []
    }, 5000);
  }

}
