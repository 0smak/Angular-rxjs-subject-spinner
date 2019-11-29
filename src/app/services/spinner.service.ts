import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private spinnerSubject: Subject<any> = new Subject<boolean>();
  public readonly spinnerReceived$: Observable<boolean> = this.spinnerSubject.asObservable();

  constructor() {}

  setSpinnerStatus(status: boolean) {
    this.spinnerSubject.next(status);
  }
}
