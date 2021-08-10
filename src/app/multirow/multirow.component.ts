import { Component, OnInit } from "@angular/core";
import { of, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { ElectronService } from "../core/services/electron/electron.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-multirow",
  templateUrl: "./multirow.component.html",
  styleUrls: ["./multirow.component.scss"],
})
export class MultirowComponent implements OnInit {
  public schemaClass;
  public schemaClassString;
  public metaData;
  public heading;
  public data;

  constructor(
    private _electronService: ElectronService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.schemaClass = data.schemaClass;
      this.heading = data.heading;
      this.schemaClassString = data.schemaClassString;
    });

    of(
      this._electronService.ipcRenderer.sendSync(
        "getObjectProperties",
        this.schemaClassString
      )
    ).subscribe((Myobject) => {
      this.metaData = Myobject;
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
      },
      catchError((error: any) => throwError(error.json))
    );
  }
}
