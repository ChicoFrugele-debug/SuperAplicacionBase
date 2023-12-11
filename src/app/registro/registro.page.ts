// src/app/registro/registro.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el servicio Router

@Component({
  selector: 'app-registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss'],
})
export class RegistroPage {
  userData = {
    username: '',
    email: '',
    password: '',
  };

  // Inyecta el servicio Router en el constructor
  constructor(private router: Router) {}

  register() {
    // Aquí puedes implementar la lógica para enviar los datos de registro al servidor o almacenarlos localmente
    console.log('Datos de registro:', this.userData);

    // Navega a la página de detalles del usuario registrado
    this.router.navigate(['/registrousuario']);
  }
}

