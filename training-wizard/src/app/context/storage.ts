import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private muscle = -1;
  private muscleInfo = '';
  private exerciseSelectedByName = '';
  private exerciseSelectedById = 0;

  set(key: number) {
    this.muscle = key;
  }

  setMuscleInfo(muscleInfo: string) {
    this.muscleInfo = muscleInfo;
  }

  setExerciseSelected(exercise: any) {
    this.exerciseSelectedByName = exercise.title;
    this.exerciseSelectedById = exercise.id;
  }

  get(): number {
    return this.muscle;
  }

  getMuscleInfo(): string {
    return this.muscleInfo;
  }

  getExerciseSelectedById(): number {
    return this.exerciseSelectedById;
  }

  getExerciseSelectedByName(): string {
    return this.exerciseSelectedByName;
  }

  clear() {
    this.muscle = -1;
    this.muscleInfo = '';
  }
}
