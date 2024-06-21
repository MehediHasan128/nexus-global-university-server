import { Schema, model } from "mongoose";
import { TUser } from "./Users.interface";
import { userRole, userStatus } from "./Users.constant";

const createUserSchema = new Schema<TUser>({
    id: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    needsPasswordChange: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        enum: userRole
    },
    status: {
        type: String,
        enum: userStatus,
        default: 'in-progress'
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
});

export const User = model<TUser>('User', createUserSchema);