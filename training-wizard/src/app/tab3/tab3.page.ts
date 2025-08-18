import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonGrid, IonRow, IonItem } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { StorageService } from '../context/storage';
import { exercises } from '../constants/exercises';
import { muscles } from '../constants/muscles';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonCard, IonGrid, IonRow, IonItem, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab3Page {

  exerciseTable: any[] = [];

  constructor(private storage: StorageService) { }

  ionViewWillEnter() {
    this.getExercises();
  }

  getExercises() {
    const muscle = muscles[this.storage.get()];
    const musclePart = this.storage.getMuscleInfo();

    this.exerciseTable = exercises[muscle][musclePart];
  }
}
