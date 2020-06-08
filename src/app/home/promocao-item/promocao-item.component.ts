import { Component, OnInit, Input } from '@angular/core';

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
