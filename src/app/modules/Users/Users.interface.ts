import { TUserRole, TUserStatus } from "./Users.constant";

export type TUser = {
    id: string;
    password: string;
    needsPasswordChange: boolean;
    role: TUserRole;
    status: TUserStatus;
    isDeleted: boolean;
}