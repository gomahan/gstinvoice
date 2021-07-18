import { Component, OnInit } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Mybusiness } from "../../assets/model/mybusiness.schema";
import { ElectronService } from "../core/services/electron/electron.service";

@Component({
  selector: "app-mybusiness",
  templateUrl: "./mybusiness.component.html",
  styleUrls: ["./mybusiness.component.scss"],
})
export class MybusinessComponent implements OnInit {

  private myBusinessForm;

  constructor(
    private _electronService: ElectronService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {

    this.myBusinessForm = new FormGroup({
      name: new FormControl(''),
      phoneNumber: new FormControl(''),
      pincode: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      currency: new FormControl(''),
      gstin: new FormControl(''),
    });
  

    this.loadValue();
  }

  loadValue(){
    of(this._electronService.ipcRenderer.sendSync('get-mybusiness')).subscribe(
      (Mybusiness)=> {
        console.log(Mybusiness);
        this.myBusinessForm.patchValue(Mybusiness);
      },
      catchError((error: any) => throwError(error.json))
    );
    

  }

  onSubmit(): Observable<Mybusiness[]> {
    let mybusiness = new Mybusiness();
    Object.assign(mybusiness,this.myBusinessForm.value);

    return of(
      this._electronService.ipcRenderer.sendSync("add-mybusiness", mybusiness)
    ).pipe(catchError((error: any) => throwError(error.json)));
  }
}
