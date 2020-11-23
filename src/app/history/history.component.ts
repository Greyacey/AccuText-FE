import { Component, OnInit } from '@angular/core';
import {AcctextService } from '../acctext.service'
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private accte:AcctextService) { }
  collection = {};
  ngOnInit(): void {
    this.accte.getList().subscribe((result)=>{
      console.warn(result)
      this.collection = result
    })
  }

}
