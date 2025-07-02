import MedicineModel, {IMedicine} from "../models/medicines.model";

export const loadMedicines = async (medicines: Partial<IMedicine>[]): Promise<IMedicine[]> => {
    try {
        const insertedMedicines = await MedicineModel.insertMany(medicines);
        return insertedMedicines as IMedicine[];
    } catch (error: any) {
        throw error
    }
};

export const getAllMedicines = async (): Promise<IMedicine[]> => {
    try {
        const medicines = MedicineModel.find()
        return medicines
    } catch (error) {
        throw error
    }
}