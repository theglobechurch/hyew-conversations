import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ending',
  templateUrl: './ending.page.html',
  styleUrls: ['./ending.page.scss'],
})
export class EndingPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private router: Router,
    public data:DataService
  ) { }

  ngOnInit() {
  }

  // ToDo: Trigger calendar opening
  // async btnMeet() {
  //   const alert = await this.alertController.create({
  //     header: 'Meet Up',
  //     message: 'Get your diary!',
  //     buttons: ['OK']
  //   });

  //   await alert.present();
  // }

  btnEnd() {
    // Forget everything
    this.data.userAnswers = [];

    // And restart
    this.router.navigate(['/home']);
  }

}
