import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ToastMessage{
  message:string,
  type: 'success'|'error' | 'warning' | 'info'
}
@Injectable({
  providedIn: 'root'
})
export class ToastService {

  subject = new Subject<ToastMessage>();

  toastState = this.subject.asObservable();

  constructor() { }

  show(msg: string, type: 'success' | 'error' | 'warning' | 'info' ){
    this.subject.next({type: type, message: msg});
  }
}
