"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectronIPC = void 0;
var typeorm_1 = require("typeorm");
var electron_1 = require("electron");
var schemaManager_1 = require("../schemaManager");
var ElectronIPC = /** @class */ (function () {
    function ElectronIPC() {
        this._connection = typeorm_1.getConnection();
    }
    ElectronIPC.prototype.listen = function () {
        var _this = this;
        electron_1.ipcMain.on("getObjectProperties", function (event, schemaClassString) { return __awaiter(_this, void 0, void 0, function () {
            var arrRes;
            return __generator(this, function (_a) {
                arrRes = [];
                this._connection
                    .getMetadata(schemaManager_1.SchemaManager.getSchemaClass(schemaClassString))
                    .columns.forEach(function (cm) {
                    var res = new Map();
                    res.set("name", cm.propertyName);
                    res.set("type", cm.type.toString().substring(9, cm.type.toString().indexOf("()")));
                    arrRes.push(res);
                });
                event.returnValue = arrRes;
                return [2 /*return*/];
            });
        }); });
        electron_1.ipcMain.on("add", function (event, schemaClassString, insertObj) { return __awaiter(_this, void 0, void 0, function () {
            var _repo, insertEntity, data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        _repo = this._connection.getRepository(schemaManager_1.SchemaManager.getSchemaClass(schemaClassString));
                        return [4 /*yield*/, _repo.create(insertObj)];
                    case 1:
                        insertEntity = _a.sent();
                        return [4 /*yield*/, _repo.save(insertEntity)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, _repo.find({
                                where: [{ id: 1 }],
                            })];
                    case 3:
                        data = _a.sent();
                        event.returnValue = data && data.length > 0 ? data[0] : null;
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        throw err_1;
                    case 5: return [2 /*return*/];
                }
            });
        }); });
        electron_1.ipcMain.on("getAll", function (event, schemaClassString) { return __awaiter(_this, void 0, void 0, function () {
            var _repo, data, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        _repo = this._connection.getRepository(schemaManager_1.SchemaManager.getSchemaClass(schemaClassString));
                        return [4 /*yield*/, _repo.find()];
                    case 1:
                        data = _a.sent();
                        event.returnValue = data;
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        throw err_2;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        electron_1.ipcMain.on("get", function (event, schemaClassString, id) { return __awaiter(_this, void 0, void 0, function () {
            var _repo, data, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        _repo = this._connection.getRepository(schemaManager_1.SchemaManager.getSchemaClass(schemaClassString));
                        return [4 /*yield*/, _repo.find({
                                where: [{ id: id }],
                            })];
                    case 1:
                        data = _a.sent();
                        event.returnValue = data && data.length > 0 ? data[0] : null;
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        throw err_3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    return ElectronIPC;
}());
exports.ElectronIPC = ElectronIPC;
//# sourceMappingURL=electron.ipc.js.map