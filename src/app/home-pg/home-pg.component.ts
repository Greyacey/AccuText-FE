import { Component, OnInit } from '@angular/core';
import{ AcctextService } from '../acctext.service'
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-home-pg',
  templateUrl: './home-pg.component.html',
  styleUrls: ['./home-pg.component.css']
})
export class HomePgComponent implements OnInit {

  data:[][];
  constructor(private acctext:AcctextService) { }
  onSubmit(test)
  {
    test.numfile = this.data
    console.warn(test)
    
  }

  ngOnInit(): void {
    
  }
  onFileChange(evt: any){
    const target : DataTransfer = <DataTransfer>(evt.target);

    if (target.files.length !== 1) throw new Error('Cannot use multile files');

    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary'});
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1}))
      console.log(this.data)

    };

    reader.readAsBinaryString(target.files[0]);

  }
  

}
