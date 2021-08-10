import { Mybusiness } from "../src/assets/model/mybusiness.schema";
import { Mybusinessbank } from "../src/assets/model/mybusinessbank.schema";
import { Myproduct } from "../src/assets/model/myproduct.schema";
import { Ourgstinfo } from '../src/assets/model/ourgstinfo.schema';

export class SchemaManager{    

    private static schemas = new Map()
            .set('Mybusiness', Mybusiness)
            .set('Mybusinessbank',Mybusinessbank)
            .set('Ourgstinfo',Ourgstinfo)
            .set('Myproduct',Myproduct);

    //TO DO : Yet to be implemented        
    private static fieldProperties = new Map();

    static getEntities(){
        return Array.from( this.schemas.values());
    }

    static getSchemaClass(schemaClassString:String){
        return this.schemas.get(schemaClassString);
    }
}
