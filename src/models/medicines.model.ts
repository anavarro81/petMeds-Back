import mongoose, {Document, Schema, model} from "mongoose";

export interface IMedicine extends Document {
    name: string,
    type?: string,
    use: string,
    router: string
}

const MediceScheme = new Schema ({
    name: {type: String, required:true},
    type: {
        type: String, 
        required: true,
        enum: ['Antibiotico', 'Antiinflamatorio', 'Analgesico', 'Antipiretico', 'Antihistaminico', 'Antidepresivo', 'Ansiolitico', 'Antipsicotico', 'Anticonvulsivo', 'Antidiabetico', 'Antihipertensivo', 'Diurético', 'Suplemento', 'Hormonal']
    },
    use: {type: String, required: true},
    route: {
        type: String, 
        required:true,
        enum: ['Oral', 'Intravenosa', 'Intramuscular', 'Subcutanea', 'Topica', 'Inhalatoria', 'Optica']
    }
}, {
    timestamps: true
})

const MedicineModel = model<IMedicine>("Medine", MediceScheme)
export default MedicineModel;



