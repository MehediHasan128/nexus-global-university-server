import { Request, Response } from "express";
import { UserServices } from "./Users.services";

const createStudent = async(req: Request, res: Response) =>{
    const {password, student} = req.body;
    const result = await UserServices.createStudentIntoDB(password, student);

    res.send({
        success: true,
        statusCode: 200,
        data: result
    })
};


const createFaculty = async(req: Request, res: Response) =>{
    const {password, faculty} = req.body;
    const result = await UserServices.createFacultyIntoDB(password, faculty);

    res.send({
        success: true,
        statusCode: 200,
        data: result
    })
};


export const UserController = {
    createStudent,
    createFaculty
}