import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonGrid, IonRow, IonItem, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonLabel, IonInput } from '@ionic/angular/standalone';
import { StorageService } from '../context/storage';
import { EXERCISES_DATA } from '../constants/exercises';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  imports: [IonHeader, IonCard, IonInput, IonCardHeader, IonGrid, IonRow, IonItem, IonToolbar, IonTitle, IonCardTitle, IonContent, IonCardContent, IonButton, IonLabel, FormsModule],
})
export class Tab4Page {

  exerciseId: number = 0;
  exerciseName: string = 'Curl Bíceps con Barra';
  exerciseImage: string = 'assets/exercises/curl-biceps.gif';
  exerciseDescription: string = 'Mantén los codos pegados al cuerpo y controla el movimiento tanto al subir como al bajar la barra.';

  currentSeries = 0;
  totalSeries = 4;
  weight: number = 0;

  timerMinutes: number = 0;
  timeLeft: number = 0;
  timer: any;

  hasStarted = false;

  constructor(private storage: StorageService) { }

  ionViewWillEnter() {
    this.exerciseName = this.storage.getExerciseSelectedByName();
    this.exerciseId = this.storage.getExerciseSelectedById();
    this.exerciseImage = EXERCISES_DATA[this.exerciseId]['image'];
    this.exerciseDescription = EXERCISES_DATA[this.exerciseId]['description'];
  }

  increaseSeries() {
    if (this.currentSeries < this.totalSeries) this.currentSeries++;
  }

  decreaseSeries() {
    if (this.currentSeries > 0) this.currentSeries--;
  }

  startTimer() {
    this.hasStarted = !this.hasStarted;
    this.timeLeft = this.timerMinutes * 60;
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.hasStarted = !this.hasStarted;
        clearInterval(this.timer);
        this.playAlert();
      }
    }, 1000);
  }

  playAlert() {
    const audio = new Audio('assets/sounds/beepalarm.mp3');
    audio.play();
  }
}
