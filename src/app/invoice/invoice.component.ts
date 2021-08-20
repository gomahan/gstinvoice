import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Observable, of, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { ElectronService } from "../core/services/electron/electron.service";

@Component({
    selector: "app-invoice",
    templateUrl: "./invoice.component.html",
    styleUrls: ["./invoice.component.scss"],
  })


  export class InvoiceComponent implements OnInit {

   

  public myForm;
  public schemaClass;
  public schemaClassString;
  public metaData;
  public heading;
  public recordKey=1;

  constructor(
    private _electronService: ElectronService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {

    this.route.data.subscribe(data => {
      this.schemaClass=data.schemaClass;
      this.heading = data.heading;
      this.schemaClassString = data.schemaClassString;
    })

    this.route.queryParams.subscribe(qp => {
      if(qp.id){
        this.recordKey=qp.id;
      }

    })

    of(this._electronService.ipcRenderer.sendSync('getObjectProperties',this.schemaClassString)).subscribe(
      (Myobject)=> {
        this.metaData=Myobject;
      });
    
    //;

    
    
    let fgjson={};

    for (var field of this.metaData) {
      fgjson[field.get("name")] = new FormControl('');
    }
    this.myForm = new FormGroup(fgjson);
  

    this.loadValue();
  }

  loadValue(){
    of(this._electronService.ipcRenderer.sendSync('get',this.schemaClassString,this.recordKey)).subscribe(
      (Myobject)=> {
        console.log(Myobject);
        this.myForm.patchValue(Myobject);
      },
      catchError((error: any) => throwError(error.json))
    );
    

  }

  onSubmit(): Observable<any[]> {
    console.debug(this.schemaClass);
    let myObject = new this.schemaClass();
    Object.assign(myObject,this.myForm.value);
    myObject.id = this.recordKey;

    return of(
      this._electronService.ipcRenderer.sendSync('add',this.schemaClassString,myObject)
    ).pipe(catchError((error: any) => throwError(error.json)));
  }

    
  }