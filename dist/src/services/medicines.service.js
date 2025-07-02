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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMedicines = exports.loadMedicines = void 0;
const medicines_model_1 = __importDefault(require("../models/medicines.model"));
const loadMedicines = (medicines) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const insertedMedicines = yield medicines_model_1.default.insertMany(medicines);
        return insertedMedicines;
    }
    catch (error) {
        throw error;
    }
});
exports.loadMedicines = loadMedicines;
const getAllMedicines = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const medicines = medicines_model_1.default.find();
        return medicines;
    }
    catch (error) {
        throw error;
    }
});
exports.getAllMedicines = getAllMedicines;
