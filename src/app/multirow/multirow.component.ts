import { Component, OnInit } from "@angular/core";
import { of, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { ElectronService } from "../core/services/electron/electron.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: "app-multirow",
  templateUrl: "./multirow.component.html",
  styleUrls: ["./multirow.component.scss"],
})
export class MultirowComponent implements OnInit {
  public schemaClass;
  public schemaClassString;
  public editpath;
  public metaData;
  public heading;
  public data=[];
  public dataSource;
  public displayedColumns=['action'];
  

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
      this.metaData = Myobject;

      for (var field of this.metaData) {
        this.displayedColumns.push(field.get("name"));
      }
      
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
        this.data = Myobject;
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
