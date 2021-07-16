import { Connection, Repository } from "typeorm";
import { ipcMain } from 'electron';
import { Mybusiness } from "../../src/assets/model/mybusiness.schema";

export class MybusinessIPC {
    private _connection: Connection;
    private _repo: Repository<Mybusiness>;

    constructor(
        connection: Connection,
    ) {
        this._connection = connection;
        this._repo=connection.getRepository(Mybusiness);
    }


    listen() {
        ipcMain.on('add-mybusiness', async (event: any, _mybusiness: Mybusiness) => {
            try {
              const mybusiness = await this._repo.create(_mybusiness);
              await this._repo.save(mybusiness);
              event.returnValue = await this._repo.find();
            } catch (err) {
              throw err;
            }
          });
    }

 


}