export type TUserRole = 
| 'admin'
| 'faculty'
| 'student'

export type TUserStatus = 
| 'active'
| 'blocked'

export const userRole: TUserRole[] = [ 'admin', 'faculty', 'student' ];

export const userStatus: TUserStatus[] = [ 'active', 'blocked' ];