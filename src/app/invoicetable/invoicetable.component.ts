import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from "@angular/router";
import { of, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { ElectronService } from "../core/services/electron/electron.service";

@Component({
    selector: "app-invoicetable",
    templateUrl: "./invoicetable.component.html",
    styleUrls: ["./invoicetable.component.scss"],
  })


  export class InvoicetableComponent implements OnInit {
    public schemaClass;
    public schemaClassString;
    public editpath;
    public metaData;
    public heading;
    public data=[];
    public dataSource;
    public displayedColumns=['action','id','createdOn','customerName','items'];
    
  
    constructor(
      private _electronService: ElectronService,
      private route: ActivatedRoute,
      private navRoute: Router,
    ) {}
  
    ngOnInit(): void {
      this.route.data.subscribe((data) => {
        this.schemaClass = data.schemaClass;
        this.heading = data.heading;
        this.schemaClassString = data.schemaClassString;
        this.editpath = data.editpath;
      });
  
      of(
        this._electronService.ipcRenderer.sendSync(
          "getObjectProperties",
          this.schemaClassString
        )
      ).subscribe((Myobject) => {
        var res= new Map();
        res.set("name",'items'); 
        res.set("type",'string');
        Myobject.push(res);
        this.metaData = Myobject;
  
       /* for (var field of this.metaData) {
          this.displayedColumns.push(field.get("name"));
        }*/
        
      });
      this.loadValue();
    }
  
    loadValue() {
      of(
        this._electronService.ipcRenderer.sendSync(
          "getAll",
          this.schemaClassString,
          1
        )
      ).subscribe(
        (Myobject) => {
          this.data = Myobject.map((row)=>{
            row.items=row['particulars'].map(o => o.name+"("+o.quantity+")").join(', ');
            return row;
          });
          
          this.dataSource = new MatTableDataSource<any>(this.data);
        },
        catchError((error: any) => throwError(error.json))
      );
    }
  
    startEdit(record:any){
      this.navRoute.navigate(['/'+this.editpath],{ queryParams: { id: record.id } })
    }
  
    startAdd(){
      var newId =1;
      if(this.data && this.data.length>0){
        var maxId = Math.max.apply(Math,this.data.map(function(o){return o.id;}))
        newId = maxId+1;
      }
      this.navRoute.navigate(['/'+this.editpath],{ queryParams: { id: newId } })
    }


    
  }