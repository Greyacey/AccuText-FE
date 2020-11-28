import { Component, OnInit } from '@angular/core';
import { AccutextService } from '../accutext.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private accte: AccutextService) {
  }

  ngOnInit(): void {

  }

}
