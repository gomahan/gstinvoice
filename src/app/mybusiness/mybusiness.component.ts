import { Component, OnInit } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Mybusiness } from '../../assets/model/mybusiness.schema';
import { ElectronService } from '../core/services/electron/electron.service';

@Component({
  selector: 'app-mybusiness',
  templateUrl: './mybusiness.component.html',
  styleUrls: ['./mybusiness.component.scss']
})
export class MybusinessComponent implements OnInit {

  constructor(private _electronService: ElectronService) {}

  ngOnInit(): void {
    console.log('MybusinessComponent INIT');
   }

   addMyBusiness(): Observable<Mybusiness[]> {
    let mybusiness = new Mybusiness();
    mybusiness.name="name";
    mybusiness.phoneNumber="23232323";
    mybusiness.pincode="232332";
    mybusiness.address="adrfdaf/34/f.34";
    mybusiness.city="chennai";
    mybusiness.currency="Rs";
    mybusiness.gstin="232322323";

    return of(
      this._electronService.ipcRenderer.sendSync('add-mybusiness', mybusiness)
    ).pipe(catchError((error: any) => throwError(error.json)));
    
  }

}
