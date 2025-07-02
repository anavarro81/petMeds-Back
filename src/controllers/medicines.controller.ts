import { Request, Response, NextFunction } from 'express';
import * as MedicinesService from '../services/medicines.service';

export const loadMedicines = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const insertedMedicines = await MedicinesService.loadMedicines(req.body)
        res.status(201).json({insertedMedicines})


    } catch (error:any) {
        next(error);
    }
}

export const getAllMedicines = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const medicines = await MedicinesService.getAllMedicines()
        res.status(200).json({medicines})


    } catch (error:any) {
        next(error);
    }
}