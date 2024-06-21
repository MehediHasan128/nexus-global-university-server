export type TUserRole = 
| 'admin'
| 'faculty'
| 'student'

export type TUserStatus = 
| 'in-progress'
| 'blocked'

export const userRole: TUserRole[] = [ 'admin', 'faculty', 'student' ];

export const userStatus: TUserStatus[] = [ 'in-progress', 'blocked' ];