import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-m',
  templateUrl: './m.page.html',
  styleUrls: ['./m.page.scss'],
})
export class MPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.mostrarMapa()
  }


  async mostrarMapa() {
    const apiKey = 'AIzaSyBLNIlBXCV_5PMC5SaT-nM7YCCCSimGKRo';

      const mapRef = document.getElementById('map')!;
      const coordinates = await Geolocation.getCurrentPosition();
      const newMap = await GoogleMap.create({
        id: 'my-map',
        element: mapRef,
        apiKey: "AIzaSyBLNIlBXCV_5PMC5SaT-nM7YCCCSimGKRo",
        config: {
          center: {
            lat: coordinates.coords.latitude,
            lng: coordinates.coords.longitude
          },
          zoom: 8,
        },
      });
    }
  }
