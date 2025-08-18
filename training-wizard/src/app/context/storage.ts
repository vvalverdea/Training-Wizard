import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private muscle = -1;
  private muscleInfo = '';

  set(key: number) {
    console.log(key)
    this.muscle = key;
  }

  setMuscleInfo(muscleInfo: string) {
    this.muscleInfo = muscleInfo;
  }

  get(): number {
    return this.muscle;
  }

  getMuscleInfo(): string {
    return this.muscleInfo;
  }

  clear() {
    this.muscle = -1;
    this.muscleInfo = '';
  }
}
