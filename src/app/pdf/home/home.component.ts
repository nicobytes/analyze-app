
import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';

// import { LoggerService } from './../../core/services/logger.service';
import { LoggerService } from '@core/services/logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  generatePdf() {
    const doc = new jsPDF();
    doc.text('Hello world!', 10, 10);
    doc.save('a4.pdf');
  }

}
