import { Connection, getConnection} from "typeorm";
import { ipcMain } from "electron";
import { Mybusiness } from "../../src/assets/model/mybusiness.schema";
import { SchemaManager } from "../schemaManager";

export class ElectronIPC {
  private _connection: Connection;

  
  constructor() {
    this._connection = getConnection();
  }
  

  listen() {
    ipcMain.on("getObjectProperties", async (event: any,schemaClassString:String) => {
      var arrRes=[];
      
      this._connection
        .getMetadata(SchemaManager.getSchemaClass(schemaClassString))
        .columns.forEach(function (cm) {
          var res= new Map();
          res.set("name",cm.propertyName); 
          res.set("type",cm.type.toString().substring(9,cm.type.toString().indexOf("()"))); 
          arrRes.push(res);
        });
        event.returnValue = arrRes;
    });

    ipcMain.on(
      "add",
      async (event: any, schemaClassString:String,insertObj: any) => {
        try {
          var _repo = this._connection.getRepository(SchemaManager.getSchemaClass(schemaClassString));
          const insertEntity = await _repo.create(insertObj);
          await _repo.save(insertEntity);
          var data = await _repo.find({
            where: [{ id: 1 }],
          });
          event.returnValue = data && data.length > 0 ? data[0] : null;
        } catch (err) {
          throw err;
        }
      }
    );

    

    ipcMain.on("getAll", async (event: any,schemaClassString:String) => {
      try {
        var _repo = this._connection.getRepository(SchemaManager.getSchemaClass(schemaClassString));
        var data = await _repo.find();
        event.returnValue = data;
      } catch (err) {
        throw err;
      }
    });


   

    ipcMain.on("get", async (event: any,schemaClassString:String,id:any) => {
      try {
        var _repo = this._connection.getRepository(SchemaManager.getSchemaClass(schemaClassString));
        
        var data = await _repo.find({
          where: [{ id: id }],
        });
        event.returnValue = data && data.length > 0 ? data[0] : null;
      } catch (err) {
        throw err;
      }
    });



  }
}

