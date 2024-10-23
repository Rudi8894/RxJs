import { Component, OnInit } from '@angular/core';
import { ToastMessage, ToastService } from '../toast.service';
import { Subscription, timeout } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})

export class ToastComponent implements OnInit{
  messages: ToastMessage[]= [];

 toastSubscriber = new Subscription(); 
  
constructor(private toastServicer: ToastService){

}

  ngOnInit(): void {
    this.toastSubscriber = this.toastServicer.toastState.subscribe((toast: ToastMessage)=>{
      this.messages.push(toast);
      setTimeout(() => {
        this.removeToast(toast)
      }, 3000);
    });
  }
  removeToast(message: ToastMessage){
    this.messages= this.messages.filter(x=>x !== message);
  }
}
