import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { StorageService } from '../context/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class Tab2Page {


  muscleChosen: string = 'Muscle Group';
  private readonly muscles: string[] = ['Biceps', 'Chest', 'Back', 'Shoulders', 'Legs', 'Core', 'Forearms'];

  constructor(private storage: StorageService) { }

  ionViewWillEnter() {
    this.getMuscle();
  }

  getMuscle() {
    this.muscleChosen = this.muscles[this.storage.get()];
  }
}
