import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonGrid, IonRow, IonItem, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonLabel } from '@ionic/angular/standalone';
import { StorageService } from '../context/storage';
import { EXERCISES_DATA } from '../constants/exercises';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  imports: [IonHeader, IonCard, IonCardHeader, IonGrid, IonRow, IonItem, IonToolbar, IonTitle, IonCardTitle, IonContent, IonCardContent, IonButton, IonLabel],
})
export class Tab4Page {

  exerciseId: number = 0;
  exerciseName: string = 'Curl Bíceps con Barra';
  exerciseImage: string = 'assets/exercises/curl-biceps.gif';
  exerciseDescription: string = 'Mantén los codos pegados al cuerpo y controla el movimiento tanto al subir como al bajar la barra.';

  totalSeries: number = 4;
  currentSeries: number = 0;
  selectedWeight: number | null = null;

  constructor(private storage: StorageService) { }

  ionViewWillEnter() {
    this.exerciseName = this.storage.getExerciseSelectedByName();
    this.exerciseId = this.storage.getExerciseSelectedById();
    this.exerciseImage = EXERCISES_DATA[this.exerciseId]['image']
    console.log('id', this.exerciseId, 'image', this.exerciseImage)
  }

  increaseSeries() {
    if (this.currentSeries < this.totalSeries) {
      this.currentSeries++;
    }
  }

  decreaseSeries() {
    if (this.currentSeries > 0) {
      this.currentSeries--;
    }
  }

}
