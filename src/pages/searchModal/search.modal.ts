import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'search-modal',
  templateUrl: 'search.modal.html'
})
export class ModalContentPage {
  private dualValue:any;
  private maison:boolean;
  private appart:boolean;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    this.dualValue = {lower :200, upper: 700}
    this.maison = true;
    this.appart = true;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
