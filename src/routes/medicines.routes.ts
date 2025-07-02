import express from 'express'

import {loadMedicines, getAllMedicines} from '../controllers/medicines.controller'

const MedicineRouter = express.Router();

MedicineRouter.post('/', loadMedicines)
MedicineRouter.get('/', getAllMedicines)

export default MedicineRouter; 