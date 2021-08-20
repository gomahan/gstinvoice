"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaManager = void 0;
var mybusiness_schema_1 = require("../src/assets/model/mybusiness.schema");
var mybusinessbank_schema_1 = require("../src/assets/model/mybusinessbank.schema");
var myproduct_schema_1 = require("../src/assets/model/myproduct.schema");
var mycustomer_schema_1 = require("../src/assets/model/mycustomer.schema");
var ourgstinfo_schema_1 = require("../src/assets/model/ourgstinfo.schema");
var myinvoice_schema_1 = require("../src/assets/model/myinvoice.schema");
var particular_schema_1 = require("../src/assets/model/particular.schema");
var SchemaManager = /** @class */ (function () {
    function SchemaManager() {
    }
    SchemaManager.getEntities = function () {
        return Array.from(this.schemas.values());
    };
    SchemaManager.getSchemaClass = function (schemaClassString) {
        return this.schemas.get(schemaClassString);
    };
    SchemaManager.schemas = new Map()
        .set('Mybusiness', mybusiness_schema_1.Mybusiness)
        .set('Mybusinessbank', mybusinessbank_schema_1.Mybusinessbank)
        .set('Ourgstinfo', ourgstinfo_schema_1.Ourgstinfo)
        .set('Myproduct', myproduct_schema_1.Myproduct)
        .set('Mycustomer', mycustomer_schema_1.Mycustomer)
        .set('Myinvoice', myinvoice_schema_1.Myinvoice)
        .set('particular', particular_schema_1.Particular);
    //TO DO : Yet to be implemented        
    SchemaManager.fieldProperties = new Map();
    return SchemaManager;
}());
exports.SchemaManager = SchemaManager;
//# sourceMappingURL=schemaManager.js.map