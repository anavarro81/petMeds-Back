"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MediceScheme = new mongoose_1.Schema({
    name: { type: String, required: true },
    type: {
        type: String,
        required: true,
        enum: ['Antibiotico', 'Antiinflamatorio', 'Analgesico', 'Antipiretico', 'Antihistaminico', 'Antidepresivo', 'Ansiolitico', 'Antipsicotico', 'Anticonvulsivo', 'Antidiabetico', 'Antihipertensivo', 'Diurético', 'Suplemento', 'Hormonal']
    },
    use: { type: String, required: true },
    route: {
        type: String,
        required: true,
        enum: ['Oral', 'Intravenosa', 'Intramuscular', 'Subcutanea', 'Topica', 'Inhalatoria', 'Optica']
    }
}, {
    timestamps: true
});
const MedicineModel = (0, mongoose_1.model)("Medine", MediceScheme);
exports.default = MedicineModel;
