import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  loading: boolean = false;
  elements: Array<string>
  
  constructor(public spinnerService: SpinnerService) {
  }

  ngOnInit(): void {
    this.spinnerService.spinnerReceived$.subscribe(status => this.loading = status );
  }

  async deleteCard(card: string) {
    await this.delay(600);
    this.elements = this.elements.filter(el => el != card);
    this.spinnerService.setSpinnerStatus(false);
  }

  async loadData() {
    this.spinnerService.setSpinnerStatus(true);
    await this.delay(500);
    this.elements = ['hola', 'mundo', 'test', 'input'];
    this.spinnerService.setSpinnerStatus(false);
  }

  delay(ms) {
    return new Promise(r => {setTimeout(r, ms)});
  }
}

