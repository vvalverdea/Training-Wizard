import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private muscle = -1;

  set(key: number) {
    this.muscle = key;
  }

  get(): number {
    return this.muscle;
  }

  clear() {
    this.muscle = -1;
  }
}
