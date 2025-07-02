"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const medicines_controller_1 = require("../controllers/medicines.controller");
const MedicineRouter = express_1.default.Router();
MedicineRouter.post('/', medicines_controller_1.loadMedicines);
MedicineRouter.get('/', medicines_controller_1.getAllMedicines);
exports.default = MedicineRouter;
