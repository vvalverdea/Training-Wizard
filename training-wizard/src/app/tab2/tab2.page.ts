import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonItem } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { StorageService } from '../context/storage';
import { MUSCLE_PARTS, muscles } from '../constants/muscles';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonGrid, IonRow, IonItem, IonContent, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class Tab2Page {


  muscleChosen: string = 'Muscle Group';
  parts: string[] = [];

  constructor(private storage: StorageService, private router: Router) { }

  async ionViewWillEnter() {
    await this.getMuscle();
    this.parts = MUSCLE_PARTS[this.muscleChosen];
  }

  async getMuscle() {
    this.muscleChosen = muscles[this.storage.get()];
  }

  selectPart(part: string) {
    console.log(`Seleccionado: ${this.muscleChosen} → ${part}`);
    this.storage.setMuscleInfo(part)
    this.router.navigate(['/tabs/tab3']);
  }
}
