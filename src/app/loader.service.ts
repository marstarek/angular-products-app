import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private isLoadingBehavior = new BehaviorSubject(true);
  isLoading = this.isLoadingBehavior.asObservable();
  constructor() {}
  getIsLoading() {
    return this.isLoadingBehavior;
  }

  setIsLoading(newValue) {
    this.isLoadingBehavior.next(newValue);
  }
}
