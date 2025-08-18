import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCol, IonGrid, IonRow, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonItem } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { StorageService } from '../context/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonItem, IonCardHeader, IonCard, IonToolbar, IonTitle, IonCardTitle, IonCardContent, IonContent, IonCol, IonGrid, IonRow, ExploreContainerComponent],
})
export class Tab1Page {
  constructor(private storage: StorageService, private router: Router) { }

  items = ['Biceps', 'Triceps', 'Chest', 'Back', 'Shoulders', 'Legs', 'Core', 'Forearms']
  selectedIndex: number | null = null;

  ionViewWillEnter() {
    this.storage.clear();
  }

  selectGroup(item: number) {
    this.selectedIndex = item;
    this.storage.set(item)
    this.router.navigate(['/tabs/tab2']);
  }
}
