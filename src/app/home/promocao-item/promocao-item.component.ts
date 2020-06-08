import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { IonButton } from '@ionic/angular';

@Component({
  selector: 'app-promocao-item',
  templateUrl: './promocao-item.component.html',
  styleUrls: ['./promocao-item.component.scss'],
})
export class PromocaoItemComponent implements OnInit {

  @Input() promo: any;

  constructor() { }

  ngOnInit() {}
}
