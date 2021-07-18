import { Connection, Repository } from "typeorm";
import { ipcMain } from "electron";
import { Mybusiness } from "../../src/assets/model/mybusiness.schema";

export class MybusinessIPC {
  private _connection: Connection;
  private _repo: Repository<Mybusiness>;

  constructor(connection: Connection) {
    this._connection = connection;
    this._repo = connection.getRepository(Mybusiness);
  }

  listen() {
    ipcMain.on(
      "add-mybusiness",
      async (event: any, _mybusiness: Mybusiness) => {
        try {
          _mybusiness.id=1;
          const mybusiness = await this._repo.create(_mybusiness);
          await this._repo.save(mybusiness);
          var data = await this._repo.find({
            where: [
              { id: 1}
            ]
          });
          event.returnValue = data && data.length>0?data[0]:null;
        } catch (err) {
          throw err;
        }
      }
    );

    ipcMain.on(
      "get-mybusiness",
      async (event: any) => {
        try {
          var data = await this._repo.find({
            where: [
              { id: 1}
            ]
          });
          event.returnValue = data && data.length>0?data[0]:null;
        } catch (err) {
          throw err;
        }
      }
    );
  }
}
