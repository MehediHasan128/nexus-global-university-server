import { Response } from "express";

// create responce type
type TResponce<T> = {
    statusCode: number;
    success: boolean;
    message?: string;
    data: T
};

export const sendResponce = <T>(res: Response, resData: TResponce<T>) =>{
    res.status(resData?.statusCode).json({
        statusCode: resData.statusCode,
        success: resData.success,
        message: resData.message,
        data: resData.data
    })
} 