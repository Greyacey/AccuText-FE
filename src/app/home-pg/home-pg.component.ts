import { Component, OnInit } from '@angular/core';
import{ AcctextService } from '../acctext.service'

@Component({
  selector: 'app-home-pg',
  templateUrl: './home-pg.component.html',
  styleUrls: ['./home-pg.component.css']
})
export class HomePgComponent implements OnInit {

  constructor(private acctext:AcctextService) { }
  onSubmit(data)
  {
    //console.warn(data)
    this.acctext.saveData(data).subscribe((result)=>{
      console.warn("result is here", result)
    })
  }

  ngOnInit(): void {
    
  }
  

}
