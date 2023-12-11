import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { trigger, state, style, transition, animate } from '@angular/animations'; // Importa las animaciones de Angular

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ])
  ]
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';
  errorOccurred: boolean = false;
  errorMessage: string = '';

  constructor(private router: Router, private alertController: AlertController) {}

  ngOnInit() {}

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/home']);
      this.mostrarAlertaExito();
    } else {
      this.errorOccurred = true;
      this.errorMessage = 'Credenciales incorrectas. Por favor, inténtalo de nuevo.';
      this.mostrarAlerta();
    }
  }

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Error de inicio de sesión',
      message: this.errorMessage,
      buttons: ['OK']
    });

    await alert.present();
  }

  async mostrarAlertaExito() {
    const alert = await this.alertController.create({
      header: 'Inicio de Sesión Exitoso',
      message: '¡Bienvenido! Has iniciado sesión exitosamente.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
