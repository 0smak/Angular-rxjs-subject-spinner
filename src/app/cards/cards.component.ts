import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner.service'
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {

  @Input() elementName: string;
  @Output() emitDelete = new EventEmitter();

  constructor(public spinnerService: SpinnerService) { }

  ngOnInit() {
  }

  remove(el: string) {
    this.spinnerService.setSpinnerStatus(true)
    this.emitDelete.emit(el)
  }

}
