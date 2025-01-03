import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastService } from './toast.service';
import { ToastComponent } from "./toast/toast.component";
import { randomUUID } from 'crypto';
import { HomeComponent } from "./home/home.component";
import { NavComponent } from "./nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastComponent, HomeComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-rxjs';
  constructor(private toastService: ToastService){

  }

  pushMessage(){
    this.toastService.show('hasdasdasdasdasdasdasdas  sdfsdffffffffffffffffffffffffffffffffffffff     dddddddddddddddddddd '+ Date.now().toLocaleString(), 'error');
  }


}
